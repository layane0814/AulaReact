import { Link } from "react-router-dom";

export default function Sergipe()
{
    return(
        <div>
            <h1>Estado de Sergipe</h1>

            <div className="conteudo">

                <img src="/SE.png" />

                <p>
                Sergipe é o menor estado brasileiro em extensão territorial e sua capital é Aracaju. O estado possui belas praias, rios e áreas naturais. Sua cultura é marcada por festas juninas, músicas, danças e comidas típicas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}