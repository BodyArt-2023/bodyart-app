import Section from "@/components/common/Section";
import Feed from "./Catalogo";
import Home from "./Home";

export default function HomeCliente() {
  return (
    <>
      <Section
        id="homeCliente"
        backgroundColor="black_medium"
        backgroundImage="images/varied/acessoriosmaquiagem.jpg"
        boxShadow="inset 0px calc(40vh) calc(8vw) calc(5vw) rgba(0,0,0,0.42)"
      >
        <Home />
      </Section>
      <Section
        id="catalogoCliente"
        background="linear-gradient(100deg, rgba(37,4,38,1) 21%, rgba(83,18,23,1) 52%, rgba(26,20,37,1) 100%)"
        heightAuto
      >
        <Feed />
      </Section>
    </>
  );
}
