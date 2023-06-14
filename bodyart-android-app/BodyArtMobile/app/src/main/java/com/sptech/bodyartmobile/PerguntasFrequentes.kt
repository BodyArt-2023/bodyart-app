package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView

class PerguntasFrequentes : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_perguntas_frequentes)
    }
    fun voltar(componente: View) {
        // Criando um obj que permite a navegação para outra Activity
        val telaConfiguracao = Intent(applicationContext, Configuracoes::class.java)
        startActivity(telaConfiguracao)
    }
    fun exibeTextoFunciona(componente: View){
        val textView: TextView = findViewById(R.id.tv_funciona)

        textView.visibility = View.VISIBLE
    }
    fun exibeTextoPrincipais(componente: View){
        val textView: TextView = findViewById(R.id.tv_principais)

        textView.visibility = View.VISIBLE
    }
    fun exibeTextoParamim(componente: View){
        val textView: TextView = findViewById(R.id.tv_para_mim)

        textView.visibility = View.VISIBLE
    }
}