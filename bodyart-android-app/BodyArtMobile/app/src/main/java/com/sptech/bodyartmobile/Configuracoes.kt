package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView

class Configuracoes : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_configuracoes)
        recebeNome()
    }
    fun dadosPessoais(componente: View) {
        // Criando um obj que permite a navegação para outra Activity
        val telaDadosPessoais = Intent(applicationContext, DadosPessoais::class.java)
        telaDadosPessoais.putExtra("id", intent.getStringExtra("id"))
        startActivity(telaDadosPessoais)
    }
    fun perguntasFrequentes(componente: View) {
        // Criando um obj que permite a navegação para outra Activity
        val telaPerguntasFrequentes = Intent(applicationContext, PerguntasFrequentes::class.java)
        startActivity(telaPerguntasFrequentes)
    }
    fun recebeNome(){
        val nome = intent.getStringExtra("nome")
        val textView: TextView = findViewById(R.id.nome_user)

        textView.text = nome;

    }
    fun voltar(componente: View) {
        // Criando um obj que permite a navegação para outra Activity
        val telaConfiguracao = Intent(applicationContext, HomePage::class.java)
        startActivity(telaConfiguracao)
    }

    fun sair(compaonente: View){
        val telaInicio = Intent(applicationContext,MainActivity::class.java)
        startActivity(telaInicio)
    }
}
