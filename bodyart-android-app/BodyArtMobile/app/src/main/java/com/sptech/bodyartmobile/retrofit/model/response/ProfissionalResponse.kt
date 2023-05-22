package com.sptech.bodyartmobile.retrofit.model.response

data class ProfissionalResponse (val id:Long, val nome:String, val cpf:String, val email:String,
                                 val genero:Char, val dataNascimento: IntArray, val telefone:String,
                                 val fotoPerfilPath:String, val profissional:Boolean, val dono:Boolean,
                                 val estabelecimento:EstabelecimentoResponse, val servicos:List<ServicoResponse>,
                                 val portifolios:PortifoliosResponse)