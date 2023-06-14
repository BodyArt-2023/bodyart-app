package com.sptech.bodyartmobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.LinearLayout
import android.widget.Toast
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.response.ServicoResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class Agendar : AppCompatActivity() {

    private var id: Long = 99999999
    private var servicoApi = Apis.getServicoApi()

    private var nomeHeader: String? = null
    private var idHeader: Long? = null
    private var fotoHeader: String? = null
    private var avaliacaoHeader: Double? = null

    private var idUser: Long = 1

    override fun onCreate(savedInstanceState: Bundle?) {
        id = intent.getLongExtra("id", 1)

        nomeHeader = intent.getStringExtra("nomeHeader")
        idHeader = intent.getLongExtra("idHeader", 1)
        fotoHeader = intent.getStringExtra("fotoHeader")
        avaliacaoHeader = intent.getDoubleExtra("avaliacaoHeader", 4.5)

        idUser = intent.getLongExtra("idUser", 1)

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_agendar)
        recuperarServicosProfissional()
    }

    fun recuperarServicosProfissional() {

        val getServicoEstabelecimento = servicoApi.getServicoEstabelecimento(id);

        getServicoEstabelecimento.enqueue(object : Callback<List<ServicoResponse>> {

            // quando houver comunicação com a API
            override fun onResponse(
                call: Call<List<ServicoResponse>>,
                response: Response<List<ServicoResponse>>
            ) {
                if (response.isSuccessful) { // status 2xx (200, 201, 204 etc)
                    val servicos = response.body()

                    if (servicos != null) {
                        println(servicos)
                        mostrarServicos(servicos)
                        mostrarHeader()
                    }
                }
            }

            // quando não houver comunicação com a API
            override fun onFailure(call: Call<List<ServicoResponse>>, t: Throwable) {
                Toast.makeText(baseContext, "Erro na API: ${t.message}", Toast.LENGTH_SHORT).show()
                t.printStackTrace()
            }
        })
    }

    fun mostrarHeader() {
        var tr = supportFragmentManager.beginTransaction()
        findViewById<LinearLayout>(R.id.ll_fragment_perfil_header_telaagendar).removeAllViews()
        var fragment = FragmentProfissional()

        var args = Bundle()
        args.putString("nome", nomeHeader)
        idHeader?.let { args.putLong("id", it) }
        args.putString("foto", fotoHeader)
        avaliacaoHeader?.let { args.putDouble("avaliacao", it) }

        fragment.arguments = args

        tr.add(R.id.ll_fragment_perfil_header_telaagendar, fragment)
        tr.commitAllowingStateLoss()
    }

    private fun mostrarServicos(servicos: List<ServicoResponse>) {

        findViewById<LinearLayout>(R.id.ll_servicos).removeAllViews()
        var tr = supportFragmentManager.beginTransaction()
        for (servico in servicos) {
            var fragment = CardServicoAgendar()

            var args = Bundle()
            args.putLong("id", servico.id)
            args.putString("nome", servico.nome)
            args.putDouble("valor", servico.valor)

            args.putLong("idUser", idUser)

            args.putString("nomeHeader", nomeHeader)
            idHeader?.let { args.putLong("idHeader", it) }
            args.putString("fotoHeader", fotoHeader)
            avaliacaoHeader?.let { args.putDouble("avaliacaoHeader", it) }

//            args.putSerializable("servico", servico)
            fragment.arguments = args


            tr.add(R.id.ll_servicos, fragment)
        }
        tr.commitAllowingStateLoss()
    }
}