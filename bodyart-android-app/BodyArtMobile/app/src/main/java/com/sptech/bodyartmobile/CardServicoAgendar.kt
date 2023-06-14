package com.sptech.bodyartmobile

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.response.ServicoResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.io.Serializable

private const val ID = "id"
private const val NOME = "nome"
private const val VALOR = "valor"

private const val NOMEHEADER = "nomeHeader"
private const val IDHEADER = "idHeader"
private const val FOTOHEADER = "fotoHeader"
private const val AVALIACAOHEADER = "avaliacaoHeader"

private const val IDUSER = "idUser"

class CardServicoAgendar : Fragment() {
    private var id: Long = 0
    private var nome: String = "null"
    private var valor: Double = 0.1

    private var nomeHeader: String? = null
    private var idHeader: Long? = null
    private var fotoHeader: String? = null
    private var avaliacaoHeader: Double? = null

    private var idUser: Long = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            id = it.getLong(ID)
            nome = it.getString(NOME).toString()
            valor = it.getDouble(VALOR)

            nomeHeader = it.getString(NOMEHEADER)
            idHeader = it.getLong(IDHEADER)
            fotoHeader = it.getString(FOTOHEADER)
            avaliacaoHeader = it.getDouble(AVALIACAOHEADER)

            idUser = it.getLong(IDUSER)

        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_card_servico_agendar, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

//        val servico = arguments?.getSerializable("servico") as ServicoResponse

        val textNome = view.findViewById<TextView>(R.id.nome_servico)
        textNome.setText(nome)
        val textValor = view.findViewById<TextView>(R.id.preco_servico)
        textValor.setText(valor.toString())
        view.findViewById<Button>(R.id.botao_agendar_servico).setOnClickListener {
            abrirTelaMarcandoDiaHorarioAgendar()
        }
    }

    fun abrirTelaMarcandoDiaHorarioAgendar() {
        val telaMarcandoDiaHorarioAgendar = Intent(context, MarcandoDiaHorarioAgendar::class.java)
//        telaMarcandoDiaHorarioAgendar.putExtra("nomeServ", servico?.nome)

        telaMarcandoDiaHorarioAgendar.putExtra("nomeHeader", nomeHeader)
        telaMarcandoDiaHorarioAgendar.putExtra("idHeader", idHeader)
        telaMarcandoDiaHorarioAgendar.putExtra("fotoHeader", fotoHeader)
        telaMarcandoDiaHorarioAgendar.putExtra("avaliacaoHeader", avaliacaoHeader)

        telaMarcandoDiaHorarioAgendar.putExtra("idServico", id)

        telaMarcandoDiaHorarioAgendar.putExtra("idUser", idUser)

        startActivity(telaMarcandoDiaHorarioAgendar)
    }
}