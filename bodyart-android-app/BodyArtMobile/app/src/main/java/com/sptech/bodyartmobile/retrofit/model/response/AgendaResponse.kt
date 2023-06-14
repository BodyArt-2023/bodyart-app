package com.sptech.bodyartmobile.retrofit.model.response

import java.time.LocalDateTime

data class AgendaResponse(
    val id: Long, val dataHoraCheckin: IntArray, val dataHoraCheckout: IntArray,
    val avaliacao: Int, val finalizado: Boolean, val cliente: UsuarioResponse, val servico: String
)