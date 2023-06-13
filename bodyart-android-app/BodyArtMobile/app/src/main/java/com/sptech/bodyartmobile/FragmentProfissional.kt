package com.sptech.bodyartmobile

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.google.android.material.imageview.ShapeableImageView
import com.squareup.picasso.Picasso

// TODO: Rename parameter arguments, choose names that match
private const val NAME = "nome"
private const val ID = "id"
private const val FOTO = "foto"
private const val AVALIACAO = "avaliacao"

class FragmentProfissional : Fragment() {
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
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_profissional, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        view.findViewById<TextView>(R.id.nome_profissional).text = nome
        view.findViewById<TextView>(R.id.tv_nota).text = avaliacao.toString()
//        if (foto != null) {
        Picasso.get()
            .load("https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/08/red-fox-looks-camera-portrait.jpg?fit=1000%2C668&ssl=1")
            .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
//        }
    }

}