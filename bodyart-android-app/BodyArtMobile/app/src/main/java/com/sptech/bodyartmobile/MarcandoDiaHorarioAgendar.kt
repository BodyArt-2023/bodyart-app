package com.sptech.bodyartmobile

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.*
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.api.AgendaApi
import com.sptech.bodyartmobile.retrofit.model.request.AgendaRequest
import com.sptech.bodyartmobile.retrofit.model.request.UsuarioRequest
import com.sptech.bodyartmobile.retrofit.model.response.ServicoResponse
import com.sptech.bodyartmobile.retrofit.model.response.AgendaResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.io.Serializable
import java.util.*
import java.text.SimpleDateFormat
import java.util.Locale

class MarcandoDiaHorarioAgendar : AppCompatActivity() {
    private lateinit var calendarView: CalendarView
    private lateinit var llTimeButtons: LinearLayout
    private lateinit var btnAgendar: Button
    private lateinit var selectedDate: String
    private lateinit var selectedTime: String

    private var nomeHeader: String? = null
    private var idHeader: Long? = null
    private var fotoHeader: String? = null
    private var avaliacaoHeader: Double? = null

    private var idServico: Long? = null

    private var idUser: Long? = 9

    private val agendaApi = Apis.getAgendamentosApi()

    override fun onCreate(savedInstanceState: Bundle?) {

        nomeHeader = intent.getStringExtra("nomeHeader")
        idHeader = intent.getLongExtra("idHeader", 1)
        fotoHeader = intent.getStringExtra("fotoHeader")
        avaliacaoHeader = intent.getDoubleExtra("avaliacaoHeader", 4.5)

        idServico = intent.getLongExtra("idServico", 1)

        idUser = intent.getLongExtra("idUser", 1)

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_marcando_dia_horario_agendar)

        calendarView = findViewById(R.id.calendarView)
        llTimeButtons = findViewById(R.id.llTimeButtons)
        btnAgendar = findViewById(R.id.btnAgendar)

        val currentDate = Calendar.getInstance()
        val currentYear = currentDate.get(Calendar.YEAR)
        val currentMonth = currentDate.get(Calendar.MONTH)
        val currentDay = currentDate.get(Calendar.DAY_OF_MONTH)

        // Define a data mínima como o primeiro dia do mês atual
        val minDate = Calendar.getInstance()
        minDate.set(currentYear, currentMonth, 1)

        // Define a data máxima como o último dia do mês atual
        val maxDate = Calendar.getInstance()
        maxDate.set(currentYear, currentMonth, maxDate.getActualMaximum(Calendar.DAY_OF_MONTH))

        // Define os limites do CalendarView
        calendarView.minDate = minDate.timeInMillis
        calendarView.maxDate = maxDate.timeInMillis

        calendarView.setOnDateChangeListener { _, year, month, dayOfMonth ->
            selectedDate = "${dayOfMonth}/${month + 1}/${year}"
        }

        createFixedTimeButtons()

        btnAgendar.setOnClickListener {
            if (::selectedDate.isInitialized && ::selectedTime.isInitialized) {
                val msgDate = "$selectedDate $selectedTime"
//                val formattedDateTime = "${selectedDate.substring(6, 10)}-${selectedDate.substring(3, 5)}-${selectedDate.substring(0, 2)}T${selectedTime}:00.000Z"
                val dateFormat = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault())
                val parsedDate = dateFormat.parse(selectedDate)
                val formattedDate =
                    SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(parsedDate)

                val formattedDateTime = "$formattedDate" + "T${selectedTime}:00.000Z"

                showAlertDialog(msgDate, formattedDateTime)
            } else {
                Toast.makeText(this, "Selecione uma data e horário", Toast.LENGTH_SHORT).show()
            }
        }

        // Desabilita as datas passadas no calendário
        calendarView.date = currentDate.timeInMillis
        calendarView.minDate = currentDate.timeInMillis

        // Chamando a header
        mostrarHeader()
    }

    fun mostrarHeader() {
        var tr = supportFragmentManager.beginTransaction()
        findViewById<LinearLayout>(R.id.ll_fragment_perfil_header_telamarcandoagenda).removeAllViews()
        var fragment = FragmentProfissional()

        var args = Bundle()
        args.putString("nome", nomeHeader)
        idHeader?.let { args.putLong("id", it) }
        args.putString("foto", fotoHeader)
        avaliacaoHeader?.let { args.putDouble("avaliacao", it) }

        fragment.arguments = args

        tr.add(R.id.ll_fragment_perfil_header_telamarcandoagenda, fragment)
        tr.commitAllowingStateLoss()
    }

    private fun createFixedTimeButtons() {
        val startTime = 9 // Start time in hours
        val endTime = 18 // End time in hours

        val layoutParams = LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.WRAP_CONTENT,
            LinearLayout.LayoutParams.WRAP_CONTENT
        )
        layoutParams.setMargins(8, 0, 8, 0)

        for (hour in startTime until endTime) {
            val button = Button(this)
            val buttonText = String.format("%02d:00", hour)
            button.text = buttonText
            button.layoutParams = layoutParams
            button.setOnClickListener { view ->
                selectedTime = (view as Button).text.toString()
            }
            llTimeButtons.addView(button)

            val buttonHalfHour = Button(this)
            val buttonHalfHourText = String.format("%02d:30", hour)
            buttonHalfHour.text = buttonHalfHourText
            buttonHalfHour.layoutParams = layoutParams
            buttonHalfHour.setOnClickListener { view ->
                selectedTime = (view as Button).text.toString()
            }
            llTimeButtons.addView(buttonHalfHour)
        }
    }

    private fun showAlertDialog(data: String, dateTime: String) {
        val alertDialogBuilder = AlertDialog.Builder(this)
        alertDialogBuilder.setTitle("Agendamento")
        alertDialogBuilder.setMessage("Deseja agendar para $data?")
        alertDialogBuilder.setPositiveButton("Sim") { dialog, _ ->
            // Aqui você pode adicionar a lógica para enviar os dados ao banco de dados
            println("CaEsta: " + dateTime)

            if (dateTime.isBlank()) {
                Toast.makeText(this, "Selecione uma data e horário", Toast.LENGTH_SHORT).show()
            } else {
                val dataHoraCheckin = dateTime
                val dataHoraCheckout = dateTime
                val idCliente: Long? = idUser

                println("id do cliente " + idUser)

                val idsServico = idServico?.let { intArrayOf(it.toInt()) }

                val agendaRequest =
                    AgendaRequest(
                        dataHoraCheckin,
                        dataHoraCheckout,
                        idCLiente = idCliente,
                        idsServico = idsServico
                    )

                val post = agendaApi.agendarServico(agendaRequest)

                post.enqueue(object : Callback<AgendaResponse> {
                    override fun onResponse(
                        call: Call<AgendaResponse>,
                        response: Response<AgendaResponse>
                    ) {
                        if (response.isSuccessful) {
                            Toast.makeText(
                                baseContext,
                                getString(R.string.agendado_sucesso),
                                Toast.LENGTH_SHORT
                            ).show()
                            println(response.body())
                            val telaAnterior = Intent(applicationContext, HomePage::class.java)
                            telaAnterior.putExtra("nome", "Bruno Romeu")
                            telaAnterior.putExtra("idUser", idUser)
                            startActivity(telaAnterior)
                        }
                    }

                    override fun onFailure(call: Call<AgendaResponse>, t: Throwable) {
                        Toast.makeText(
                            baseContext,
                            getString(R.string.agendado_erro),
                            Toast.LENGTH_SHORT
                        ).show()
                    }
                })
            }

            dialog.dismiss()
        }
        alertDialogBuilder.setNegativeButton("Não") { dialog, _ ->
            dialog.dismiss()
        }
        val alertDialog = alertDialogBuilder.create()
        alertDialog.show()
    }
}