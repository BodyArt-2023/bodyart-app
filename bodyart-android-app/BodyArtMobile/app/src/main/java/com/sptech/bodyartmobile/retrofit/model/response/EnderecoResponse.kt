package com.sptech.bodyartmobile.retrofit.model.response

data class EnderecoResponse (val id:Long, val cep:String, val rua:String, val numero:String,
                             val bairro:String, val complemento:String, val cidade:String,
                             val estado:String, val usuarios:List<UsuarioResponse>,
                             val estabelecimentos:EstabelecimentoResponse)