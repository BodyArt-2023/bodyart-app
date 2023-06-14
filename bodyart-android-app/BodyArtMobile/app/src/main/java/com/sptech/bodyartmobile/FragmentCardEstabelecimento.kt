package com.sptech.bodyartmobile

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.squareup.picasso.Picasso


// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val NAME = "nome"
private const val ID = "id"
private const val FOTO = "foto"
private const val AVALIACAO = "avaliacao"

private const val IDUSER = "idUser"

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

    private var idUser: Long? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            nome = it.getString(NAME)
            id = it.getLong(ID)
            foto = it.getString(FOTO)
            avaliacao = it.getDouble(AVALIACAO)
            idUser = it.getLong(IDUSER)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_card_estabelecimento, container, false)
    }

    @SuppressLint("ResourceType")
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        view.findViewById<TextView>(R.id.tv_nome)?.setText(nome)
        view.findViewById<TextView>(R.id.tv_nota).setText(avaliacao.toString())
        println(foto)
////        if (foto != null) {
        if (foto == "21/galeria/esmalteria.jpg") {
            Picasso.get()
                .load("https://i.pinimg.com/originals/47/47/b3/4747b3210887998029459a6f809ec6c0.jpg")
                .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
        }
        if (foto == "17/galeria/28.jpg") {
            Picasso.get().load("https://bodyart.ddnsking.com/api/images/20/galeria/26.jpg")
                .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
        }
        if (foto == "22/galeria/1.jpg") {
            Picasso.get().load("https://bodyart.ddnsking.com/api/images/17/galeria/28.jpg")
                .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
        }
        if (foto == "20/galeria/26.jpg") {
            Picasso.get()
                .load("https://mais-bonita-site-media.s3.amazonaws.com/estabelecimentos/photo-d11c18a6-ac6b-43ca-8ec0-8e199d411ac2.png")
                .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
        }

        if (foto == "15/galeria/spa.jpg") {
            Picasso.get()
                .load("https://vejasp.abril.com.br/wp-content/uploads/2016/12/032_hotel-unique_-spa-room.jpg")
                .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
        }
        if (foto == "18/galeria/27.jpg") {
            Picasso.get()
                .load("https://d2zdpiztbgorvt.cloudfront.net/region1/br/231721/biz_photo/badb196d7c154e539e5d90e4bc758f-lotero-salon-biz-photo-b1a7897834644103949aef60fb4624-booksy.jpeg")
                .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
        }
        if (foto == "16/galeria/studio_tatoo.jpg") {
            Picasso.get()
                .load("https://www.dino.com.br/DinoImages/36964cf8-c83f-4fdf-9958-7005c88a1dd1.jpg")
                .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
        }
//        Picasso.get().load("https://bodyart.ddnsking.com/api/images/$foto")
//            .into(view.findViewById<ImageView>(R.id.iv_img_estabelecimento))
//        }
        view.findViewById<Button>(R.id.btn_open_service2).setOnClickListener {
            abrirTelaEstabelecimento()
        }

    }

    fun abrirTelaEstabelecimento() {
        val telaEstabelecimento = Intent(context, PerfilEstabelecimento::class.java)
        telaEstabelecimento.putExtra("id", id)
        telaEstabelecimento.putExtra("nome", nome)
        telaEstabelecimento.putExtra("foto", foto)
        telaEstabelecimento.putExtra("avaliacao", avaliacao)
        telaEstabelecimento.putExtra("idUser", idUser)

        startActivity(telaEstabelecimento)
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
        fun newInstance(nome: String, id: Long, foto: String, avaliacao: Double) =
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