import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio1()
{
    const[numero1, setNumero1] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {

        let potencia = Number(numero1) ** Number(numero1);
        let cubo = Number(numero1) * Number(numero1) * Number(numero1);

        setResultado(
            <div>
                <p>O quadrado do número {numero1}<sup>2</sup>  = {potencia}</p>
                <p>O cubo de {numero1}<sup>3</sup> = {cubo}</p>
            </div>
        );
    }
    return (

        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o número 1 <br />
                        <input type="text"
                            value={numero1}
                            onChange={ (e) => setNumero1(e.target.value)} />
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