import { Link } from "react-router-dom";

export default function Piaui()
{
    return(
        <div>
            <h1>Estado do Piauí</h1>

            <div className="conteudo">

                <img src="/PI.png" />

                <p>
                O Piauí fica na parte oeste do Nordeste e tem como capital Teresina, a única capital nordestina localizada no interior. O estado é conhecido pela Serra da Capivara, um importante parque arqueológico com pinturas rupestres muito antigas. O Piauí também possui belas paisagens naturais e uma culinária própria.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}