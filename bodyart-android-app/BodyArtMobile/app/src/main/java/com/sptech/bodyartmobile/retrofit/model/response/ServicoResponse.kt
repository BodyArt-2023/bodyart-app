package com.sptech.bodyartmobile.retrofit.model.response

import java.time.LocalTime

data class ServicoResponse (val id:Long, val nome:String, val duracao: LocalTime, val valor:Double,
                            val descricao:String, val profissional:ProfissionalResponse,
                            val categoria:CategoriaResponse, val agendamentos:List<ServicoAgendadoResponse>)