import {Link} from "react-router-dom";

export default function Parana()
{

    return(
        <div>

            <h1>Estado do Paraná</h1>

            <div className="conteudo">

                <img src="/PR.png"/>

                <p>
                O Paraná é um estado da Região Sul do Brasil, e sua capital é Curitiba. O estado possui 399 municípios e se destaca pela agricultura, indústria e comércio. Entre seus principais produtos estão soja, milho, trigo e café. O Paraná também é conhecido pelas Cataratas do Iguaçu, uma das suas principais atrações turísticas. Sua cultura recebeu influência de vários povos, tornando o estado rico em tradições e costumes.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
                
            </div>
        </div>
    )
}