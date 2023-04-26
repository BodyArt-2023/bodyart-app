import React from "react";
import styled from "styled-components";
import Icon from "../common/Icon";

export default function FotoDePerfil({
  image,
  size,
  username,
  onClick,
  sizePhoto,
}) {
  return image ? (
    <div
      onClick={onClick}
      className={`hoverFotoDePerfil flex flex-row justify-center items-center gap-2.5`}
    >
      {<span className="text-[1rem]">{username}</span>}
      <LabelFilePhoto image={image} sizePhoto={sizePhoto} onClick={onClick} />
    </div>
  ) : (
    <div
      onClick={onClick}
      className={`hoverFotoDePerfil flex flex-row justify-center items-center bg-gray-400 rounded-full`}
    >
      {username ? <div className="text-[1rem] mr-2.5">{username}</div> : null}
      <LabelFilePhoto sizePhoto={sizePhoto} onClick={onClick}>
        <Icon
          icon="FiUser"
          size={size}
          className={`${onClick ? `cursor-pointer` : null}`}
        />
      </LabelFilePhoto>
    </div>
  );
}

const LabelFilePhoto = styled.label`
  width: ${({ sizePhoto }) => (sizePhoto ? sizePhoto : "3rem")};
  height: ${({ sizePhoto }) => (sizePhoto ? sizePhoto : "3rem")};
  background-color: ${({ theme }) => theme.colors.gray_lightray};
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: ${({ onClick }) => (onClick ? "pointer" : null)};
  :hover {
    /* background-color: ${({ theme }) => theme.colors.white_smoke}; */
    /* filter: drop-shadow(0 10px 9px #ffffff) drop-shadow(0 4px 3px #ffffff); */
    box-shadow: ${({ onClick }) =>
      onClick ? " 0px 0px 15px 0px rgba(255, 255, 255, 1)" : null};
  }
  :active {
    box-shadow: 0px 0px 10px 0px #535aa9;
  }
`;
