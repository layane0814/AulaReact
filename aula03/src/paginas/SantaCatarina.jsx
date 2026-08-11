import { Link } from "react-router-dom";

export default function SantaCatarina()
{
    return(
        <div>
            <h1>Estado de Santa Catarina</h1>

            <div className="conteudo">

                <img src="/SC.png" />

                <p>
                    Santa Catarina é um estado da Região Sul e tem Florianópolis como capital. O estado é conhecido por suas belas praias, serras e cidades turísticas. Sua economia é diversificada, destacando-se a indústria, a agricultura, a pesca e o turismo. Santa Catarina recebeu forte influência de imigrantes alemães, italianos e outros povos europeus, o que pode ser percebido na arquitetura, na culinária e nas festas tradicionais. O estado também é conhecido por suas paisagens naturais.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}