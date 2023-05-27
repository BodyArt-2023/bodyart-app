package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.response.ServicoResponse
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Path

interface ServicoApi {

    @GET("servicos/categoria/{idCategoria}")
    fun getServicoPorCategoria (@Path("idCategoria") idCategoria : Long) : Call<List<ServicoResponse>>
}