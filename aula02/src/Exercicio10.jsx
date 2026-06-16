export default function Exercicio10 ({ salario })
{
    let grat = salario * 0.08;
    let salfin = salario + grat;

    return(
        <div>
            Sálario Base: R$ {salario} <br />
            Gratificação: R$ {grat} <br />
            Salário Final: R$ {salfin}
        </div>
    )

}