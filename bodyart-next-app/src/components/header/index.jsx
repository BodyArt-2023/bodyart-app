import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../common/Buttons";
import Label from "../common/Label";
import logoLavanda from "public/images/logos/logolavandawithtext.svg";
import { Link as LinkScroll } from "react-scroll";
import { useRouter } from "next/router";

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
      },
      {
        label: "Catálogo",
        toScroll: "catalogoCliente",
        to: "/",
      },
      {
        label: "Feed",
        toScroll: "feedCliente",
        to: "/feed",
      },
      {
        label: "Buscar",
        toScroll: "buscarCliente",
        to: "/buscar",
      },
    ],
    optionsRight: [
      {
        label: "Para Profissionais",
        to: "",
        themeButton: "transparentLapisLazuli",
      },
      {
        label: "Acessar",
        to: "/acessar",
      },
    ],
  },
};

const OPTIONS_PROFISSIONAL = {
  accessEnabled: {
    //COM DASHBOARD E OPÇÕES
  },
  accessDisabled: {
    optionsLeft: [],
    optionsRight: [],
  },
};

export default function Header({ className }) {
  const router = useRouter();

  return (
    <StyledHeader className={className}>
      <StyledNav className="container">
        <StyledUl>
          {OPTIONS_CONSUMIDOR.accessDisabled.optionsLeft.map((option) => (
            <StyledLi key={option.label}>
              <LinkScroll
                activeClass="activeHeader"
                to={option.toScroll}
                spy={true}
                smooth={true}
                offset={-80.01}
                duration={110}
                onClick={() =>
                  router.pathname === option.to ? null : router.push(option.to)
                }
              >
                {option?.component ? option?.component : <>{option.label}</>}
              </LinkScroll>
            </StyledLi>
          ))}
        </StyledUl>

        <StyledLogo src={logoLavanda} width="95" alt="" />
        <StyledUl>
          {OPTIONS_CONSUMIDOR.accessDisabled.optionsRight.map((option) => (
            <StyledLi key={option.label}>
              {option?.component ? (
                option?.component
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
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${({ theme }) => theme.colors.white};
  top: 0px;
`;
