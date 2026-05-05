export default function Exercicio2 ( {peso, altura} )
{
    let imc = peso/(altura*altura)

    return(
        <div>
            O peso é {peso} kg e a altura é {altura} metros, e o 
            IMC é {imc}
        </div>
    )
}