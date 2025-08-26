import Link from "next/link";
import Image from "next/image"; 

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
      minHeight: "100vh", 
      padding: "20px",
      fontFamily: "Arial",
      textAlign: "center",}}>
      

      
      <Image
        src="/fotomadrid.jpg" 
        alt="Foto do Igor"
        width={400} // largura
        height={200} // altura
        style={{ borderRadius: "5%", marginBottom: "20px" }} //deixa redonda
      />

      <p style={{ maxWidth: "600px", lineHeight: "1.6", marginBottom: "20px" }}>
        Sou estudante de Ciência da Computação e tenho curiosidade por
        tecnologia e inovação. Gosto de desafios, praticar esportes e aprender coisas novas,
        sempre buscando evoluir nos estudos e na vida pessoal.
      </p>

      <h1>Igor Souza Leal🚀</h1>

      
    </div>
  );
}
