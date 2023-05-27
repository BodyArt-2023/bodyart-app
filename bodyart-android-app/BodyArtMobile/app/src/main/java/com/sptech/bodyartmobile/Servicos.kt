package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import android.widget.Toast
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.response.CategoriaResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class Servicos : AppCompatActivity() {

    val categoriaApi = Apis.getCategoriaApi()
    val servicoApi = Apis.getServicoApi()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_servicos)

        //voltar para HomePage
        val voltar = findViewById<TextView>(R.id.tv_back)
        voltar.setOnClickListener{
            val telaAnterior = Intent(applicationContext, HomePage::class.java)
            startActivity(telaAnterior)
        }

        //ir para categoria selecionada
        val tvCategoria = findViewById<TextView>(R.id.tv_categoria)

        tvCategoria.setOnClickListener{
            val telaCategoria = Intent(applicationContext, TodosServicos::class.java)
            startActivity(telaCategoria)
        }

        recuperarCategorias()
    }

    fun recuperarCategorias() {

        val getTodasCategorias = categoriaApi.getAll();

        getTodasCategorias.enqueue(object : Callback<List<CategoriaResponse>> {

            // quando houver comunicação com a API
            override fun onResponse(call: Call<List<CategoriaResponse>>, response: Response<List<CategoriaResponse>>) {
                if (response.isSuccessful) { // status 2xx (200, 201, 204 etc)
                    val categorias = response.body()

                    if (categorias != null) {
                        mostrarServicos(categorias)
                    }
                }
            }

            // quando não houver comunicação com a API
            override fun onFailure(call: Call<List<CategoriaResponse>>, t: Throwable) {
                Toast.makeText(baseContext, "Erro na API: ${t.message}", Toast.LENGTH_SHORT).show()
                t.printStackTrace()
            }
        })
    }

    fun mostrarServicos(categorias : List<CategoriaResponse>) {

        for (categoria in categorias) {

            var nome_categoria = findViewById<TextView>(R.id.tv_title_service).text.toString()
            nome_categoria = categoria.toString()

        }

    }
}