package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.*
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.request.UsuarioRequest
import com.sptech.bodyartmobile.retrofit.model.response.UsuarioResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class Cadastro2 : AppCompatActivity() {
    val usuarioApi = Apis.getUsuarioAop()
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
            val nome = intent.getStringExtra("nome")
            val email = intent.getStringExtra("email")
            val senha = intent.getStringExtra("senha")
            val numero = intent.getStringExtra("numero")

            val generoSelecionado = findViewById<RadioGroup>(R.id.rg_buttons).checkedRadioButtonId

            val genero = when(generoSelecionado){
                R.id.opcao_m -> 'M'
                R.id.opcao_f -> 'F'
                else -> {'O'}
            }

            val dataNascimento = nascimento.text.toString().split("-").reversed().joinToString("-")
            val usuarioRequest = UsuarioRequest(nome, email, senha, numero, genero, dataNascimento)

            val post = usuarioApi.cadastro(usuarioRequest)

            post.enqueue(object : Callback<UsuarioResponse>{
                override fun onResponse(
                    call: Call<UsuarioResponse>,
                    response: Response<UsuarioResponse>
                ) {
                    if(response.isSuccessful){
                        Toast.makeText(baseContext, getString(R.string.msg_cadastro_realizado), Toast.LENGTH_SHORT).show()
                        val telaLogin = Intent(applicationContext, MainActivity::class.java)
                        startActivity(telaLogin)
                    }
                    else {
                        Toast.makeText(baseContext, getString(R.string.msg_cadastro_nao_realizado), Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<UsuarioResponse>, t: Throwable) {
                    Toast.makeText(baseContext, getString(R.string.msg_cadastro_nao_realizado), Toast.LENGTH_SHORT).show()
                }

            })

        }


    }
}