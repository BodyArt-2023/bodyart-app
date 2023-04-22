package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.method.LinkMovementMethod
import android.view.View
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun login(componente:View){
        // Criando um obj que permite a navegação para outra Activity
        val tela2 = Intent(applicationContext, HomePage::class.java)

        val login = findViewById<EditText>(R.id.et_email).text.toString()
        val senha = findViewById<EditText>(R.id.et_senha).text.toString()

        // Envio de dados
        tela2.putExtra("login", login)
        tela2.putExtra("senha", senha)

        // Iniciando a Home Page
        startActivity(tela2)
    }

    fun redefinirSenha (componente: View){
        val textRedefinir =findViewById<TextView>(R.id.tv_redef_senha)
        textRedefinir.setOnClickListener {
            val myIntent = Intent(applicationContext, RedefinirSenha::class.java)
            startActivity(myIntent)

           textRedefinir.movementMethod = LinkMovementMethod.getInstance()
        }
    }

}