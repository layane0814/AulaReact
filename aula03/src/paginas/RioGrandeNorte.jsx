import { Link } from "react-router-dom";

export default function RioGrandeNorte()
{
    return(
        <div>
            <h1>Estado do Rio Grande do Norte</h1>

            <div className="conteudo">

                <img src="/RN.png" />

                <p>
                O Rio Grande do Norte tem como capital Natal e é conhecido principalmente por suas belas praias e paisagens naturais. O estado possui grandes dunas, lagoas e áreas de preservação ambiental. O turismo é uma das atividades mais importantes do estado.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}