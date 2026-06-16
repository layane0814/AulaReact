export default function Exercicio4( {tipo, base, altura} )
{

    if(tipo=="triângulo")
    {
        let area = (Number(base) * Number(altura)) / 2 ;
        return(
            <div>
                A área do {tipo} com base {base} e altura {altura} é {area}.
            </div>
        )
    }
        
    else if (tipo=="retângulo")
    {
        
        let area = Number(base) * Number(altura);
        return(
            <div>
                A área do {tipo} com base {base} e altura {altura} é {area}.
            </div>
        )
    }

}