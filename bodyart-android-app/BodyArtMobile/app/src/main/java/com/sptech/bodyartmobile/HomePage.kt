package com.sptech.bodyartmobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class HomePage : AppCompatActivity() {

    // Declarando a existência da TextView
    lateinit var tvAutenticacao:TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home_page)

        // Inicializando a Text View
        tvAutenticacao= findViewById(R.id.tv_autenticado)
        // validarAutenticacao()
    }

    fun validarAutenticacao(){
        val login = intent.getStringExtra("login")
        val senha = intent.getStringExtra("senha")

        // Precisa-se da api com usuários

    }
}