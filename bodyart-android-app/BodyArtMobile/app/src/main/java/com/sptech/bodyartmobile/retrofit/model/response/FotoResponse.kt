package com.sptech.bodyartmobile.retrofit.model.response

data class FotoResponse (val id:Long, val link:String, val descricao:String, val usuario:UsuarioResponse,
                         val portifolios:List<PortifoliosResponse>,
                         val estabelecimentos:List<EstabelecimentoResponse>,val path:String)