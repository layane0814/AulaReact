import { Link } from "react-router-dom";

export default function DistritoFederal()
{
    return(
        <div>
            <h1>Estado do Distrito Federal</h1>

            <div className="conteudo">

                <img src="/DF.png" />

                <p>
                O Distrito Federal está localizado na Região Centro-Oeste e tem Brasília como sua principal cidade. Brasília é a capital do Brasil e é onde estão localizados os principais órgãos do governo federal, como o Congresso Nacional, o Palácio do Planalto e o Supremo Tribunal Federal. A cidade foi planejada e inaugurada em 1960. O Distrito Federal possui grande importância política e administrativa para o país e também apresenta áreas de Cerrado e diversos espaços culturais e turísticos. </p> 
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}