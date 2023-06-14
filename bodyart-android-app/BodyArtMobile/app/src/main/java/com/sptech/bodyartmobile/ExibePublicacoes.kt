package com.sptech.bodyartmobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.telecom.Call
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.sptech.bodyartmobile.retrofit.auxiliares.PublicacoesAdapter
import com.sptech.bodyartmobile.retrofit.dominio.PublicacoesDominio

class ExibePublicacoes : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_exibe_publicacoes)

        initRecycler()
    }


    fun initRecycler(){
        val publicacoes = listOf<PublicacoesDominio>(PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
            PublicacoesDominio(1,"https://bodyart.ddnsking.com/api/images/17/portifolio/3.jpg","josivaldo", "testando descricao", 1140,"https://bodyart.ddnsking.com/api/images/15/publicacoes/18.jpg"),
            )

        val recycler: RecyclerView = findViewById(R.id.rv_publicacoes)
        recycler.layoutManager = LinearLayoutManager(this)
        val adapter = PublicacoesAdapter(publicacoes)
        recycler.adapter = adapter
    }
}