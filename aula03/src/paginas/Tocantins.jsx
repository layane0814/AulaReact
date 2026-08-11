import { Link } from "react-router-dom";

export default function Tocantins()
{
    return(
        <div>
            <h1>Estado de Tocantins</h1>

            <div className="conteudo">

                <img src="/TO.png" />

                <p>
                Tocantins é o estado mais novo do Brasil e tem Palmas como capital. O estado possui áreas de Cerrado e também de transição com a Amazônia. Sua economia se destaca pela agricultura e pecuária, especialmente pela produção de soja e criação de gado. Tocantins também possui importantes atrações naturais, como o Jalapão, conhecido por suas dunas, cachoeiras, rios e paisagens.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}