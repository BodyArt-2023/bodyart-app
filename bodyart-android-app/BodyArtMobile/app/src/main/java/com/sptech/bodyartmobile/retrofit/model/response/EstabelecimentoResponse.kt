package com.sptech.bodyartmobile.retrofit.model.response

data class EstabelecimentoResponse ( val id:Long, val nome:String, val telefone:String,
                                     val endereco:EnderecoResponse, val foto:FotoResponse,
                                     val profissionais:List<ProfissionalResponse>)