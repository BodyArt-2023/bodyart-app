package com.sptech.bodyartmobile.retrofit

import com.sptech.bodyartmobile.retrofit.api.*
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object Apis {
    val BASE_URL = "https://bodyart.ddnsking.com/api/"

    fun getAuthApi(): AuthApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(AuthApi::class.java)
    }

    fun getUsuarioAop(): UsuarioApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(UsuarioApi::class.java)
    }

    fun getServicoApi(): ServicoApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(ServicoApi::class.java)
    }

    fun getCategoriaApi(): CategoriaApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(CategoriaApi::class.java)
    }

    fun getEstabelecimentoApi(): EstabelecimentoApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(EstabelecimentoApi::class.java)
    }

    fun getProfissionalApi(): ProfissionalApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(ProfissionalApi::class.java)
    }

    fun getPublicacoes(): PublicacoesApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create()).baseUrl(
                BASE_URL
            ).build()

        return retrofit.create(PublicacoesApi::class.java)
    }

    fun getAgendamentosApi(): AgendaApi {
        val retrofit = Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl(BASE_URL)
            .build()

        return retrofit.create(AgendaApi::class.java)
    }


}