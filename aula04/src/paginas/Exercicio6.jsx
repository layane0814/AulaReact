import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio6()
{

    const[quant, setquant] = useState();
    const[preco, setpreco] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {

        let subt = quant * preco;
        let des = subt * 0.1;
        let valf = subt - des;

        setResultado(
            <div>
                <p>O SubTotal é:  {subt}</p>
                <p>O valor do desconto é:  {des}</p>
                <p>O valor final a pagar é:  {valf}</p>
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 6</h1>

            <div className="conteudo">

                <form>
        
                    <p>
                        Digite a quantidade do produto<br />
                        <input type="text"
                            value={quant}
                            onChange={ (e) => setquant(e.target.value)} />
                    </p>

                    <p>
                        Digite o valor do produto <br />
                        <input type="text"
                            value={preco}
                            onChange={ (e) => setpreco(e.target.value)} />
                    </p>

                    <p>
                        <input type="button"
                           value="Calcular"
                            onClick={calcular} />
                    </p>

                    <p>
                        {resultado}
                    </p>

                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}