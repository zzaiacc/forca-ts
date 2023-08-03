const HEAD = (
    <div style={{ width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "50px", right: "-30px" }} />
)
const BODY = (
    <div style={{ width: "10px", height: "100px", background: "black", position: "absolute", top: "120px", right: 0 }} />
)

const BRACO_DIR = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "150px", right: "-100px", rotate: "-30deg", transformOrigin: "left bottom" }} />
)

const BRACO_ESQ = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "150px", right: "10px", rotate: "30deg", transformOrigin: "right bottom" }} />
)

const PERNA_DIR = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "210px", right: "-90px", rotate: "60deg", transformOrigin: "left bottom" }} />
)

const PERNA_ESQ = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "210px", right: 0, rotate: "-60deg", transformOrigin: "right bottom" }} />
)

const PARTES_DO_CORPO = [HEAD, BODY, BRACO_DIR, BRACO_ESQ, PERNA_DIR, PERNA_ESQ]

type HangmanDesenhoProps = {
    numDeChutes: number
}

const HangmanDesenho = ( {numDeChutes}:HangmanDesenhoProps) => {
    return (
        <div style={{ position: "relative" }}>

            {PARTES_DO_CORPO.slice(0, numDeChutes)}

            <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", right: 0 }} />

            <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />

            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />

            <div style={{ height: "10px", width: "250px", background: "black" }} />

        </div>
    )
}

export default HangmanDesenho