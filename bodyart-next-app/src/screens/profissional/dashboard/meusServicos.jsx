import api from "@/api";
import { Button } from "@/components/common/Buttons";
import Label from "@/components/common/Label";
import CardServico from "@/components/varied/CardServico";
import FormSign from "@/components/varied/FormSign";
import PopUp from "@/components/varied/PopUp";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const INPUTS_MEUS_SERVICOS = [
  {
    name: "nome",
    type: "text",
    placeholder: "Nome do serviço",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "duracao",
    type: "time",
    placeholder: "Duração (exemplo: 20 minutos = 00:20)",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "valor",
    type: "number",
    placeholder: "Valor R$ (exemplo: 20 or 20.50)",
    autoComplete: "off",
    autoFocus: "off",
  },
  {
    name: "descricao",
    type: "text",
    placeholder: "Descrição do serviço",
    autoComplete: "off",
    autoFocus: "off",
  },
];

export default function MeusServicos() {
  const [addServiceIsOpen, setAddServiceIsOpen] = useState(false);
  const [userContext, setUserContext] = useContext(UserContext);
  const [servicos, setServicos] = useState();

  function fetchServicos() {
    api
      .get(`/servicos/profissional/${userContext?.id}`)
      .then((res) => {
        setServicos(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchServicos();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 p-3">
        <PopUp
          backgroundColor="black_secondary"
          isOpen={addServiceIsOpen}
          onClose={() => setAddServiceIsOpen(false)}
          trigger={
            <CardServico
              className="w-[250px] min-h-[100px] flex items-center justify-center"
              onClick={() => {
                setAddServiceIsOpen(true);
              }}
            >
              +
            </CardServico>
          }
          className="p-4"
        >
          <Label
            text="Adicionar novo serviço!"
            className="w-full text-center mb-3"
            fontColor="lapis_lazuli"
            fontSize="1.1rem"
          />
          <FormSign
            isOpen
            inputs={INPUTS_MEUS_SERVICOS}
            buttonSubmitTrigger={
              <Button className="btn-sm" type="submit">
                Adicionar Serviço
              </Button>
            }
            onSubmitForm={(data) => {
              let dataServico = {
                ...data,
                idProfissional: userContext?.id,
              };
              console.log("data", dataServico);
              api
                .post(`/servicos`, dataServico)
                .then((res) => {
                  setAddServiceIsOpen(false);
                  toast.success("Serviço cadastrado com sucesso!");
                  fetchServicos();
                })
                .catch((erro) => {
                  console.log(erro);
                  toast.warning("Serviço inválido!");
                });
            }}
          />
        </PopUp>
        {servicos
          ? servicos.map((serv) => {
              return (
                <CardServico
                  key={serv.nome}
                  title={serv.nome}
                  value={serv.valor}
                  duration={`${serv.duracao[0]} horas e ${serv.duracao[1]} minutos`}
                  description={serv.descricao}
                  className="w-[250px] min-h-[100px]"
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
