package com.sptech.bodyartmobile.retrofit.model.request

data class AgendaRequest(
    val dataHoraCheckin: String?,
    val dataHoraCheckout: String?,
    val idCLiente: Long?,
    val idsServico: IntArray?
)
