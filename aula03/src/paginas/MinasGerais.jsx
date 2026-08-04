import { Link } from "react-router-dom";

export default function MinasGerais()
{
    return(
        <div>
            <h1>Estado de Minas Gerais </h1>

            <div className="conteudo">

                <img src="/MG.png" />

                <p>
                O estado de Minas Gerais está localizado na 
                região Sudeste do Brasil e é conhecido por 
                sua rica história, cultura e tradições. Possui 
                uma economia diversificada, com destaque para a 
                mineração, a agropecuária, a indústria e os serviços. 
                Além disso, Minas Gerais é famoso por suas cidades 
                históricas, sua culinária típica e seu patrimônio cultural. 
                Com paisagens que incluem serras, cachoeiras e áreas de 
                preservação, o estado desempenha um papel importante no 
                desenvolvimento econômico e cultural do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
                
            </div>
        </div>
    );
}