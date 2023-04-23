package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.request.LoginRequest
import com.sptech.bodyartmobile.retrofit.model.response.UsuarioResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthApi {
    @POST("auth")
    fun login(@Body login: LoginRequest) : Call<UsuarioResponse>

}