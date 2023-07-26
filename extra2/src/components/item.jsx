import {userState} from "react";

export default function item (props) {
    // atributos ou estados
    const product = props.infosProduct;

    return (
        <article>
            <img src={product.image} alt='imagem não foi carregada' />

        </article>
       
    )

}