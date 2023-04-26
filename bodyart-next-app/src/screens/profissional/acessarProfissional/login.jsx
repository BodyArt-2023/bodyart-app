import api from "@/api";
import FormSign from "@/components/varied/FormSign";
import GaleriaContext from "@/context/galeriaContext";
import UserContext from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const INPUTS_LOGIN = [
  {
    name: "login",
    type: "email",
    placeholder: "E-mail",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "senha",
    type: "password",
    placeholder: "Senha",
    autoComplete: "off",
    autoFocus: "off",
  },
];

export default function Login({ isOpen, onClickLabel }) {
  const [userContext, setUserContext] = useContext(UserContext);
  const [galeriaContext, setGaleriaContext] = useContext(GaleriaContext);

  const router = useRouter();

  function fetchGaleria(idUser) {
    // // TESTE INICIO
    // axios
    //   .get("https://63320ba9a54a0e83d24b40ad.mockapi.io/ong-usuario")
    //   .then((res) => {
    //     res.data.map((link) => {
    //       setGaleriaContext((state) =>
    //         state ? [...state, link.path] : [link.path]
    //       );
    //     });
    //   })
    //   .catch((erro) => console.log(erro));
    // // TESTE FIM
    return api
      .get(`/fotos/${idUser}`)
      .then((res) => {
        res.data.map((link) =>
          setGaleriaContext((state) =>
            state ? [...state, link] : [link]
          )
        );
      })
      .catch((error) => console.log(error));
  }

  return (
    <FormSign
      labelDownLeft="Esqueci minha senha"
      labelDownRight="Entrar"
      labelUpLeft="Acessar"
      labelUpRight="Cadastre-se"
      isOpen={isOpen}
      onClickLabel={onClickLabel}
      inputs={INPUTS_LOGIN}
      onSubmitForm={(data) => {
        console.log(data);
        api
          .post(`/auth`, data)
          .then((res) => {
            setUserContext(res.data);
            fetchGaleria(res.data.id);
            toast.success("Login efetuado!");
            router.push("/profissional");
          })
          .catch((erro) => {
            toast.warning("Usuário inválido ou inexistente!");
          });
      }}
    />
  );
}
