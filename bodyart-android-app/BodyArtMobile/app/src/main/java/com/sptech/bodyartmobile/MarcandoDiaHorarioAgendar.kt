package com.sptech.bodyartmobile

import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.CalendarView
import android.widget.HorizontalScrollView
import android.widget.LinearLayout
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import com.sptech.bodyartmobile.retrofit.model.response.ServicoResponse
import java.io.Serializable
import java.util.*

class MarcandoDiaHorarioAgendar : AppCompatActivity() {
    private lateinit var calendarView: CalendarView
    private lateinit var llTimeButtons: LinearLayout
    private lateinit var btnAgendar: Button
    private lateinit var selectedDate: String
    private lateinit var selectedTime: String
//    private var nomeServ: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {

//        nomeServ = intent.getStringExtra("nomeServ")
//        println("Olá mundo $nomeServ")

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
                val formattedData = "$selectedDate $selectedTime"
                showAlertDialog(formattedData)
            } else {
                Toast.makeText(this, "Selecione uma data e horário", Toast.LENGTH_SHORT).show()
            }
        }

        // Desabilita as datas passadas no calendário
        calendarView.date = currentDate.timeInMillis
        calendarView.minDate = currentDate.timeInMillis
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

    private fun showAlertDialog(data: String) {
        val alertDialogBuilder = AlertDialog.Builder(this)
        alertDialogBuilder.setTitle("Agendamento")
        alertDialogBuilder.setMessage("Deseja agendar para $data?")
        alertDialogBuilder.setPositiveButton("Sim") { dialog, _ ->
            // Aqui você pode adicionar a lógica para enviar os dados ao banco de dados
            Toast.makeText(this, "Agendado com sucesso!", Toast.LENGTH_SHORT).show()
            dialog.dismiss()
        }
        alertDialogBuilder.setNegativeButton("Não") { dialog, _ ->
            dialog.dismiss()
        }
        val alertDialog = alertDialogBuilder.create()
        alertDialog.show()
    }
}