package com.sptech.bodyartmobile

import android.graphics.drawable.Drawable
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private const val NAME = "nome"
private const val ID = "id"
private const val FOTO = "foto"
private const val AVALIACAO = "avaliacao"

/**
 * A simple [Fragment] subclass.
 * Use the [FragmentCardEstabelecimento.newInstance] factory method to
 * create an instance of this fragment.
 */
class FragmentCardEstabelecimento : Fragment() {
    // TODO: Rename and change types of parameters
    private var nome: String? = null
    private var id: Long? = null
    private var foto: String? = null
    private var avaliacao: Double? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            nome = it.getString(NAME)
            id = it.getLong(ID)
            foto = it.getString(FOTO)
            avaliacao = it.getDouble(AVALIACAO)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_card_estabelecimento, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        view.findViewById<TextView>(R.id.tv_nome)?.setText(nome)
        view.findViewById<TextView>(R.id.tv_nota).setText(avaliacao.toString())
        view.findViewById<TextView>(R.id.tv_img_estabelecimento).setText(foto)

    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @param param2 Parameter 2.
         * @return A new instance of fragment FragmentCardCategorias.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(nome: String, id:Long, foto: String, avaliacao: Double) =
            FragmentCardEstabelecimento().apply {
                arguments = Bundle().apply {
                    putString(NAME, nome)
                    putLong(ID, id)
                    putString(FOTO, foto)
                    putDouble(AVALIACAO, avaliacao)
                }
            }
    }
}