import React from "react";
import styled from "styled-components";
import { Button } from "../common/Buttons";
import Icon from "../common/Icon";
import Label from "../common/Label";

export default function CardCatalogo({
  title,
  description,
  image,
  avaliacao,
  toSaibaMais,
  toAbrir,
  className,
}) {
  return (
    <StyledContainerCard className={className}>
      {image ? (
        <StyledCardImage image={image} />
      ) : (
        <StyledDivNoImage>
          <Icon
            icon="MdOutlineImageNotSupported"
            color="white_smoke"
            size="7.5rem"
          />
        </StyledDivNoImage>
      )}
      <StyledCardDescription>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1" style={{ width: "150px" }}>
            <Label
              text={title ? title : "undefined"}
              fontColor="white_smoke"
              fontSize="0.8rem"
              className="truncate"
            />
            <Label
              text={description ? description : "undefined"}
              fontColor="white_smoke"
              fontSize="0.6rem"
              className="truncate whitespace-pre-line"
            />
          </div>
          <Button className="btn-sm">Abrir</Button>
        </div>
        <div
          style={{
            height: "0.05rem",
            width: "100%",
            backgroundColor: "white",
          }}
        />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <Label
              text={avaliacao ? avaliacao : "undefined"}
              fontColor="white_smoke"
              fontSize="0.7rem"
            />
            <Icon icon="BsFillStarFill" color="yellow" />
          </div>
          <div className="flex flex-row">
            <a href="" style={{ fontSize: "0.6rem", color: "white" }}>
              Saiba mais
            </a>
            <Icon icon="FiChevronRight" color="white" />
          </div>
        </div>
      </StyledCardDescription>
    </StyledContainerCard>
  );
}

const StyledDivNoImage = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000007e;
  border-radius: 20px 20px 0px 0px;
`;

const StyledCardImage = styled.div`
  width: 100%;
  height: 65%;
  background-color: #0000007e;
  border-radius: 20px 20px 0px 0px;
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  background-size: cover;
  background-position: center;
`;

const StyledCardDescription = styled.div`
  padding: 0.95rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background-color: #0000007e;
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  height: 35%;
`;

const StyledContainerCard = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 20px;
`;
