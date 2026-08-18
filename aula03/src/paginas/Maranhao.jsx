import { Link } from "react-router-dom";

export default function Maranhao()
{
    return(
        <div>
            <h1>Estado do Maranhão</h1>

            <div className="conteudo">

                <img src="/MA.png" />

                <p>
                O Maranhão é um estado localizado no oeste da Região Nordeste. Sua capital é São Luís, uma cidade conhecida por seu centro histórico e pela arquitetura colonial. O estado também é famoso pelos Lençóis Maranhenses, uma paisagem formada por grandes dunas e lagoas de água doce. Na cultura maranhense, destacam-se o bumba meu boi, as festas populares, as danças e a culinária típica.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}