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

export default function Agendamentos() {
  const [addServiceIsOpen, setAddServiceIsOpen] = useState(false);
  const [userContext, setUserContext] = useContext(UserContext);
  const [agenda, setAgenda] = useState();

  function fetchAgenda() {
    api
      .get(`/agendamentos/profissional/${userContext?.id}`)
      .then((res) => {
        setAgenda(res.data);
        console.log("lista atualizada");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (userContext) {
      fetchAgenda();
      setInterval(() => {
        fetchAgenda();
      }, 5000);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 p-3">
        <PopUp
          backgroundColor="black_secondary"
          isOpen={addServiceIsOpen}
          onClose={() => setAddServiceIsOpen(false)}
          className="p-4"
        ></PopUp>
        {agenda
          ? agenda.map((agend) => {
              const vh = agend.dataHoraCheckin;
              return (
                <CardServico
                  key={`${agend.id}-${agend.servico}`}
                  title={"Serviço Agendado"}
                  servico={agend.servico}
                  onClick={() => {
                    setAddServiceIsOpen(true);
                  }}
                  dataHora={`${vh[2]}/${vh[1]}/${vh[0]} às ${vh[3]}h ${vh[4]}m`}
                  finalizado={agend.finalizado ? "Finalizado!" : "Agendado!"}
                  className="w-[250px] min-h-[100px]"
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
