import Icon from "@/components/common/Icon";
import Label from "@/components/common/Label";
import PopUp from "@/components/varied/PopUp";
import React, { useState } from "react";
import styled from "styled-components";

export default function Enderecos() {
  const [addEnderecoIsOpen, setAddEnderecoIsOpen] = useState(false);

  return (
    <div className="w-full h-full px-3 pb-5">
      <div className="flex flex-row items-center gap-2">
        <Label
          text={"Endereços"}
          fontColor="white"
          fontSize="1.25rem"
          fontWeight="500"
          className="capitalize"
        />
        <PopUp
          isOpen={addEnderecoIsOpen}
          backgroundColor="black_secondary"
          onClose={() => setAddEnderecoIsOpen(false)}
          trigger={
            <IconAddEnd
              icon="FiPlusSquare"
              size="1.5rem"
              onClick={() => setAddEnderecoIsOpen(true)}
            />
          }
        ></PopUp>
      </div>
      <Content></Content>
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

const IconAddEnd = styled(Icon)`
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.lima};
  cursor: pointer;
  :hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.lima};
  }
  :active {
    opacity: 0.7;
  }
`;
