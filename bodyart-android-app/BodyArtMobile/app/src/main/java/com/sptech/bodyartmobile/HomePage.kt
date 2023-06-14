package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast

class HomePage : AppCompatActivity() {

    // Declarando a existência da TextView
    lateinit var tvAutenticacao:TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home_page)
        val idUser = intent.getLongExtra("idUser", 1)

        val tvServicos = findViewById<TextView>(R.id.tv_servicos)
        val ivServicos = findViewById<ImageView>(R.id.iv_servico)

        tvServicos.setOnClickListener{
            val telaServicos = Intent(applicationContext, Servicos::class.java)
            telaServicos.putExtra("idUser", idUser)
            startActivity(telaServicos)
        }

        ivServicos.setOnClickListener {
            val telaServicos = Intent(applicationContext, Servicos::class.java)
            telaServicos.putExtra("idUser", idUser)
            startActivity(telaServicos)
        }

        // Inicializando a Text View
        tvAutenticacao= findViewById(R.id.tv_autenticado)
        validarAutenticacao()
    }

    fun validarAutenticacao(){
        val nome = intent.getStringExtra("nome")
        val bemVindo = "Bem vindo(a), "
        val concat = bemVindo + nome
        val saudacao = findViewById<TextView>(R.id.tv_autenticado).setText(concat)


        Toast.makeText(baseContext, getString(R.string.msg_boas_vindas, nome), Toast.LENGTH_SHORT).show()

    }

    fun feed(view: View){
        val telaPublicacoes = Intent(applicationContext, ExibePublicacoes::class.java)
        startActivity(telaPublicacoes)
    }
}