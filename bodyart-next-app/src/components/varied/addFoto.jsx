import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import PopUp from "./PopUp";
import { Button } from "../common/Buttons";
import Label from "../common/Label";
import styled from "styled-components";
import Icon from "../common/Icon";
import Image from "next/image";
import imageNotAvaliable from "../../../public/images/varied/Image_not_available.png";
import Color from "color";
import api from "@/api";
import { toast } from "react-toastify";

export default function AddFoto({
  trigger,
  context,
  setContext,
  portifolio,
  fotos,
  publicacoes,
}) {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [userContext, setUserContext] = useContext(UserContext);
  const [descricaoAddPhoto, setDescricaoAddPhoto] = useState();
  const [addPhotoIsOpen, setAddPhotoIsOpen] = useState(false);
  const [deletePhotoIsOpen, setDeletePhotoIsOpen] = useState(false);
  const [deletePhotoAtual, setDeletePhotoAtual] = useState();
  const [fotoSelectedPerfil, setFotoSelectedPerfil] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("imagem", selectedFile);
    formData.append(
      `${
        portifolio
          ? "idProfissional"
          : publicacoes
          ? "idProfissional"
          : fotos
          ? "idUsuario"
          : null
      }`,
      userContext.id
    );
    formData.append("descricao", descricaoAddPhoto);

    api
      .post(
        `/${
          portifolio
            ? "portifolios"
            : publicacoes
            ? "publicacoes"
            : fotos
            ? "fotos"
            : null
        }`,
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        }
      )
      .then((res) => {
        toast.success("Imagem adicionada!");
        // setAddPhotoIsOpen(false);
        let novaImage = res.data;
        setContext(
          context
            ? [
                ...context,
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
    <PopUp
      isOpen={addPhotoIsOpen}
      backgroundColor="black_secondary"
      trigger={<div onClick={() => setAddPhotoIsOpen(true)}>{trigger}</div>}
      onClose={() => {
        setAddPhotoIsOpen(false);
        setIsFilePicked(false);
        setDescricaoAddPhoto("");
      }}
      width="420px"
      className="py-3 px-3"
    >
      <input
        className="hidden"
        type="file"
        id="importfile"
        name="file"
        onChange={changeHandler}
      />
      {isFilePicked ? (
        <div className="flex flex-col justify-center items-center relative gap-2">
          <Image
            height={300}
            width={300}
            src={verificationImage()}
            alt=""
            className="rounded-lg max-h-[500px] mb-2 mt-4"
          />
          <div className="w-[90%] mb-1">
            <Label text="Descrição" fontColor="light_blue" fontSize="0.85rem" />
            <StyledInput
              onChange={(ev) => {
                setDescricaoAddPhoto(ev.target.value);
              }}
            />
          </div>
          <StyledTrashIcon
            icon="FiTrash2"
            size="2.5rem"
            className="absolute right-[8px] top-2"
            onClick={() => {
              setIsFilePicked(false);
              setSelectedFile(null);
              setDescricaoAddPhoto("");
            }}
          />
          <div className="flex flex-row gap-2 w-full">
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
                setIsFilePicked(false);
                setSelectedFile(null);
                setDescricaoAddPhoto("");
              }}
            >
              Cancelar
            </Button>
          </div>
        </div>
      ) : deletePhotoIsOpen ? (
        <div className="flex flex-col gap-2 p-2 relative">
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
              className="btn-sm w-[100%]"
              onClick={() => {
                api
                  .delete(
                    `/${
                      portifolio
                        ? `portifolios/${userContext?.id}/${deletePhotoAtual.id}`
                        : publicacoes
                        ? `publicacoes/${userContext?.id}/${deletePhotoAtual.id}`
                        : fotos
                        ? `fotos/${deletePhotoAtual.id}`
                        : null
                    }`
                  )
                  .then((res) => {
                    toast.success("Imagem deletada com sucesso!");
                    setContext((state) => {
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
              <div className="flex flex-row items-center justify-center gap-2">
                <Icon icon="FiTrash2" size="1.1rem" color="white" />
                <span>Remover</span>
              </div>
            </Button>
          </div>
          <StyledTrashIcon
            icon="FiChevronLeft"
            size="2.5rem"
            className="absolute right-[8px] top-2"
            onClick={() => setDeletePhotoIsOpen(false)}
          />
        </div>
      ) : (
        <>
          <Label text="Gerenciador de fotos:" fontColor="light_blue" />
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
            ) : (
              <>
                <Photo
                  className="flex items-center justify-center"
                  onClick={() => {
                    let file = document.getElementById("importfile");
                    file.click();
                  }}
                >
                  +
                </Photo>
                {context?.map((photo) => (
                  <div key={photo} className="relative">
                    <Photo
                      key={photo}
                      image={photo.path}
                      onClick={() => {
                        setFotoSelectedPerfil(photo);
                      }}
                    />
                    <StyledTrashIconTwo
                      icon="FiTrash2"
                      size="1.5rem"
                      className="absolute -right-[2px] -top-0.5"
                      onClick={() => {
                        setDeletePhotoIsOpen(true);
                        setDeletePhotoAtual(photo);
                      }}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="flex flex-row gap-2">
            <Button
              themeButton="confirm"
              className="btn-sm w-[50%]"
              disabled={!fotoSelectedPerfil}
              onClick={() => {
                // api
                //   .patch(
                //     `/usuarios/update-foto-perfil/${userContext.id}/${fotoSelectedPerfil.id}`
                //   )
                //   .then((res) => {
                //     toast.success("Foto atualizada com Sucesso!");
                //     setUserContext({
                //       ...userContext,
                //       fotoPerfilPath: fotoSelectedPerfil.path,
                //     });
                //     setFotoSelectedPerfil(null);
                //     setAddFotoIsOpen(false);
                //     console.log(res.data);
                //   })
                //   .catch((err) => {
                //     toast.warning("Ocorreu algum erro!");
                //     console.log(err);
                //   });
              }}
            >
              Concluir
            </Button>
            <Button
              themeButton="cancel"
              className="btn-sm w-[50%]"
              onClick={() => {
                setFotoSelectedPerfil(null);
                setAddPhotoIsOpen(false);
              }}
            >
              Cancelar
            </Button>
          </div>
        </>
      )}
    </PopUp>
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
  background-color: #ffffff55;
  padding: 6px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: ${({ theme }) => Color(theme.colors.lava).lightness(50)};
    background-color: #ffffff80;
  }
`;

const StyledTrashIconTwo = styled(Icon)`
  color: ${({ theme }) => theme.colors.lava};
  background-color: #ffffffb7;
  border: 0.5px solid ${({ theme }) => theme.colors.lapis_lazuli};
  padding: 2px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: ${({ theme }) => Color(theme.colors.lava).lightness(50)};
    background-color: #ffffff;
  }
`;

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
  font-size: 1.25rem;
  cursor: pointer;
  :hover {
    opacity: 0.77;
  }
  :active {
    opacity: 0.9;
  }
`;
