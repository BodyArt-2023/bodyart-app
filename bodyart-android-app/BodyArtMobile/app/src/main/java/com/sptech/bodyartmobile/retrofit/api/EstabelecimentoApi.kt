package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.response.EstabelecimentoResponse
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Path

interface EstabelecimentoApi {

    @GET("estabelecimentos")
    fun getAll () : Call<List<EstabelecimentoResponse>>

    @GET("estabelecimentos/categoria/{idCategoria}")
    fun getAllByCategoria(@Path ("idCategoria") idCategoria : Long): Call<List<EstabelecimentoResponse>>

    @GET("estabelecimentos/avaliacao/{idEstabelecimento}")
    fun getAvaliacaoByEstabelecimento(@Path ("idEstabelecimento") idEstabelecimento : Long): Call<Double>
}