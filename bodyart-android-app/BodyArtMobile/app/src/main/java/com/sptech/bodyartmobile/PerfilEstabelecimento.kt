package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class PerfilEstabelecimento : AppCompatActivity() {

    private var nome: String? = null
    private var id: Long? = null
    private var foto: String? = null
    private var avaliacao: Double? = null

    override fun onCreate(savedInstanceState: Bundle?) {

        nome = intent.getStringExtra("nome")
        id = intent.getLongExtra("id", 1)
        foto = intent.getStringExtra("foto")
        avaliacao = intent.getDoubleExtra("avaliacao", 4.5)

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_perfil_estabelecimento)

//       Funcao voltar
        val voltar = findViewById<TextView>(R.id.tv_back)
        voltar.setOnClickListener {
            val telaAnterior = Intent(applicationContext, MainActivity::class.java)
            startActivity(telaAnterior)
        }

        // Atribuindo variaveis
        val textNome = findViewById<TextView>(R.id.nome_profissional)
        textNome.setText(nome)
    }


}