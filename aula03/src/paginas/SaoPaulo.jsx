import { Link } from "react-router-dom";

export default function SaoPaulo()
{
    return(
        <div>
            <h1>Estado do São Paulo</h1>

            <div className="conteudo">

                <img src="/SP.png" />

                <p>
                O estado de São Paulo está localizado na região 
                Sudeste do Brasil e é o mais populoso e um dos 
                mais desenvolvidos do país. Destaca-se pela forte 
                economia, baseada na indústria, no comércio, nos 
                serviços e na agricultura. Além disso, possui 
                grande diversidade cultural, importantes centros 
                urbanos, universidades renomadas e atrações 
                turísticas que vão desde praias e serras até 
                cidades históricas e modernas. São Paulo exerce 
                um papel fundamental no desenvolvimento econômico, 
                social e cultural do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}