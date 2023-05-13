package com.sptech.bodyartmobile

import android.app.DatePickerDialog
import android.content.Intent
import android.icu.util.Calendar
import android.os.Bundle
import android.view.View
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.request.UsuarioRequest
import com.sptech.bodyartmobile.retrofit.model.response.UsuarioResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.util.*

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

        val inputDate = findViewById<EditText>(R.id.et_nasc)

        inputDate.setOnClickListener{
            val calendar = Calendar.getInstance()

            val diaAtual = calendar.get(Calendar.DAY_OF_MONTH)
            val mesAtual = calendar.get(Calendar.MONTH)
            val anoAtual = calendar.get(Calendar.YEAR)

            DatePickerDialog(this, R.style.SpinnerDatePickerDialogTheme, {
                    _, i, i2, i3 -> inputDate.setText("${i3.toString().padStart(2, '0')}/${i2.toString().padStart(2, '0')}/$i") },
                anoAtual, mesAtual, diaAtual).show()


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
                R.id.opcao_o -> 'O'
                else -> {' '}
            }

            val dataNascimento = nascimento.text.toString().split("/").reversed().joinToString("-")
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