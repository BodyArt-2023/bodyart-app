package com.sptech.bodyartmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.auxiliares.PublicacoesAdapter
import com.sptech.bodyartmobile.retrofit.dominio.PublicacoesDominio
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.util.Collections


class ExibePublicacoes : AppCompatActivity() {

    private val mRetrofit = Apis.getPublicacoes()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_exibe_publicacoes)

        buscaPublicacoes()
    }
    fun voltar(componente: View) {
        startActivity(Intent(applicationContext, HomePage::class.java))
    }
    fun buscaPublicacoes(){

        val call: Call<List<PublicacoesDominio>> = mRetrofit.publicacoes()

        call.enqueue(object : Callback<List<PublicacoesDominio>>{

            override fun onResponse(call: Call<List<PublicacoesDominio>>, response: Response<List<PublicacoesDominio>>) {
                if(response.code() != 200){
                    Toast.makeText(applicationContext, "Ops! houve um erro na conexão!", Toast.LENGTH_SHORT).show()
                }else{


                    response.body()?.let {
                        initRecycler(it)

                    }


                }
            }

            override fun onFailure(call: Call<List<PublicacoesDominio>>, t: Throwable) {
                Toast.makeText(applicationContext, "Ops! houve um erro na conexão", Toast.LENGTH_SHORT).show()
            }

        })

    }

    fun initRecycler(publicacoes:List<PublicacoesDominio>){
//        val publicacoes = listOf<PublicacoesDominio>(PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
//            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
//            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
//            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
//            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
//            )
        Collections.reverse(publicacoes)
        val recycler: RecyclerView = findViewById(R.id.rv_publicacoes)
        recycler.layoutManager = LinearLayoutManager(this)
        val adapter = PublicacoesAdapter(publicacoes)
        recycler.adapter = adapter
    }
}