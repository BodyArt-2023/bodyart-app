import api from "@/api";
import Article from "@/components/common/Article";
import { Button } from "@/components/common/Buttons";
import Label from "@/components/common/Label";
import PopUp from "@/components/varied/PopUp";
import UserContext from "@/context/userContext";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

export default function Home() {
  const [userContext, setUserContext] = useContext(UserContext);
  const [tornarMembroOpen, setTornarMembroOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Article className="w-full h-full flex justify-end items-end">
        <div className="flex flex-col p-5">
          <StyledLabel
            text="Todo talento é único."
            fontColor="white"
            fontWeight="500"
            fontSize="1.5rem"
          />
          <StyledLabel
            text="E nós precisamos do seu!"
            fontColor="white"
            fontSize="1.25rem"
          />
          <Button
            className="mt-4 "
            onClick={() => {
              if (userContext) {
                if (userContext?.profissional) {
                  toast.success("Você já é um profissional!");
                } else {
                  setTornarMembroOpen(true);
                }
              } else {
                router.push("/profissional/acessar");
              }
            }}
          >
            Se tornar membro!
          </Button>
        </div>
        <PopUp
          isOpen={tornarMembroOpen}
          backgroundColor="black_secondary"
          onClose={() => {
            setTornarMembroOpen(false);
          }}
          backgroundWidth="99.3vw"
        >
          <div className="p-2">
            <Label
              className="p-4 text-justify"
              fontSize="0.9rem"
              fontColor="white"
              text="Ao se tornar membro do grupo BodyArt você poderá se registrar em um estabelecimento existente para trabalhar ou até mesmo montar seu próprio negócio. Acomapanhar os agendamentos feitos por seus clientes, montar um portifólio de ponta e alcancar muito sucesso."
            />
            <div className="flex flex-row w-full gap-2">
              <Button
                className="w-[50%]"
                themeButton="confirm"
                onClick={() => {
                  api
                    .post(`/usuarios/profissional/${userContext?.id}`)
                    .then((res) => {
                      setTornarMembroOpen(false);
                      toast.success("Agora você é um profissional.");
                      setUserContext({ ...userContext, profissional: true });
                      console.log(res);
                    })
                    .catch((err) => {
                      setTornarMembroOpen(false);
                      toast.warning("Ocorreu algum erro!");
                      console.log(err);
                    });
                }}
              >
                Se tornar membro!
              </Button>
              <Button
                className="w-[50%]"
                themeButton="cancel"
                onClick={() => {
                  setTornarMembroOpen(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </PopUp>
      </Article>
    </>
  );
}

const StyledLabel = styled(Label)`
  text-shadow: -2px 2px #000000;
`;
