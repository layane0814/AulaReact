export default function Exercicio6( { capital, taxa , tempo } )
{
 let simples = Number(capital)* (1 + (Number(taxa)/100)*Number(tempo));
 let composto = Number(capital)* Math.pow((1+Number(taxa)/100), Number(tempo));

 return(
    <div>
        Capital: R$ {Number(capital).toFixed(2)} <br />
        Taxa: {taxa}% <br />
        Tempo: {tempo} <br/>
        Juros Simples: R$ {simples.toFixed(2)} <br/>
        Juros Composto: R$ {composto.toFixed(2)}
    </div>
 )
}