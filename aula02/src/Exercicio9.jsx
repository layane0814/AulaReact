export default function Exercicio9 ({ valorVendas, valorSalario })
{
    let valorComi = Number(valorVendas) * Number(0.06);

    let valorFin = Number(valorSalario) + Number(valorComi);

    return(

        <div>
            Valor da comissão: R$ {valorComi} <hr />
            Salário final: R$ {valorFin}
        </div>
    
    );

}