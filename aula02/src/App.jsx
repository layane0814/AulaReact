import "./App.css";
import Exemplo1 from "./Exemplo1";

import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./Exercicio5";
import Exercicio6 from "./Exercicio6";
import Exercicio7 from "./Exercicio7";
import Exercicio9 from "./Exercicio9";
import Exercicio10 from "./Exercicio10";

export default function App()
{
  return(
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>

      <div className="card">
        <h3>Exemplo 1</h3>

        <Exemplo1 numero1={10} numero2={20} />
        
      </div>

      <div className="card">
          <h3>Exercício 1</h3>
          <Exercicio1 numero={12}/> <hr />
          <Exercicio1 numero={67}/> <hr />
          <Exercicio1 numero={-5}/>

      </div>

      <div className="card">
        <h3>Exercício 2</h3>

        <Exercicio2 peso={80} altura={1.80}/>
        <hr />
        <Exercicio2 peso={60} altura={1.60}/>
      </div>

      <div className="card">
        <h3>Exercício 3</h3>

        <Exercicio3 nota1={7.5} nota2={9.5} /> <hr />
        <Exercicio3 nota1={3} nota2={6.5} />
      </div>

      <div className="card">
        <h3>Exercício 4</h3>

        <Exercicio4 tipo={"triângulo"} base={10} altura={5} /> <hr />
        <Exercicio4 tipo={"retângulo"} base={10} altura={5} />

      </div>

      <div className="card">
        <h3>Exercício 5</h3>

        <Exercicio5 quantidade={100} />
      </div>

      <div className="card">
        <h3>Exercício 6</h3>

        <Exercicio6 nota1={7.5} nota2={9.5} /> <hr />
        <Exercicio6 nota1={3} nota2={6.5} />
      </div>

      <div className="card">
        <h3>Exercício 7</h3>
        <Exercicio7 celcius={30} />
        
      </div>

      <div className="card">
        <h3>Exercício 9</h3>

        <Exercicio9 valorVendas={5000} 
        valorSalario={2000} />
      </div>

      <div className="card">
        <h3>Exercício 10</h3>

        <Exercicio10 salario={2500} />
      </div>

    </div>
  )
}