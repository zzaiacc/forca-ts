type HangmanPalavraProps = {
    chuteLetras: string[]
    palavraParaAcertar: string
    reveal?: boolean
}

const HangmanPalavra = ({chuteLetras, palavraParaAcertar, reveal = false}:HangmanPalavraProps) => {

    
    return (
        <div style={{
            display: "flex", gap: ".55rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace"
        }}>

            {palavraParaAcertar.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span
                        style={{ visibility: chuteLetras.includes(letter) || reveal 
                            ? "visible" 
                            : "hidden",
                            color: !chuteLetras.includes(letter) && reveal ? "red" : "black"
                        }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanPalavra