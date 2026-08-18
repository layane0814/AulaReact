import { Link } from "react-router-dom";

export default function Alagoas()
{
    return(
        <div>
            <h1>Estado de Alagoas</h1>

            <div className="conteudo">

                <img src="/AL.png" />

                <p>
                Alagoas tem como capital Maceió e é famoso por suas belas praias de águas claras e seus coqueirais. O estado possui lugares turísticos muito procurados, como Maragogi, conhecida por suas piscinas naturais. Alagoas também possui uma cultura rica e uma culinária muito apreciada.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}