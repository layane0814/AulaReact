import { Link } from "react-router-dom";

export default function EspiritoSanto()
{
    return(
        <div>
            <h1>Estado do Espirito Santo </h1>

            <div className="conteudo">

                <img src="/ES.png" />

                <p>
                O estado do Espírito Santo está localizado na 
                região Sudeste do Brasil e é conhecido por seu 
                litoral, suas montanhas e sua diversidade natural. 
                Sua economia se destaca pelos setores de comércio, 
                indústria, agricultura, mineração e atividades portuárias. 
                Além disso, o estado possui rica herança cultural, influenciada 
                por diferentes povos, e oferece atrações turísticas como praias, 
                parques naturais e cidades com forte tradição histórica. O 
                Espírito Santo tem grande importância para a economia e o 
                desenvolvimento da região Sudeste.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
                
            </div>
        </div>
    );
}