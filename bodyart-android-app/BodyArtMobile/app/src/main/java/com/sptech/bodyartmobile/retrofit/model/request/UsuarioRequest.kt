package com.sptech.bodyartmobile.retrofit.model.request

import java.time.LocalDate

data class UsuarioRequest(val nome:String, val email:String, val senha:String, val telefone:String,
val genero:Char, val dataNascimento:LocalDate)
