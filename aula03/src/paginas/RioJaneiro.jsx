import { Link } from "react-router-dom";

export default function RioJaneiro()
{
    return(
        <div>
            <h1>Estado do Rio de Janeiro </h1>

            <div className="conteudo">

                <img src="/RJ.png" />

                <p>
                O estado do Rio de Janeiro está localizado 
                na região Sudeste do Brasil e é conhecido 
                por suas belas paisagens naturais, que combinam 
                praias, montanhas e florestas. Sua economia é 
                impulsionada por setores como turismo, petróleo, 
                indústria e serviços. Além disso, o estado possui 
                grande importância histórica e cultural, sendo 
                reconhecido por manifestações como o Carnaval, 
                o samba e diversos patrimônios culturais. O Rio 
                de Janeiro também abriga importantes centros urbanos 
                e atrações turísticas de destaque nacional e internacional.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}