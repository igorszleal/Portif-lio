"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


import { getWord } from "./words.js";
import styles from "./page.module.css";

export default function HangmanPage() {
  const [hangmanState, setHangmanState] = useState(1);
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [currentWord, setCurrentWord] = useState({});
  const [message, setMessage] = useState(null);

  useEffect(() => {
    initGame();
  }, []);

  function initGame() {
    setHangmanState(1);
    setGuessedLetters(new Set());
    const newWord = getWord();
    setCurrentWord(newWord);
    setMessage(null);
  }

  const wordLetters = currentWord.word?.toUpperCase() || "";
  const displayedWord = wordLetters.split("").map(letter => {
    const normalizedLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return (guessedLetters.has(normalizedLetter) || guessedLetters.has(letter)) ? letter : "_";
  }).join("");

  function handleLetterGuess(letter) {
    const normalizedLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (guessedLetters.has(normalizedLetter)) return;

    const newGuessedLetters = new Set(guessedLetters).add(normalizedLetter);
    setGuessedLetters(newGuessedLetters);

    if (!wordLetters.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedLetter)) {
      setHangmanState(prev => prev + 1);
    }
  }

  useEffect(() => {
    if (hangmanState === 7) {
      setMessage(<div>
      <p>Perdeu :("</p>
      <p style={{ fontSize: "14px" }}>A palavra era:</p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        {currentWord.word.toUpperCase()}
      </p>
    </div>);
    }
    if (wordLetters && displayedWord === wordLetters) {
      setMessage(`Ganhou!!!
      A palavra é: ${currentWord.word.toUpperCase()}`);
    }
  }, [hangmanState, displayedWord, wordLetters]);

  return (
    <div className={styles.container}>
      {message && (
        <div className={styles.messageContainer}>
          <div className={styles.messageBox}>
            <div className={styles.messageText}>{message}</div> 
            <button onClick={initGame} className={styles.newGameButton}>Novo Jogo</button>
          </div>
        </div>
      )}

      <header>
        <h1>Jogo da Forca</h1>
      </header>
      <button onClick={initGame} className={styles.newGameButton}>Novo Jogo</button>
      <main className={styles.mainContent}>
        <article>
          <article className={styles.hangmanDrawing}>
          {/* Partes da forca */}
          <div className={`${styles.gallowsPart} ${styles.gallowsBase} ${hangmanState >= 1 ? styles.visible : ''}`}></div>
          <div className={`${styles.gallowsPart} ${styles.gallowsPole} ${hangmanState >= 1 ? styles.visible : ''}`}></div>
          <div className={`${styles.gallowsPart} ${styles.gallowsBeam} ${hangmanState >= 1 ? styles.visible : ''}`}></div>
          
          {/* Partes do boneco */}
          <div className={`${styles.hangmanBodyPart} ${styles.head} ${hangmanState >= 2 ? styles.visible : ''}`}></div> 
          <div className={`${styles.hangmanBodyPart} ${styles.body} ${hangmanState >= 3 ? styles.visible : ''}`}></div> 
          <div className={`${styles.hangmanBodyPart} ${styles.armRight} ${hangmanState >= 4 ? styles.visible : ''}`}></div> 
          <div className={`${styles.hangmanBodyPart} ${styles.armLeft} ${hangmanState >= 5 ? styles.visible : ''}`}></div> 
          <div className={`${styles.hangmanBodyPart} ${styles.legRight} ${hangmanState >= 6 ? styles.visible : ''}`}></div> 
          <div className={`${styles.hangmanBodyPart} ${styles.legLeft} ${hangmanState >= 7 ? styles.visible : ''}`}></div> 
        </article>
        </article>
        <article className={styles.gameSection}>
          <div className={styles.triesCounter}>
            Tentativas restantes: {7 - hangmanState}
          </div>
          <div className={styles.guessWord}>
            {displayedWord && displayedWord.split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
          <div className={styles.clue}>Dica: {currentWord.clue}</div>
          <div className={styles.buttons}>
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <button
                key={letter}
                onClick={() => handleLetterGuess(letter)}
                disabled={guessedLetters.has(letter.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className={styles.letterButton}
              >
                {letter}
              </button>
            ))}
          </div>
        </article>
      </main>
      
      {guessedLetters.size > 0 ? (
        <div className={styles.selectedLettersContainer}>
          <p>Letras selecionadas: <br /> {Array.from(guessedLetters).sort().join(", ")}</p>
        </div>
      ) : (
        <div className={styles.placeholder}></div>
      )}

      <div className={styles.fixedLinkContainer}>
        <Link href="/" className="aBlue">Voltar para a Home</Link>
      </div>
    </div>
  );
}