import {useState} from "react";

export default function Item (props) {
    // atributos ou estados
    const [quantity, setQuantity ] = useState(1);
    const[disableButton, setdisableButton] = useState(true);
    const product = props.infosProduct;

    // definir as funções

    const diminuirQtd = () => {

        (quantity - 1) ===1 ? setdisableButton(true) : setdisableButton(false)
        if(quantity !== 1){
            setQuantity (quantity - 1)
        }

    }

    const aumentarQtd = () => {


       setQuantity(quantity + 1);
       setdisableButton(false); // habilitar o botão de menos

    }

    const comprarProduto = () => {

        if(window.confirm( `Preço final: ${product.price * quantity}`  )){
            alert('Produto(s) comprado(s) com sucesso!')
            setQuantity(1)
        }
    }

    return (
        <article className="product">
            <img src={product.image} alt='imagem não foi carregada' />
            <h3 className="price-product"> 
                R$ <span> {product.price} </span>
            </h3>
            <p className="name-product"> {product.title} </p>
            <div className="quantity"> 
             <span> Quantidade: </span>
             <button disabled={disableButton} className="minus" onClick={diminuirQtd}> - </button>
              <span> {quantity} </span>  
             <button className="plus" onClick={aumentarQtd}> + </button>
            </div>
            <button className="buy" onClick={comprarProduto}> Comprar </button>
        </article>
       
    )

}