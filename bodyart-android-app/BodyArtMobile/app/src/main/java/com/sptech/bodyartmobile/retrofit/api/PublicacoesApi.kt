package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.dominio.PublicacoesDominio
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Headers

interface PublicacoesApi {

    @Headers("Content-Type: application/json")
    @GET("publicacoes")
    fun publicacoes(): Call<List<PublicacoesDominio>>
}