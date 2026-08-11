import { Link } from "react-router-dom";

export default function RioGrandeSul()
{
    return(
        <div>
            <h1>Estado do Rio Grande do Sul</h1>

            <div className="conteudo">

                <img src="/RS.png" />

                <p>
                O Rio Grande do Sul é o estado mais ao sul do Brasil e tem Porto Alegre como capital. Sua economia é baseada principalmente na agricultura, pecuária, indústria e comércio. O estado produz arroz, soja, trigo e uva, além de possuir uma forte criação de gado. A cultura gaúcha é uma das suas principais características, com tradições como o chimarrão, o churrasco e as roupas típicas. O estado também possui belas paisagens, especialmente na Serra Gaúcha.                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}