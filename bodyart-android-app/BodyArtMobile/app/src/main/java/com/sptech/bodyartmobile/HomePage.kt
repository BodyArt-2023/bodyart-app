package com.sptech.bodyartmobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast

class HomePage : AppCompatActivity() {

    // Declarando a existência da TextView
    lateinit var tvAutenticacao:TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home_page)

        // Inicializando a Text View
        tvAutenticacao= findViewById(R.id.tv_autenticado)
        validarAutenticacao()
    }

    fun validarAutenticacao(){
        val nome = intent.getStringExtra("nome")


        Toast.makeText(baseContext, getString(R.string.msg_boas_vindas, nome), Toast.LENGTH_SHORT).show()

    }
}