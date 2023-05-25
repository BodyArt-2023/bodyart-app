package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class PerfilEstabelecimento : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_perfil_estabelecimento)

//       Funcao voltar
        val voltar = findViewById<TextView>(R.id.tv_back)
        voltar.setOnClickListener{
            val telaAnterior = Intent(applicationContext, MainActivity::class.java)
            startActivity(telaAnterior)
        }
    }
}