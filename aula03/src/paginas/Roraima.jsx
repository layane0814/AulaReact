import { Link } from "react-router-dom";

export default function Roraima()
{
    return(
        <div>
            <h1>Estado de Roraima</h1>

            <div className="conteudo">

                <img src="/RR.png" />

                <p>
                Roraima é o estado mais ao norte do Brasil e tem Boa Vista como capital. Grande parte de seu território possui áreas de Cerrado e Floresta Amazônica. Sua economia envolve a agricultura, a pecuária, o comércio e os serviços. O estado também possui belas paisagens naturais, como o Monte Roraima, uma das formações rochosas mais conhecidas da região.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}