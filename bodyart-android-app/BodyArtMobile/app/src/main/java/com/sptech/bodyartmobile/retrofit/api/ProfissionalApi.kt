package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.response.ProfissionalResponse
import retrofit2.Call
import retrofit2.http.GET

interface ProfissionalApi {

    @GET("profissionais")
    fun getAll () : Call<List<ProfissionalResponse>>

    @GET("profissionais/{idProfissional}/avaliacao")
    fun getAvaliacao () : Call<Double>
}