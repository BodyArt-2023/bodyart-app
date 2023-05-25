package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class Agenda : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_agenda)

//       Função para voltar
        val voltar = findViewById<TextView>(R.id.tv_back)
        voltar.setOnClickListener{
            val telaAnterior = Intent(applicationContext, MainActivity::class.java)
            startActivity(telaAnterior)
        }
    }
}