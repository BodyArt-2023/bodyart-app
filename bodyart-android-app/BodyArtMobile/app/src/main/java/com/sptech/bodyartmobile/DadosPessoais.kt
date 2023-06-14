package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.RadioGroup
import android.widget.Toast
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.request.UsuarioRequest
import com.sptech.bodyartmobile.retrofit.model.response.UsuarioResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.time.LocalDate

class DadosPessoais : AppCompatActivity() {


    val usuarioApi = Apis.getUsuarioAop()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dados_pessoais)
    }
    fun voltar(componente: View) {
        // Criando um obj que permite a navegação para outra Activity
        val telaConfiguracao = Intent(applicationContext, Configuracoes::class.java)
        startActivity(telaConfiguracao)
    }
    fun atualizar (componente: View){

        // Salvar os dados e mudar para a tela de login

        val nascimento = findViewById<EditText>(R.id.et_nascimento)

        if (nascimento.text.isBlank()){
            nascimento.error= getString(R.string.et_vazio)
        }
        else{

            var etNome = findViewById<EditText>(R.id.et_nome)
            val nome = etNome.text.toString()
            var etEmail = findViewById<EditText>(R.id.et_email)
            val email = etEmail.text.toString()
            var etSenha = findViewById<EditText>(R.id.et_senha)
            val senha = etSenha.text.toString()
            var et_numero = findViewById<EditText>(R.id.et_telefone)
            val numero = et_numero.text.toString()

            println(nome)
            println(email)
            println(senha)
            println(numero)

            val generoSelecionado = findViewById<RadioGroup>(R.id.rd_sexo).checkedRadioButtonId

            val genero = when(generoSelecionado){
                R.id.opcao_m -> 'M'
                R.id.opcao_f -> 'F'
                R.id.opcao_o -> 'O'
                else -> {' '}
            }


            val usuarioRequest = UsuarioRequest(nome, email, senha, numero, genero, "2023-04-06")

            val put = usuarioApi.atualiza(usuarioRequest, intent.getStringExtra("id").toString())

            put.enqueue(object : Callback<UsuarioResponse> {
                override fun onResponse(
                    call: Call<UsuarioResponse>,
                    response: Response<UsuarioResponse>
                ) {
                    if(response.isSuccessful){
                        Toast.makeText(baseContext, "atualização de cadastro realizada!", Toast.LENGTH_SHORT).show()
                        val telaLogin = Intent(applicationContext, MainActivity::class.java)
                        startActivity(telaLogin)
                    }
                    else {
                        Toast.makeText(baseContext,  intent.getStringExtra("id").toString(), Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<UsuarioResponse>, t: Throwable) {
                    Toast.makeText(baseContext, getString(R.string.msg_cadastro_nao_realizado), Toast.LENGTH_SHORT).show()
                }

            })

        }


    }
}