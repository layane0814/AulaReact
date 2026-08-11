import { Link } from "react-router-dom";

export default function Para()
{
    return(
        <div>
            <h1>Estado do Pará</h1>

            <div className="conteudo">

                <img src="/PA.png" />

                <p>
                O Pará é um dos maiores estados da Região Norte e tem Belém como capital. O estado possui uma grande diversidade natural, com extensas áreas da Floresta Amazônica e muitos rios. Sua economia se destaca pela mineração, agricultura, pecuária e produção de alimentos. O Pará também possui uma cultura muito rica, com destaque para o Círio de Nazaré e pratos típicos como o açaí, o tacacá e o pato no tucupi.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}