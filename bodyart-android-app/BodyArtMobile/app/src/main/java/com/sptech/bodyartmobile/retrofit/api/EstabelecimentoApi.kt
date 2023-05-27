package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.response.EstabelecimentoResponse
import retrofit2.Call
import retrofit2.http.GET

interface EstabelecimentoApi {

    @GET("estabelecimentos")
    fun getAll () : Call<List<EstabelecimentoResponse>>
}