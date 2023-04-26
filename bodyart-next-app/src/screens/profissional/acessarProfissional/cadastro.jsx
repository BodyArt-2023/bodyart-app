import api from "@/api";
import FormSign from "@/components/varied/FormSign";
import React from "react";
import { toast } from "react-toastify";

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
    name: "dataNascimento",
    type: "date",
    placeholder: "Data de Nascimento",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "telefone",
    type: "text",
    placeholder: "Telefone",
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

export default function Cadastro({ onClickLabel, isOpen, setCadastroIsOpen }) {
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
        api
          .post(`/usuarios/cliente`, data)
          .then((res) => {
            toast.success("Cadastro efetuado com sucesso!");
            setCadastroIsOpen(false);
          })
          .catch((erro) => {
            console.log(erro);
            toast.warning("Cadastro inválido!");
          });
      }}
    />
  );
}
