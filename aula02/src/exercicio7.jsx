export default function Exercicio7 ({ celcius })
{
    let fahrenheit = (celcius * (9/5))+32;
    let kelvin = (celcius+273.15);

    return(
        <div>
            {Number(celcius).toFixed(2)}°C em fahrenheit {fahrenheit.toFixed(2)}°F em Kelvin {kelvin.toFixed(2)}°K
        </div>
    );
}