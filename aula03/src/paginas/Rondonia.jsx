import { Link } from "react-router-dom";

export default function Rondonia()
{
    return(
        <div>
            <h1>Estado de Rondônia</h1>

            <div className="conteudo">

                <img src="/RO.png" />

                <p>
                Rondônia está localizada na Região Norte e tem Porto Velho como capital. O estado possui áreas de Floresta Amazônica e diversos rios importantes. Sua economia é baseada principalmente na agricultura, pecuária, comércio e atividades de mineração. Rondônia também possui uma cultura formada pela mistura de diferentes povos que chegaram à região ao longo de sua história.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}