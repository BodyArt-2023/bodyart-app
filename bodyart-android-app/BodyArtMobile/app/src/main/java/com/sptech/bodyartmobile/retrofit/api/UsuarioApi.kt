package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.request.UsuarioRequest
import com.sptech.bodyartmobile.retrofit.model.response.UsuarioResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface UsuarioApi {
    @POST("/usuarios/cliente")
    fun cadastro(@Body usuarioRequest: UsuarioRequest) : Call<UsuarioResponse>
}