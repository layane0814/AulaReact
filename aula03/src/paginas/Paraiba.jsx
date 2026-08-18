import { Link } from "react-router-dom";

export default function Paraiba()
{
    return(
        <div>
            <h1>Estado da Paraíba</h1>

            <div className="conteudo">

                <img src="/PB.png" />

                <p>
                A Paraíba tem como capital João Pessoa e possui uma grande diversidade de paisagens. O estado é conhecido por suas praias e cidades históricas. Também se destaca pelas festas juninas, especialmente em Campina Grande, que realiza uma das maiores festas de São João do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}