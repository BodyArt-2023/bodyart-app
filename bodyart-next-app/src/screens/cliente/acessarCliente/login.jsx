import api from "@/api";
import FormSign from "@/components/varied/FormSign";
import React from "react";

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
            alert("login efetuado");
            // toast.success("Login efetuado!");
            // navigate("/inicio-cliente");
          })
          .catch((erro) => {
            alert("usuário inválido ou inexistente");
            // toast.warning("Login inválido!");
            console.log(erro);
            // setErrorsMessage(Validate(erro.response.data.errors));
          });
      }}
    />
  );
}
