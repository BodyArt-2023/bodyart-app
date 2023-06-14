package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.request.UsuarioRequest
import com.sptech.bodyartmobile.retrofit.model.response.UsuarioResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.Headers
import retrofit2.http.POST
import retrofit2.http.PUT
import retrofit2.http.Path

interface UsuarioApi {
    @POST("/usuarios/cliente")
    fun cadastro(@Body usuarioRequest: UsuarioRequest) : Call<UsuarioResponse>

    @Headers("Content-Type: application/json")
    @PUT("/usuarios/cliente/{id}")
    fun atualiza(@Body usuarioRequest: UsuarioRequest,@Path("id")email:String) : Call<UsuarioResponse>

}