package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView

class PerfilEstabelecimento : AppCompatActivity() {

    private var nome: String? = null
    private var id: Long? = null
    private var foto: String? = null
    private var avaliacao: Double? = null

    private var idUser: Long? = null

    override fun onCreate(savedInstanceState: Bundle?) {

        nome = intent.getStringExtra("nome")
        id = intent.getLongExtra("id", 1)
        foto = intent.getStringExtra("foto")
        avaliacao = intent.getDoubleExtra("avaliacao", 4.5)

        idUser = intent.getLongExtra("idUser", 1)

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_perfil_estabelecimento)
        mostrarHeader()
    }

    fun mostrarHeader() {
        var tr = supportFragmentManager.beginTransaction()
        findViewById<LinearLayout>(R.id.ll_fragment_perfil_header).removeAllViews()
        var fragment = FragmentProfissional()

        var args = Bundle()
        args.putString("nome", nome)
        id?.let { args.putLong("id", it) }
        args.putString("foto", foto)
        avaliacao?.let { args.putDouble("avaliacao", it) }

        fragment.arguments = args

        tr.add(R.id.ll_fragment_perfil_header, fragment)
        tr.commitAllowingStateLoss()
    }

    fun botaoAgendar(view: View) {

        val telaServicosProfissional = Intent(applicationContext, Agendar::class.java)

        telaServicosProfissional.putExtra("id", id)

        telaServicosProfissional.putExtra("nomeHeader", nome)
        telaServicosProfissional.putExtra("idHeader", id)
        telaServicosProfissional.putExtra("fotoHeader", foto)
        telaServicosProfissional.putExtra("avaliacaoHeader", avaliacao)

        telaServicosProfissional.putExtra("idUser", idUser)

        startActivity(telaServicosProfissional)
    }

}