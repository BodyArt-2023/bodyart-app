package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.method.LinkMovementMethod
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.request.LoginRequest
import com.sptech.bodyartmobile.retrofit.model.response.UsuarioResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {
    val authApi = Apis.getAuthApi()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val tvRedefinir = findViewById<TextView>(R.id.tv_fgt_pswd)

        tvRedefinir.setOnClickListener{
            val telaRedefinir = Intent(applicationContext, RedefinirSenha::class.java)
            startActivity(telaRedefinir)
        }
    }

    fun login(componente:View){
        // Criando um obj que permite a navegação para outra Activity
        val tela2 = Intent(applicationContext, HomePage::class.java)

        val login = findViewById<EditText>(R.id.et_email).text.toString()
        val senha = findViewById<EditText>(R.id.et_senha).text.toString()

        val loginRequest = LoginRequest(login, senha)

        val post = authApi.login(loginRequest)

        post.enqueue(object : Callback<UsuarioResponse>{
            override fun onResponse(
                call: Call<UsuarioResponse>,
                response: Response<UsuarioResponse>
            ) {
                if(response.isSuccessful){
                    // Envio de dados
                    tela2.putExtra("nome", response.body()?.nome)
                    tela2.putExtra("id", response.body()?.id)
                    tela2.putExtra("idUser", response.body()?.id)

                    // Iniciando a Home Page
                    startActivity(tela2)
                }
                else {
                    Toast.makeText(baseContext, R.string.msg_erro_login, Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<UsuarioResponse>, t: Throwable) {
                Toast.makeText(baseContext, R.string.msg_erro_api, Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun registrar(componente:View){
        // Criando um obj que permite a navegação para outra Activity
        val tela2 = Intent(applicationContext, Cadastro::class.java)

        startActivity(tela2)
    }

}