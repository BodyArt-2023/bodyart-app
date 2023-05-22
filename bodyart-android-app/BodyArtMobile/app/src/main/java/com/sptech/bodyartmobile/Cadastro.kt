package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView

class Cadastro : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro)

        val tvPossuiRegistro = findViewById<TextView>(R.id.tv_iniciar_sessao)

        tvPossuiRegistro.setOnClickListener{
            val telaMain = Intent(applicationContext, MainActivity::class.java)
            startActivity(telaMain)
        }

        val voltar = findViewById<TextView>(R.id.tv_back)
        voltar.setOnClickListener{
            val telaAnterior = Intent(applicationContext, MainActivity::class.java)
            startActivity(telaAnterior)
        }
    }


    fun continuar(componente: View){
        val nome = findViewById<EditText>(R.id.et_name)

        val email = findViewById<EditText>(R.id.et_email)

        val senha = findViewById<EditText>(R.id.et_pswd)

        val numero = findViewById<EditText>(R.id.et_number)

        val continuarCadastro = Intent(applicationContext, Cadastro2::class.java)


        if(nome.text.isBlank()){
            nome.error = getString(R.string.et_vazio)
        }
        else if(email.text.isBlank()){
            email.error = getString(R.string.et_vazio)
        }
        else if(senha.text.isBlank()){
            senha.error = getString(R.string.et_vazio)
        }
        else if(numero.text.isBlank()){
            numero.error = getString(R.string.et_vazio)
        }
        else {
            continuarCadastro.putExtra("nome", nome.text.toString())
            continuarCadastro.putExtra("email", email.text.toString())
            continuarCadastro.putExtra("senha", senha.text.toString())
            continuarCadastro.putExtra("numero", numero.text.toString())


            startActivity(continuarCadastro)
        }


    }
}