import Link from "next/link";
import Image from "next/image";
import React from 'react';



export default function Home() {
  return (
    <div className="main-container">
      <Image
        src="/fotomadrid.jpg"
        alt="Foto do Igor"
        width={200}
        height={200}
        className="profile-image"
      />

      <h1 className="text-3xl font-bold tracking-tight" style={{ marginBottom: "15px" }}>Igor Souza Leal🚀</h1>
      <p style={{ maxWidth: "600px", lineHeight: "1.6", marginBottom: "10px", color : "#ffffffff" }}>
        Sou estudante de Ciência da Computação e tenho curiosidade por tecnologia, empreendimento e inovação. Gosto de desafios, praticar esportes e aprender coisas novas, sempre buscando evoluir nos estudos e na vida pessoal.
      </p>

      <div className="card-grid">
        {/* Cartão de Dados Pessoais */}
        <div className="card">
          <h2 className="card-title">Dados Pessoais</h2>
          <p>Idade: 20 anos</p>
          <p>Telefone: (81) 993660208</p>
          <p>E-mail: igorleal014@gmail.com</p>
          <p>
          <Link href="https://www.linkedin.com/in/igorszleal/" target="_blank" rel="noopener noreferrer" className="aBlue">
          LinkedIn
        </Link>
        </p>
        <p>
        <Link href="https://github.com/igorszleal" target="_blank" rel="noopener noreferrer" className="aBlue">
          GitHub
        </Link>
        </p>
        </div>

        {/* Cartão de Objetivo */}
        <div className="card">
          <h2 className="card-title">Objetivo</h2>
          <p>Busco uma oportunidade de estágio na área da Computação para aplicar e expandir meus conhecimentos acadêmicos, desenvolver habilidades práticas e contribuir de forma eficaz para a equipe e projetos da empresa.</p>
        </div>

        {/* Cartão de Formação */}
        <div className="card">
          <h2 className="card-title">Formação Acadêmica</h2>
          <p>Bacharelado em Ciência da Computação</p>
          <p>Universidade Católica de Pernambuco - UNICAP</p>
          <p>Início do curso: 2023.1</p>
        </div>

        {/* Cartão de Estágio */}
        <div className="card">
          <h2 className="card-title">Estágio</h2>
          <p>ALEPE - Assembleia Legislativa do Estado de Pernambuco</p>
          <p>Iniciei um estágio na área da computação na ALEPE(09/2024)</p>
        </div>

        {/* Cartão de Habilidades */}
        <div className="card">
          <h2 className="card-title">Habilidades</h2>
          <p>Linguagens de Programação: Python, Java, C.</p>
          <p>HTML, CSS</p>
          <p>Microsoft Excel, Google Planilhas</p>
        </div>
        
        {/* Cartão de Idiomas */}
        <div className="card">
          <h2 className="card-title">Idiomas</h2>
          <p>- Português: Nativo</p>
          <p>- Inglês: Intermediário</p>
        </div>
      </div>

      {/* Cartão de Interesses e Hobbies */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '30px' }}>
        <div className="card" style={{ maxWidth: '400px' }}>
          <h2 className="card-title">Interesses e Hobbies</h2>
          <p>Mantenho uma rotina ativa com musculação, pratico futevôlei e tenho experiência em artes marciais.</p>
          <p>Também valorizo viagens e intercâmbios culturais, sempre em busca de novas experiências.</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "15px", marginTop: "40px" }}>
        <Link href="/hangman" className="aBlue">
          Jogo da Forca
        </Link>
      </div>
    </div>
  );
}