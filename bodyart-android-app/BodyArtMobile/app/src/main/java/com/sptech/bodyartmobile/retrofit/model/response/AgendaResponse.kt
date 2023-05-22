package com.sptech.bodyartmobile.retrofit.model.response

import java.time.LocalDateTime

data class AgendaResponse (val id:Long, val dataHoraCheckin:LocalDateTime, val dataHoraCheckout:LocalDateTime,
                           val avaliacao:Int, val finalizado:Boolean, val cliente:UsuarioResponse,
                           val servicosAgendados:List<ServicoAgendadoResponse>)