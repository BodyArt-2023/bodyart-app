package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView

class Cadastro2 : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro2)

        val voltar = findViewById<TextView>(R.id.tv_back)
        voltar.setOnClickListener{
            val telaAnterior = Intent(applicationContext, MainActivity::class.java)
            startActivity(telaAnterior)
        }

    }

    // NÃO ESQUECER DE GUARDAR OS DADOS

    fun cadastrar (componente: View){

        // Salvar os dados e mudar para a tela de login

        val nascimento = findViewById<EditText>(R.id.et_nasc)

        if (nascimento.text.isBlank()){
            nascimento.error= getString(R.string.et_vazio)
        }
        else{
            val telaLogin = Intent(applicationContext, MainActivity::class.java)
            startActivity(telaLogin)
        }


    }
}