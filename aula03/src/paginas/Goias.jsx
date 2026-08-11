import { Link } from "react-router-dom";

export default function Goias()
{
    return(
        <div>
            <h1>Estado de Goiás</h1>

            <div className="conteudo">

                <img src="/GO.png" />

                <p>
                Goiás está localizado na Região Centro-Oeste e tem Goiânia como capital. O estado possui uma economia muito ligada à agricultura e à pecuária, sendo um importante produtor de soja, milho e carne. Goiás também possui muitas áreas de Cerrado e belas paisagens naturais. Entre os locais conhecidos estão as cidades históricas e as regiões de cachoeiras. A cultura goiana também se destaca pela culinária e pelas festas tradicionais. </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}