const words = [
  { word: "variavel", clue: "Armazena um valor na memória" },
  { word: "função", clue: "Bloco de código que executa uma tarefa" },
  { word: "array", clue: "Estrutura que guarda vários valores" },
  { word: "objeto", clue: "Estrutura com chave e valor" },
  { word: "loop", clue: "Estrutura de repetição" },
  { word: "string", clue: "Sequência de caracteres" },
  { word: "boolean", clue: "Tipo de dado verdadeiro ou falso" },
  { word: "classe", clue: "Modelo para criar objetos" },
  { word: "algoritmo", clue: "Sequência de passos para resolver um problema" },
  { word: "compilador", clue: "Traduz código para linguagem de máquina" },
  { word: "framework", clue: "Conjunto de ferramentas para desenvolvimento" },
  { word: "pilha", clue: "Estrutura de dados LIFO" },
  { word: "fila", clue: "Estrutura de dados FIFO" },
  { word: "git", clue: "Sistema de controle de versão" },
  { word: "api", clue: "Interface para comunicação entre sistemas" },
  { word: "json", clue: "Formato de dados baseado em texto" },
  { word: "html", clue: "Linguagem de marcação para web" },
  { word: "css", clue: "Define o estilo de páginas web" },
  { word: "recursão", clue: "Função que chama a si mesma para resolver um problema" },
  { word: "protocolo", clue: "Conjunto de regras para comunicação de dados" },
  { word: "servidor", clue: "Computador que fornece recursos a outros na rede" },
  { word: "cliente", clue: "Computador que acessa recursos em um servidor" },
  { word: "interface", clue: "Permite a interação entre o usuário e um sistema" },
  { word: "terminal", clue: "Linha de comando para executar programas" },
  { word: "debugger", clue: "Ferramenta para encontrar e corrigir erros no código" },
  { word: "commit", clue: "Salvar alterações em um repositório Git" },
  { word: "branch", clue: "Linha de desenvolvimento independente no Git" },
  { word: "sql", clue: "Linguagem usada para gerenciar bancos de dados" },
  { word: "docker", clue: "Plataforma para criar e gerenciar containers" },
  { word: "python", clue: "Linguagem de programação popular e versátil" },
];

export function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}