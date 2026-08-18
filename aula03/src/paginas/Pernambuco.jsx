import { Link } from "react-router-dom";

export default function Pernambuco()
{
    return(
        <div>
            <h1>Estado de Pernambuco</h1>

            <div className="conteudo">

                <img src="/PE.png" />

                <p>
                Pernambuco tem como capital Recife e é um dos estados de maior destaque cultural do Nordeste. É conhecido pelo frevo, maracatu, forró e Carnaval. Também possui cidades históricas, como Olinda, e praias famosas, como as de Porto de Galinhas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}