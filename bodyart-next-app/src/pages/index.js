import styles from "@/styles/Home.module.css";
import HomeCliente from "@/screens/cliente/home";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <HomeCliente />
    </>
  );
}
