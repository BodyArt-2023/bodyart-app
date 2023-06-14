package com.sptech.bodyartmobile.retrofit.api

import com.sptech.bodyartmobile.retrofit.model.request.AgendaRequest
import com.sptech.bodyartmobile.retrofit.model.response.AgendaResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface AgendaApi {
    @POST("agendamentos")
    fun agendarServico(@Body agendaRequest: AgendaRequest) : Call<AgendaResponse>

}