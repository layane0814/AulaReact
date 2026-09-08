import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio2()
{

    const[fah, setfah] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {

        let celsius = ((fah - 32) * 5)/9;

        setResultado(
            <div>
                <p>A temperatura em Celsius é:  {celsius}°C</p>
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>
        
                    <p>
                        Digite a temperatura em Fahrenheit <br />
                        <input type="text"
                            value={fah}
                            onChange={ (e) => setfah(e.target.value)} />
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