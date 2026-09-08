import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio3()
{

    const[valor, setvalor] = useState();
    const[taxa, settaxa] = useState();
    const[tempo, settempo] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {

        let valpar = valor + (valor * ((taxa*taxa)/100) * tempo);

        setResultado(
            <div>
                <p>O valor da parcela atualizado é:  {valpar}</p>
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 3</h1>

            <div className="conteudo">

                <form>
        
                    <p>
                        Digite o valor da prestação em atraso<br />
                        <input type="text"
                            value={valor}
                            onChange={ (e) => setvalor(e.target.value)} />
                    </p>

                    <p>
                        Digite a taxa de juros (em porcentagem) <br />
                        <input type="text"
                            value={taxa}
                            onChange={ (e) => settaxa(e.target.value)} />
                    </p>

                    <p>
                        Digite o tempo de dias de atraso <br />
                        <input type="text"
                            value={tempo}
                            onChange={ (e) => settempo(e.target.value)} />
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