package com.sptech.bodyartmobile.retrofit.model.response

import java.io.Serializable
import java.time.LocalTime

data class ServicoResponse(
    val id: Long, val nome: String, val duracao: List<Int>, val valor: Double,
    val descricao: String, val profissional: ProfissionalResponse,
    val categoria: CategoriaResponse, val agendamentos: List<ServicoAgendadoResponse>
) : Serializable