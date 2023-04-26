import { Button } from "@/components/common/Buttons";
import Label from "@/components/common/Label";
import CardPortifolio from "@/components/varied/CardPortifolio";
import FotoDePerfil from "@/components/varied/FotoDePerfil";
import AddFoto from "@/components/varied/addFoto";
import GaleriaContext from "@/context/galeriaContext";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";

export default function Portifolio() {
  const [userContext, setUserContext] = useContext(UserContext);
  const [galeriaContext, setGaleriaContext] = useContext(GaleriaContext);
  return (
    <div className="w-full">
      <div className="flex flex-row gap-2 items-center">
        <FotoDePerfil
          sizePhoto="7rem"
          size="2rem"
          image={userContext?.fotoPerfilPath}
        />
        <div className="flex flex-col gap-1">
          <Label
            text="Portifólio"
            fontColor="light_blue"
            fontSize="1.5rem"
            fontWeight="500"
          />
          <Label
            text={userContext?.nome}
            fontColor="white"
            line
            lineColor="lapis_lazuli"
            lineSpace="-2px"
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#23699D]" />
      <div>
        {/* <AddFoto
          trigger={<Button>oid</Button>}
          context={galeriaContext}
          setContext={setGaleriaContext}
        /> */}
        <AddFoto
          trigger={<Button>oi</Button>}
          context={galeriaContext}
          setContext={setGaleriaContext}
          portifolio
        />
        <CardPortifolio
          image="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/599/573/products/d4491e8f-a7b7-463e-bee7-532695170f4a-6901121d9e241e164c16314356400377-640-0.png"
          title="Bumbum"
          description="O bumbum mais lindo do mundo é o do meu Amor"
          onDelete={() => alert("delete feito")}
        />
      </div>
    </div>
  );
}
