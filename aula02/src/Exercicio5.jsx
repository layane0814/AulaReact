export default function Exercicio5( { quantidade } )
{
    let salarioBruto = Number(quantidade)*150;
    let inss = salarioBruto*0.80;
    let salarioLiquido = salarioBruto - inss;

    return(
        <div>
            Quantidade de consultas: {quantidade}<br></br>
            Salário Bruto: {salarioBruto.toFixed(2)}<br></br>
            Desconto Inss: {inss.toFixed(2)}<br></br>
            Salário Líquido: {salarioLiquido.toFixed(2)}
        </div>
    )
}