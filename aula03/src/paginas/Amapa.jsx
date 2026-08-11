import { Link } from "react-router-dom";

export default function Amapa()
{
    return(
        <div>
            <h1>Estado do Amapá</h1>

            <div className="conteudo">

                <img src="/AP.png" />

                <p>
                O Amapá está localizado no extremo norte do Brasil e tem Macapá como capital. O estado possui grande parte de seu território coberto pela Floresta Amazônica e possui uma rica biodiversidade. Sua economia envolve a agricultura, a mineração e o comércio. Uma característica interessante é que Macapá é cortada pela Linha do Equador, onde existe um monumento chamado Marco Zero.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}