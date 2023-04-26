import Image from "next/image";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../common/Buttons";
import Label from "../common/Label";
import logoLavanda from "public/images/logos/logolavandawithtext.svg";
import { Link as LinkScroll } from "react-scroll";
import { useRouter } from "next/router";
import UserContext from "@/context/userContext";
import FotoDePerfil from "../varied/FotoDePerfil";

export default function Header({ className }) {
  const router = useRouter();
  const [userContext, setUserContext] = useContext(UserContext);

  const OPTIONS_CONSUMIDOR = {
    accessEnabled: {
      //COM DASHBOARD E OPÇÕES
    },
    accessDisabled: {
      optionsLeft: [
        {
          label: "Home",
          toScroll: "homeCliente",
          to: "/",
          condicao: true,
        },
        {
          label: "Catálogo",
          toScroll: "catalogoCliente",
          to: "/",
          condicao: true,
        },
        {
          label: "Feed",
          toScroll: "feedCliente",
          to: "/feed",
          condicao: true,
        },
        {
          label: "Buscar",
          toScroll: "buscarCliente",
          to: "/buscar",
          condicao: true,
        },
      ],
      optionsRight: [
        {
          label: "Para Profissionais",
          to: "/profissional",
          themeButton: "transparentLapisLazuli",
          condicao: true,
        },
        {
          label: "Acessar",
          to: "/acessar",
          condicao: true,
        },
      ],
    },
  };

  const OPTIONS_PROFISSIONAL = {
    accessEnabled: {
      //COM DASHBOARD E OPÇÕES
    },
    accessDisabled: {
      optionsLeft: [
        {
          label: "Home",
          toScroll: "homeProfissional",
          to: "/profissional",
          condicao: true,
        },
        {
          label: "Como funciona?",
          toScroll: "comoFunciona",
          to: "/profissional",
          condicao: true,
        },
      ],
      optionsRight: [
        {
          label: "Para Clientes",
          to: "/",
          themeButton: "transparentLapisLazuli",
          condicao: true,
        },
        {
          label: "Dashboard",
          to: "/profissional/dashboard",
          themeButton: "transparentLapisLazuli",
          condicao: userContext?.profissional,
        },
        {
          label: "Acessar",
          to: "/profissional/acessar",
          condicao: true,
        },
      ],
    },
  };

  useEffect(() => {}, [router.pathname]);

  return (
    <StyledHeader className={className}>
      <StyledNav className="container">
        <StyledUl>
          {router.pathname.split("/")[1] !== "profissional"
            ? OPTIONS_CONSUMIDOR.accessDisabled.optionsLeft.map((option) => (
                <StyledLi
                  key={option.label}
                  onClick={() => {
                    if (router.pathname !== option.to) {
                      setTimeout(() => {
                        let linkScroll = document.getElementById(
                          `linkScroll${option.toScroll}`
                        );

                        return linkScroll ? linkScroll.click() : null;
                      }, 150);
                    }

                    return router.pathname === option.to
                      ? null
                      : router.push(option.to);
                  }}
                >
                  {router.pathname === option.to ? (
                    <LinkScroll
                      id={`linkScroll${option.toScroll}`}
                      activeClass="activeHeader"
                      to={option.toScroll}
                      spy={true}
                      smooth={true}
                      offset={-80.01}
                      duration={110}
                    >
                      {option?.component ? option?.component : option?.label}
                    </LinkScroll>
                  ) : (
                    option.label
                  )}
                </StyledLi>
              ))
            : OPTIONS_PROFISSIONAL.accessDisabled.optionsLeft.map((option) => (
                <StyledLi
                  key={option.label}
                  onClick={() => {
                    if (router.pathname !== option.to) {
                      setTimeout(() => {
                        let linkScroll = document.getElementById(
                          `linkScroll${option.toScroll}`
                        );

                        return linkScroll ? linkScroll.click() : null;
                      }, 150);
                    }

                    return router.pathname === option.to
                      ? null
                      : router.push(option.to);
                  }}
                >
                  {router.pathname === option.to ? (
                    <LinkScroll
                      id={`linkScroll${option.toScroll}`}
                      activeClass="activeHeader"
                      to={option.toScroll}
                      spy={true}
                      smooth={true}
                      offset={-80.01}
                      duration={110}
                    >
                      {option?.component ? option?.component : option?.label}
                    </LinkScroll>
                  ) : (
                    option.label
                  )}
                </StyledLi>
              ))}
        </StyledUl>

        <StyledLogo src={logoLavanda} width="95" alt="" />
        <StyledUl>
          {router.pathname.split("/")[1] !== "profissional"
            ? OPTIONS_CONSUMIDOR.accessDisabled.optionsRight.map((option) => (
                <StyledLi key={option.label}>
                  {userContext && option.label === "Acessar" ? (
                    <FotoDePerfil
                      onClick={() =>
                        router.pathname.split("/")[1] === "profissional"
                          ? router.push("/profissional/usuario")
                          : router.push("/usuario")
                      }
                      username={userContext?.nome.split(" ")[0]}
                      image={userContext?.fotoPerfilPath}
                      size="1.9rem"
                    />
                  ) : (
                    <Button
                      style={{ fontSize: "0.95rem" }}
                      themeButton={option?.themeButton}
                      onClick={() => router.push(option.to)}
                    >
                      {option.label}
                    </Button>
                  )}
                </StyledLi>
              ))
            : OPTIONS_PROFISSIONAL.accessDisabled.optionsRight.map((option) => (
                <StyledLi key={option.label}>
                  {userContext && option.label === "Acessar" ? (
                    <FotoDePerfil
                      onClick={() =>
                        router.pathname.split("/")[1] === "profissional"
                          ? router.push("/profissional/usuario")
                          : router.push("/usuario")
                      }
                      username={userContext?.nome.split(" ")[0]}
                      image={userContext?.fotoPerfilPath}
                      size="1.9rem"
                    />
                  ) : option.condicao ? (
                    <Button
                      style={{ fontSize: "0.95rem" }}
                      themeButton={option?.themeButton}
                      onClick={() => router.push(option.to)}
                    >
                      {option.label}
                    </Button>
                  ) : null}
                </StyledLi>
              ))}
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledLogo = styled(Image)`
  position: absolute;
  right: 46%;
`;

const StyledLi = styled.li`
  transition: 0.2s;
  cursor: pointer;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.lapis_lazuli};
  :hover {
    color: ${({ theme }) => theme.colors.african_violet};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
`;

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const StyledHeader = styled.header`
  user-select: none;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${({ theme }) => theme.colors.white};
  top: 0px;
`;
