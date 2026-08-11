import { Link } from "react-router-dom";

export default function MatoGrossoSul()
{
    return(
        <div>
            <h1>Estado do Mato Grosso do Sul</h1>

            <div className="conteudo">

                <img src="/MS.png" />

                <p>
                Mato Grosso do Sul tem Campo Grande como capital e é conhecido principalmente por suas atividades agropecuárias. O estado produz soja, milho e outros produtos agrícolas, além de possuir uma grande criação de gado. Uma de suas maiores riquezas naturais é o Pantanal, que possui uma enorme variedade de animais e plantas. O turismo também é importante, principalmente em lugares como Bonito, famoso por seus rios de águas cristalinas, cavernas e belezas naturais. </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}