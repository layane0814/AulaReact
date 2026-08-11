import { Link } from "react-router-dom";

export default function MatoGrosso()
{
    return(
        <div>
            <h1>Estado do Mato Grosso</h1>

            <div className="conteudo">

                <img src="/MT.png" />

                <p>
                Mato Grosso é um dos maiores estados do Brasil e tem Cuiabá como capital. Sua economia é muito importante para o país, principalmente por causa da agricultura e da pecuária. O estado é um grande produtor de soja, milho e algodão. Mato Grosso também possui uma grande diversidade natural, com áreas do Cerrado, da Amazônia e do Pantanal. Por isso, o turismo de natureza e a observação de animais também são importantes para o estado.                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}