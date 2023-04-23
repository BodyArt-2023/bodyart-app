package com.sptech.bodyartmobile.retrofit

import com.sptech.bodyartmobile.retrofit.api.AuthApi
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object Apis {
    val BASE_URL = "http://10.0.2.2:8080/"

    fun getAuthApi() : AuthApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(AuthApi::class.java)
    }
}