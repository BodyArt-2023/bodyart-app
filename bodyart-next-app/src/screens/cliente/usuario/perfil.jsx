import Label from "@/components/common/Label";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import styled from "styled-components";

export default function Perfil() {
  const [userContext, setUserContext] = useContext(UserContext);
  return (
    <div className="w-full h-full px-3 pb-5">
      <div className="flex flex-row items-center gap-2">
        <Label
          text={"Perfil"}
          fontColor="white"
          fontSize="1.25rem"
          fontWeight="500"
          className="capitalize"
        />
      </div>
      <Content>
        <div className="flex flex-row justify-center items-center h-full gap-5">
          <div className="w-[35%] flex flex-col gap-4">
            <LabelEdit label="Nome" value={userContext?.nome} />
            <LabelEdit label="Email" value={userContext?.email} />
            <LabelEdit
              label="Gênero"
              value={
                userContext?.genero.toLowerCase() === "m"
                  ? "Masculino"
                  : userContext?.genero.toLowerCase() === "f"
                  ? "Feminino"
                  : null
              }
            />
          </div>
          <div className="w-[35%] flex flex-col gap-4">
            <LabelEdit label="CPF" value={userContext?.cpf} />
            <LabelEdit
              label="Nascimento"
              value={`${userContext?.dataNascimento[2]}/${userContext?.dataNascimento[1]}/${userContext?.dataNascimento[0]}`}
            />
            <LabelEdit label="Telefone" value={userContext?.telefone} />
          </div>
        </div>
      </Content>
    </div>
  );
}

function LabelEdit({ label, value, edit }) {
  return !edit ? (
    <div className="flex flex-col">
      <Label text={label} fontColor="white" fontSize="0.85rem" />
      <Label text={value} fontColor="light_blue" />
    </div>
  ) : (
    <div>
      <Label />
    </div>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
  border-radius: 5px;
  overflow: auto;
`;
