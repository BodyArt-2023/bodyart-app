package com.sptech.bodyartmobile

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import com.sptech.bodyartmobile.retrofit.Apis
import com.sptech.bodyartmobile.retrofit.model.response.EstabelecimentoResponse
import com.sptech.bodyartmobile.retrofit.model.response.ServicoResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val NAME = "nome"
private const val ID = "id"

/**
 * A simple [Fragment] subclass.
 * Use the [FragmentCardCategoria.newInstance] factory method to
 * create an instance of this fragment.
 */
class FragmentCardCategoria : Fragment() {
    // TODO: Rename and change types of parameters
    private var nome: String? = null
    private var id: Long = 0L

    val estabelecimentoApi = Apis.getEstabelecimentoApi()
    val profissionalApi = Apis.getProfissionalApi()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            nome = it.getString(NAME)
            id = it.getLong(ID)

        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment

        return inflater.inflate(R.layout.fragment_card_categoria, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        view.findViewById<TextView>(R.id.tv_categoria)?.setText(nome)
        mostrarEstabelecimentos()

    }

    fun mostrarEstabelecimentos() {

        var getTodosEstabelecimentos = estabelecimentoApi.getAllByCategoria(id)

        if (getTodosEstabelecimentos != null) {
            getTodosEstabelecimentos.enqueue(object : Callback<List<EstabelecimentoResponse>> {

                // quando houver comunicação com a API
                override fun onResponse(
                    call: Call<List<EstabelecimentoResponse>>,
                    response: Response<List<EstabelecimentoResponse>>
                ) {
                    if (response.isSuccessful) { // status 2xx (200, 201, 204 etc)
                        val estabelecimentos = response.body()

                        if (estabelecimentos != null) {
                            for (estabelecimento in estabelecimentos) {

                                var getAvaliacao =
                                    estabelecimentoApi.getAvaliacaoByEstabelecimento(id)
                                var avaliacao: Double
                                getAvaliacao.enqueue(object : Callback<Double> {
                                    override fun onResponse(
                                        call: Call<Double>,
                                        response: Response<Double>
                                    ) {
                                        avaliacao = response.body()!!;

                                        var fragmentEstabelecimento = FragmentCardEstabelecimento()
                                        var tr = childFragmentManager.beginTransaction()
                                        var args = Bundle()
                                        args.putString("nome", estabelecimento.nome)
                                        args.putLong("id", estabelecimento.id)
                                        if (estabelecimento.foto?.link === null) {
                                            //manter foto default
                                        } else {
                                            args.putString("foto", estabelecimento.foto.link)
                                        }
                                        args.putDouble("avaliacao", avaliacao)
                                        fragmentEstabelecimento.arguments = args
                                        tr.add(R.id.ll_categories, fragmentEstabelecimento)
                                        tr.commitAllowingStateLoss()

                                    }

                                    override fun onFailure(call: Call<Double>, t: Throwable) {

                                        var fragmentEstabelecimento = FragmentCardEstabelecimento()
                                        var tr = childFragmentManager.beginTransaction()
                                        var args = Bundle()
                                        args.putString("nome", estabelecimento.nome)
                                        args.putLong("id", estabelecimento.id)
                                        if (estabelecimento.foto?.link === null) {
                                            //manter foto default
                                        } else {
                                            args.putString("foto", estabelecimento.foto.link)
                                        }
                                        args.putDouble("avaliacao", 0.0)
                                        fragmentEstabelecimento.arguments = args
                                        tr.add(R.id.ll_categories, fragmentEstabelecimento)
                                        tr.commitAllowingStateLoss()
                                    }
                                })

                            }
                        }
                    }
                }

                // quando não houver comunicação com a API
                override fun onFailure(call: Call<List<EstabelecimentoResponse>>, t: Throwable) {
                    Toast.makeText(context, "Erro na API: ${t.message}", Toast.LENGTH_SHORT).show()
                    t.printStackTrace()
                }
            })
        }
    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @return A new instance of fragment FragmentCardCategoria.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(nome: String, id: Long) =
            FragmentCardCategoria().apply {
                arguments = Bundle().apply {
                    putString(NAME, nome)
                    putLong(ID, id)
                }
            }
    }
}

