import FormSign from "@/components/varied/FormSign";
import React from "react";

const INPUTS_LOGIN = [
  {
    name: "email",
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
        // api
        //   .post(`/clientes/autenticar`, data)
        //   .then((res) => {
        //     toast.success("Login efetuado!");
        //     navigate("/inicio-cliente");
        //   })
        //   .catch((erro) => {
        //     toast.warning("Login inválido!");
        //     console.log(erro);

        //     setErrorsMessage(Validate(erro.response.data.errors));
        //   });
      }}
    />
  );
}
