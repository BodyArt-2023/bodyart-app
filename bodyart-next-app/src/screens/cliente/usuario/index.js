import api from "@/api";
import Article from "@/components/common/Article";
import { Button } from "@/components/common/Buttons";
import Label from "@/components/common/Label";
import Section from "@/components/common/Section";
import FotoDePerfil from "@/components/varied/FotoDePerfil";
import GaleriaContext from "@/context/galeriaContext";
import UserContext from "@/context/userContext";
import axios from "axios";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Galeria from "./galeria";
import Perfil from "./perfil";
import { useRouter } from "next/router";
import Icon from "@/components/common/Icon";
import PopUp from "@/components/varied/PopUp";
import { toast } from "react-toastify";
import Enderecos from "./enderecos";

export default function UsuarioCliente() {
  const [userContext, setUserContext] = useContext(UserContext);
  const [page, setPage] = useState("perfil");
  const [galeriaContext, setGaleriaContext] = useContext(GaleriaContext);
  const router = useRouter();
  const [addFotoIsOpen, setAddFotoIsOpen] = useState(false);
  const [fotoSelectedPerfil, setFotoSelectedPerfil] = useState(false);

  const OPTIONS_SIDE = [
    {
      page: "perfil",
      condicao: true,
    },
    {
      page: "empresas",
      condicao: userContext?.profissional,
    },
    {
      page: "galeria",
      condicao: true,
    },
    {
      page: "agendamentos",
      condicao: true,
    },
    // {
    //   page: "endereços",
    //   condicao: true,
    // },
  ];

  return (
    <Section id="usuarioCliente" backgroundColor="black_secondary">
      <Article className="flex flex-row h-full">
        <div className="flex flex-col justify-between items-center py-3">
          <div className="flex flex-col gap-4 justify-center items-center">
            <FotoDePerfil
              sizePhoto="7rem"
              size="2rem"
              image={userContext?.fotoPerfilPath}
              onClick={() => setAddFotoIsOpen(true)}
            />
            <Label
              text={userContext?.nome}
              fontColor="white"
              fontSize="0.9rem"
            />
            <div className="flex flex-col gap-2.5">
              {OPTIONS_SIDE.map((option) =>
                option.condicao ? (
                  <Button
                    key={option.page}
                    onClick={() => {
                      setPage(option.page);
                    }}
                    className="btn-sm capitalize"
                    disabled={page === option.page}
                  >
                    {option.page}
                  </Button>
                ) : null
              )}
            </div>
          </div>
          <Button
            className="w-full btn-sm"
            onClick={() => {
              router.push("/");
              setUserContext(null);
              setGaleriaContext(null);
            }}
          >
            Sair
          </Button>
        </div>
        {page === "galeria" ? <Galeria /> : null}
        {page === "perfil" ? <Perfil /> : null}
        {page === "endereços" ? <Enderecos /> : null}
        <PopUp
          backgroundColor="black_secondary"
          isOpen={addFotoIsOpen}
          onClose={() => setAddFotoIsOpen(false)}
        >
          <Label text="Escolha sua nova foto:" fontColor="light_blue" />
          <div className="flex flex-wrap gap-[5px] p-2 max-h-[400px] overflow-y-auto mb-2">
            {fotoSelectedPerfil ? (
              <div className="flex relative flex-col gap-1 w-full relative">
                <StyledPhoto
                  image={fotoSelectedPerfil?.path}
                  className="rounded-lg max-h-[500px]"
                />
                <StyledIcon
                  icon="FiChevronLeft"
                  size="2rem"
                  className="absolute -top-2 -right-2"
                  onClick={() => {
                    setFotoSelectedPerfil(null);
                  }}
                />
              </div>
            ) : galeriaContext ? (
              galeriaContext?.map((photo) => (
                <Photo
                  key={photo}
                  image={photo.path}
                  onClick={() => {
                    setFotoSelectedPerfil(photo);
                  }}
                />
              ))
            ) : (
              <Label
                text="Não há fotos na sua galeria!"
                fontSize="0.75rem"
                fontColor="light_blue"
              />
            )}
          </div>

          <div className="flex flex-row gap-2">
            <Button
              themeButton="confirm"
              className="btn-sm w-[50%]"
              disabled={!fotoSelectedPerfil}
              onClick={() => {
                api
                  .patch(
                    `/usuarios/update-foto-perfil/${userContext.id}/${fotoSelectedPerfil.id}`
                  )
                  .then((res) => {
                    toast.success("Foto atualizada com Sucesso!");
                    setUserContext({
                      ...userContext,
                      fotoPerfilPath: fotoSelectedPerfil.path,
                    });
                    setFotoSelectedPerfil(null);
                    setAddFotoIsOpen(false);
                    console.log(res.data);
                  })
                  .catch((err) => {
                    toast.warning("Ocorreu algum erro!");
                    console.log(err);
                  });
              }}
            >
              Concluir
            </Button>
            <Button
              themeButton="cancel"
              className="btn-sm w-[50%]"
              onClick={() => {
                setFotoSelectedPerfil(null);
                setAddFotoIsOpen(false);
              }}
            >
              Cancelar
            </Button>
          </div>
        </PopUp>
      </Article>
    </Section>
  );
}

const StyledIcon = styled(Icon)`
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.light_blue};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 30%;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.lapis_lazuli};
  }
`;

const StyledPhoto = styled.div`
  min-height: 250px;
  width: 100%;
  background: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Photo = styled.div`
  transition: 0.2s;
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.gray_lightray};
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lapis_lazuli};
  color: ${({ theme }) => theme.colors.lapis_lazuli};
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  :active {
    opacity: 0.7;
  }
`;
