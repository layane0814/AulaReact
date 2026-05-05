export default function Exercicio3( {nota1, nota2} )
{
    let media = (nota1+nota2)/2;

    if (media>6)
    {
        return(
            <div>
                A média das notas é {media} e a situação é Aprovado.
            </div>
        )
    }
    else
    {
        return(
            <div>
                A média das notas é {media} e a situação é Reprovado.
            </div>
        )
    }
}