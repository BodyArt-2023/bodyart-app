import React from "react";
import styled from "styled-components";
import { Button } from "../common/Buttons";
import Icon from "../common/Icon";
import Label from "../common/Label";

export default function CardPortifolio({
  title,
  description,
  image,
  className,
  onDelete,
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
              fontWeight="500"
            />
            <Label
              text={description ? description : "undefined"}
              fontColor="white_smoke"
              fontSize="0.6rem"
              className="truncate whitespace-pre-line"
            />
          </div>
        </div>
      </StyledCardDescription>
      {onDelete ? (
        <StyledIconDelete icon="FiTrash2" size="2.5rem" onClick={onDelete} />
      ) : null}
    </StyledContainerCard>
  );
}

const StyledIconDelete = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff30;
  padding: 8px;
  border-radius: 100%;
  cursor: pointer;
  color: #ffffffdb;
  transition: 0.2s;
  :hover {
    color: #ffffff;
    background-color: #ffffff60;
  }
`;

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
  height: 70%;
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
  height: 30%;
`;

const StyledContainerCard = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  border-radius: 20px;
`;
