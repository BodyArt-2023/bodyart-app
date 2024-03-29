package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.core.view.children
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.response.CategoriaResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class Servicos : AppCompatActivity() {

    val categoriaApi = Apis.getCategoriaApi()

    private var idUser: Long? = null

    override fun onCreate(savedInstanceState: Bundle?) {

        idUser = intent.getLongExtra("idUser", 1)
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_servicos)

        //voltar para HomePage
        val voltar = findViewById<TextView>(R.id.tv_back)
        voltar.setOnClickListener {
            onBackPressed()
        }

        //ir para categoria selecionada
        val tvCategoria = findViewById<TextView>(R.id.tv_categoria)

        recuperarCategorias()
    }

    fun recuperarCategorias() {

        val getTodasCategorias = categoriaApi.getAll();

        getTodasCategorias.enqueue(object : Callback<List<CategoriaResponse>> {

            // quando houver comunicação com a API
            override fun onResponse(
                call: Call<List<CategoriaResponse>>,
                response: Response<List<CategoriaResponse>>
            ) {
                if (response.isSuccessful) { // status 2xx (200, 201, 204 etc)
                    val categorias = response.body()

                    if (categorias != null) {
                        println(categorias)
                        mostrarCategorias(categorias)
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

    fun mostrarCategorias(categorias: List<CategoriaResponse>) {

        var tr = supportFragmentManager.beginTransaction()
        findViewById<LinearLayout>(R.id.ll_fragment_card_categoria).removeAllViews()
        for (categoria in categorias) {
            var fragmentCategoria = FragmentCardCategoria()
            var args = Bundle()
            args.putString("nome", categoria.nome)
            args.putLong("id", categoria.id)
            idUser?.let { args.putLong("idUser", it) }

            fragmentCategoria.arguments = args
            tr.add(R.id.ll_fragment_card_categoria, fragmentCategoria)
        }
        tr.commitAllowingStateLoss()
    }
}