package com.sptech.bodyartmobile.retrofit.auxiliares

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.sptech.bodyartmobile.R
import com.sptech.bodyartmobile.retrofit.dominio.PublicacoesDominio
import com.squareup.picasso.Picasso
import kotlin.random.Random

class PublicacoesAdapter (val publicacoes:List<PublicacoesDominio>):RecyclerView.Adapter<PublicacoesAdapter.PublicacoesHolder>() {

    class PublicacoesHolder(val view: View):RecyclerView.ViewHolder(view){
        fun render(publicacoes: PublicacoesDominio){
            val textoAnuncio: TextView = view.findViewById(R.id.tv_textoPublicacao)
            val nomeAnuncio: TextView = view.findViewById(R.id.tv_nomePublicacao)
            val favoritosAnuncio: TextView = view.findViewById(R.id.tv_favoritos)
            val imagem: ImageView = view.findViewById(R.id.iv_publicacao)
            val imagempub: ImageView = view.findViewById(R.id.iv_foto)


            favoritosAnuncio.text = Random.nextInt(100, 1000).toString()
            nomeAnuncio.text = publicacoes.foto.usuario.nome
            textoAnuncio.text = publicacoes.foto.descricao
            Picasso.get().load(publicacoes.foto.usuario.fotoPerfilPath).into(imagem)
            Picasso.get().load(publicacoes.foto.path).into(imagempub)



            if(imagem.drawable == null){
                imagem.setImageResource(R.mipmap.ic_launcher)
            }else{

                Picasso.get().load(publicacoes.foto.usuario.fotoPerfilPath).into(imagempub)
            }
            if(imagempub.drawable == null){
                imagempub.setImageResource(R.mipmap.ic_launcher)
            }else{

                Picasso.get().load(publicacoes.foto.path).into(imagempub)
            }

            }


        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PublicacoesHolder {
        val layoutInflater = LayoutInflater.from(parent.context).inflate(R.layout.ublicacoes,parent, false)
        return PublicacoesHolder(layoutInflater)
    }

    override fun getItemCount(): Int {
        return publicacoes.size
    }

    override fun onBindViewHolder(holder: PublicacoesHolder, position: Int) {
        holder.render(publicacoes[position])
    }
}