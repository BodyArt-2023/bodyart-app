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
        if (foto == "21/galeria/esmalteria.jpg") {
            Picasso.get()
                .load("https://i.pinimg.com/originals/47/47/b3/4747b3210887998029459a6f809ec6c0.jpg")
                .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
        }
        if (foto == "17/galeria/28.jpg") {
            Picasso.get().load("https://bodyart.ddnsking.com/api/images/20/galeria/26.jpg")
                .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
        }
        if (foto == "22/galeria/1.jpg") {
            Picasso.get().load("https://bodyart.ddnsking.com/api/images/17/galeria/28.jpg")
                .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
        }
        if (foto == "20/galeria/26.jpg") {
            Picasso.get()
                .load("https://mais-bonita-site-media.s3.amazonaws.com/estabelecimentos/photo-d11c18a6-ac6b-43ca-8ec0-8e199d411ac2.png")
                .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
        }

        if (foto == "15/galeria/spa.jpg") {
            Picasso.get()
                .load("https://vejasp.abril.com.br/wp-content/uploads/2016/12/032_hotel-unique_-spa-room.jpg")
                .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
        }
        if (foto == "18/galeria/27.jpg") {
            Picasso.get()
                .load("https://d2zdpiztbgorvt.cloudfront.net/region1/br/231721/biz_photo/badb196d7c154e539e5d90e4bc758f-lotero-salon-biz-photo-b1a7897834644103949aef60fb4624-booksy.jpeg")
                .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
        }
        if (foto == "16/galeria/studio_tatoo.jpg") {
            Picasso.get()
                .load("https://www.dino.com.br/DinoImages/36964cf8-c83f-4fdf-9958-7005c88a1dd1.jpg")
                .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
        }
//        Picasso.get()
//            .load("https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/08/red-fox-looks-camera-portrait.jpg?fit=1000%2C668&ssl=1")
//            .into(view.findViewById<ShapeableImageView>(R.id.profile_img))
//        }
    }

}