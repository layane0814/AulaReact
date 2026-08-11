import { Link } from "react-router-dom";

export default function Amazonas()
{
    return(
        <div>
            <h1>Estado do Amazonas</h1>

            <div className="conteudo">

                <img src="/AM.png" />

                <p>
                O Amazonas é o maior estado brasileiro em extensão territorial e tem Manaus como capital. O estado possui uma enorme área de Floresta Amazônica e uma grande quantidade de rios. Sua economia se destaca pela indústria, principalmente na Zona Franca de Manaus, além do turismo e do extrativismo. Entre os principais pontos turísticos estão o Encontro das Águas e o Teatro Amazonas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}