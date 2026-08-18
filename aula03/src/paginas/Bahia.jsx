import { Link } from "react-router-dom";

export default function Bahia()
{
    return(
        <div>
            <h1>Estado da Bahia</h1>

            <div className="conteudo">

                <img src="/BA.png" />

                <p>
                A Bahia é o maior estado da Região Nordeste em extensão territorial e tem como capital Salvador. É conhecida por sua grande diversidade cultural e histórica. Destaca-se pelo Carnaval, música, dança, culinária e festas tradicionais. Pratos como acarajé, vatapá e moqueca são muito conhecidos em todo o Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}