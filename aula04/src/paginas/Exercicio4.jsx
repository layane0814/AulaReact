import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio4()
{

    const[base, setbase] = useState();
    const[altura, setaltura] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {

        let area = ((base*altura)/2);

        setResultado(
            <div>
                <p>O valor da Área do trianulo é:  {area}</p>
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 4</h1>

            <div className="conteudo">

                <form>
        
                    <p>
                        Digite o valor da base<br />
                        <input type="text"
                            value={base}
                            onChange={ (e) => setbase(e.target.value)} />
                    </p>

                    <p>
                        Digite o valor da altura <br />
                        <input type="text"
                            value={altura}
                            onChange={ (e) => setaltura(e.target.value)} />
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