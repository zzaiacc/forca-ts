import { useState, useCallback, useEffect } from "react";
import filmes from "./filmes.json";
// import animais from "./animais.json"
import HangmanDesenho from "./components/HangmanDesenho";
import Keyboard from "./components/Keyboard";
import HangmanPalavra from "./components/HangmanPalavra";

function App() {
  const [palavraParaAcertar, setPalavraParaAcertar] = useState(() => {
    return filmes[Math.floor(Math.random() * filmes.length)];
  });

  console.log(setPalavraParaAcertar)

  const [chuteLetras, setChuteLetras] = useState<string[]>([]);

  const letrasErradas = chuteLetras.filter(
    (letter) => !palavraParaAcertar.includes(letter)
  );

  const isLoser = letrasErradas.length >= 6;
  const isWinner = palavraParaAcertar
    .split("")
    .every((letter) => chuteLetras.includes(letter));

  const addChuteLetras = useCallback(
    (letter: string) => {
      if (chuteLetras.includes(letter) || isLoser || isWinner)
        return setChuteLetras((letrasAtuais) => [...letrasAtuais, letter]);
    },
    [chuteLetras, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z-]$/)) return;

      e.preventDefault();
      addChuteLetras(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [chuteLetras]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner!! - Atualize a pagina para tentar novamente"}
        {isLoser && "Lixo, vc perdeu"}
      </div>

      <HangmanDesenho numDeChutes={letrasErradas.length} />

      <HangmanPalavra
        reveal={isLoser}
        chuteLetras={chuteLetras}
        palavraParaAcertar={palavraParaAcertar}
      />

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={chuteLetras.filter((letter) =>
            palavraParaAcertar.includes(letter)
          )}
          inactiveLetters={letrasErradas}
          addChuteLetra={addChuteLetras}
        />
      </div>
    </div>
  );
}

export default App;
