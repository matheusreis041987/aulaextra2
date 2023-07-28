// desenhar os componentes da página como uma JavaScript
// export default permite que a função seja exportada para outros arquivos

import products from '../lista-produtos.json';
import {useState} from "react";
import banner from '../assets/banner.png';
import Item from '../components/Item';


// Cada componente é uma função em JS, que pode conter atributos, métodos ou retornos
export default function Products() {
    // atributos (mesmo que estado em react)
    const [productList, setProductList] = useState(products.bottles); // useState transforma o atributo em um estado

    // métodos

    // retornos

    return (
            <div className="content-product"> 
                <header> 
                    <div className='user'>
                         <span> Usuário </span>

                    </div>
                    
                </header>

                <section className="banner">
                {/* banner*/}
                <img src={banner} alt="Imagem do banner"/>
                </section>

                <section className="main-products">
                    {
                          productList.map((productItr, id) => (

                            <Item key={id} infosProduct = {productItr} /> // informações do produto

                          ))  
                   }
                </section>

                <footer className='contatos'> Contatos: </footer>

            </div>


            
      
    )
   

}

// className é para chamar chama o método css

