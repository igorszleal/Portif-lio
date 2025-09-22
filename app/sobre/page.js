import Link from "next/link";
import Image from "next/image";

export default function Sobre() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
      minHeight: "100vh", 
      padding: "20px",
      fontFamily: "Arial",
      textAlign: "center",
    }}>
      
      <Image
        src="/totteham.jpg" 
        alt="Outra foto"
        width={400}
        height={200}
        style={{ borderRadius: "5%", marginBottom: "20px" }}
      />

      <h1 className="text-3xl font-bold tracking-tight" style={{ marginBottom: "15px" }}>
        Sobre Mim
      </h1>

      <p style={{ maxWidth: "600px", lineHeight: "1.6", marginBottom: "10px" }}>
        Aqui você pode contar um pouco mais sobre sua trajetória, hobbies e planos futuros. 
        Essa é a página "Sobre".
      </p>

      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <Link href="/" className="aBlue">Voltar para Home</Link>
      </div>
    </div>
  );
}
