import { Button } from "@/components/common/Buttons";
import Icon from "@/components/common/Icon";
import Label from "@/components/common/Label";
import PopUp from "@/components/varied/PopUp";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import imageNotAvaliable from "../../../../public/images/varied/Image_not_available.png";
import api from "@/api";
import UserContext from "@/context/userContext";
import GaleriaContext from "@/context/galeriaContext";
import { toast } from "react-toastify";
import { Input } from "@/components/common/Inputs";

export default function Galeria({ className, onlyAddTrigger }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [userContext, setUserContext] = useContext(UserContext);
  const [descricaoAddPhoto, setDescricaoAddPhoto] = useState();
  const [galeriaContext, setGaleriaContext] = useContext(GaleriaContext);
  const [addPhotoIsOpen, setAddPhotoIsOpen] = useState(false);
  const [deletePhotoIsOpen, setDeletePhotoIsOpen] = useState(false);
  const [deletePhotoAtual, setDeletePhotoAtual] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("imagem", selectedFile);
    formData.append("idUsuario", userContext.id);
    formData.append("descricao", descricaoAddPhoto);

    api
      .post("/fotos", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((res) => {
        toast.success("Imagem cadastrada!");
        setAddPhotoIsOpen(false);
        let novaImage = res.data;
        setGaleriaContext(
          galeriaContext
            ? [
                ...galeriaContext,
                {
                  id: novaImage.id,
                  path: novaImage.path,
                  descricao: novaImage.descricao,
                },
              ]
            : [
                {
                  id: novaImage.id,
                  path: novaImage.path,
                  descricao: novaImage.descricao,
                },
              ]
        );
        setIsFilePicked(false);
        setDescricaoAddPhoto("");
      })
      .catch((error) => {
        toast.warning("Imagem não cadastrada!");
        console.log(error);
      });
  };

  const verificationImage = () => {
    try {
      if (selectedFile.name === undefined) return;
      return selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/jpg" ||
        selectedFile.type === "image/webp"
        ? URL.createObjectURL(selectedFile)
        : imageNotAvaliable;
    } catch (error) {
      return null;
    }
  };

  return (
    <>
      <div
        className={`w-full h-full px-3 pb-5 ${className} ${
          onlyAddTrigger ? "hidden" : null
        }`}
      >
        <div className="flex flex-row items-center gap-2">
          <Label
            text={"Galeria"}
            fontColor="white"
            fontSize="1.25rem"
            fontWeight="500"
            className="capitalize"
          />{" "}
          <IconAddPhoto
            id="AddNewPhoto"
            icon="FiPlusSquare"
            size="1.5rem"
            onClick={() => setAddPhotoIsOpen(true)}
          />
        </div>
        <Content>
          <div className="flex flex-wrap gap-[5px] p-2">
            {galeriaContext?.map((photo) => (
              <Photo
                key={photo}
                image={photo.path}
                onClick={() => {
                  setDeletePhotoIsOpen(true);
                  setDeletePhotoAtual(photo);
                }}
              />
            ))}
          </div>
          <PopUp
            isOpen={deletePhotoIsOpen}
            onClose={() => setDeletePhotoIsOpen(false)}
            backgroundColor="black_secondary"
          >
            <div className="flex flex-col gap-2 p-2">
              <div className="flex justify-center items-center relative flex-col gap-1">
                <StyledPhoto
                  image={deletePhotoAtual?.path}
                  className="rounded-lg max-h-[500px]"
                />
              </div>
              <Label
                text={`Descrição: ${deletePhotoAtual?.descricao}`}
                fontColor="light_blue"
                fontSize="0.9rem"
                fontWeight="400"
                className="mb-2"
              />

              <div className="flex flex-row gap-2">
                <Button
                  themeButton="cancel"
                  className="btn-sm w-[100%] flex flex-row"
                  onClick={() => {
                    api
                      .delete(`/fotos/${deletePhotoAtual.id}`)
                      .then((res) => {
                        toast.success("Foto deletada com sucesso!");
                        setGaleriaContext((state) => {
                          return state.filter(
                            (photo) => photo?.id !== deletePhotoAtual?.id
                          );
                        });
                        setDeletePhotoIsOpen(false);
                      })
                      .catch((err) => {
                        toast.warning("Ocorrou algum erro!");
                        console.log(err);
                      });
                  }}
                >
                  <StyledTrashIcon
                    icon="FiTrash2"
                    size="1.1rem"
                    color="white"
                    className="w-full"
                  />
                  Remover
                </Button>
              </div>
            </div>
          </PopUp>
        </Content>
      </div>
      <>
        <input
          className="hidden"
          type="file"
          id="importfile"
          name="file"
          onChange={changeHandler}
        />

        <PopUp
          isOpen={addPhotoIsOpen}
          // isOpen={addPhotoIsOpen || addNewPhotoOpen ? true : false}
          trigger={<div onClick={() => setAddPhotoIsOpen(true)}>{onlyAddTrigger}</div>}
          backgroundColor="black_secondary"
          onClose={() => {
            setAddPhotoIsOpen(false);
            setIsFilePicked(false);
            setDescricaoAddPhoto("");
          }}
        >
          <div className="flex flex-col gap-2.5 p-2">
            {isFilePicked ? (
              <div className="flex flex-col justify-center items-center relative gap-2">
                <Image
                  height={300}
                  width={300}
                  src={verificationImage()}
                  alt=""
                  className="rounded-lg max-h-[500px]"
                />
                <div className="w-full">
                  <Label
                    text="Descrição"
                    fontColor="light_blue"
                    fontSize="0.85rem"
                  />
                  <StyledInput
                    onChange={(ev) => {
                      setDescricaoAddPhoto(ev.target.value);
                    }}
                  />
                </div>
                <StyledTrashIcon
                  icon="FiTrash2"
                  size="2rem"
                  className="absolute right-[-10px] top-0"
                  onClick={() => {
                    setIsFilePicked(false);
                    setDescricaoAddPhoto("");
                  }}
                />
              </div>
            ) : (
              <StyledAdd
                onClick={() => {
                  let file = document.getElementById("importfile");
                  file.click();
                }}
              >
                +
              </StyledAdd>
            )}

            <div className="flex flex-row gap-2">
              <Button
                themeButton="confirm"
                className="btn-sm w-[50%]"
                disabled={
                  !isFilePicked || verificationImage() === imageNotAvaliable
                }
                onClick={() => {
                  handleSubmission();
                }}
              >
                Enviar
              </Button>
              <Button
                themeButton="cancel"
                className="btn-sm w-[50%]"
                onClick={() => {
                  setAddPhotoIsOpen(false);
                  setIsFilePicked(false);
                  setDescricaoAddPhoto("");
                }}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </PopUp>
      </>
    </>
  );
}

const StyledInput = styled.input.attrs({ className: "form-control" })`
  font-size: 0.75rem;
  transition: 0.2s;
  background-color: #00000000;
  color: ${({ theme }) => theme.colors.light_blue};
  border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
  :hover {
    background-color: #004c5824;
    color: ${({ theme }) => theme.colors.light_blue};
    border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
  }
  :focus {
    background-color: #004c5814;
    border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
    color: ${({ theme }) => theme.colors.light_blue};
    box-shadow: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.light_blue};
  }
  box-shadow: none;
`;

const StyledTrashIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.lava};
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.6;
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

const StyledAdd = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
  color: ${({ theme }) => theme.colors.lapis_lazuli};
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.lima};
    color: ${({ theme }) => theme.colors.lima};
  }
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
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  :active {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
  border-radius: 5px;
  overflow: auto;
`;

const IconAddPhoto = styled(Icon)`
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
