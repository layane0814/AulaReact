import { Link } from "react-router-dom";

export default function Acre()
{
    return(
        <div>
            <h1>Estado do Acre</h1>

            <div className="conteudo">

                <img src="/AC.png" />

                <p>
                O Acre está localizado no extremo oeste da Região Norte e tem Rio Branco como capital. O estado possui grande parte de seu território coberto pela Floresta Amazônica. Sua economia envolve atividades como agricultura, pecuária e extrativismo, principalmente de castanha e borracha. O Acre também é conhecido pela história de Chico Mendes, importante defensor da preservação da Amazônia.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}