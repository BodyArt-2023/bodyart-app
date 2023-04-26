package com.sptech.bodyartmobile.retrofit.model.request

data class UsuarioRequest(val nome:String?, val email:String?, val senha:String?, val telefone:String?,
val genero:Char, val dataNascimento:String)
