package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.response.CategoriaResponse
import retrofit2.Call
import retrofit2.http.GET

interface CategoriaApi {

    @GET("categorias")
    fun getAll () : Call<List<CategoriaResponse>>

}