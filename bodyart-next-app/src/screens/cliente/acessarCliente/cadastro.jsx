import FormSign from "@/components/varied/FormSign";
import React from "react";

const INPUTS_CADASTRO = [
  {
    name: "nome",
    type: "text",
    placeholder: "Nome",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "cpf",
    type: "text",
    placeholder: "CPF",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "celular",
    type: "text",
    placeholder: "Celular",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "email",
    type: "text",
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
  {
    name: "confirmeSenha",
    type: "password",
    placeholder: "Confirme sua senha",
    autoComplete: "off",
    autoFocus: "off",
  },
];

const BUTTONS_GENERO = [
  {
    name: "genero",
    label: "Outro",
    value: null,
  },
  { name: "genero", label: "Feminino", value: "F" },
  { name: "genero", label: "Masculino", value: "M" },
];

export default function CadastroCliente({ onClickLabel, isOpen }) {
  return (
    <FormSign
      labelDownRight="Cadastrar-se"
      labelUpLeft="Cadastro"
      labelUpRight="Já tem uma conta? Entrar!"
      isOpen={isOpen}
      onClickLabel={onClickLabel}
      inputs={INPUTS_CADASTRO}
      buttonsGenero={BUTTONS_GENERO}
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
