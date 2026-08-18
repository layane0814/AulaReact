import { Link } from "react-router-dom";

export default function Ceara()
{
    return(
        <div>
            <h1>Estado do Ceará</h1>

            <div className="conteudo">

                <img src="/CE.png" />

                <p>
                O Ceará tem como capital Fortaleza e é um dos estados mais conhecidos pelo turismo no Nordeste. Suas praias, dunas e falésias atraem muitos visitantes. O estado também possui uma cultura rica, com destaque para o forró, o artesanato e as festas populares.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}