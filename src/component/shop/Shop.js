
import React, { useState } from 'react'
import fakeData from '../../fakedata'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
export default function Shop() {
    const first10=fakeData.slice(0,90)
    const [product,serProduct]=useState(first10)

    const [cart,addCart]=useState([])

    const handeler=(produtct)=>{
        console.log(produtct);
        const total=[...cart,produtct];
        addCart(total);
    }
    return (
        <div className="shop-container">

            <div className="product-container">

                {
                    product.map(product=><Product  handeler={handeler} data={product}></Product>)
                }


            </div>

            <div className="cart-container">
                <Cart Cart={cart}></Cart>
            </div>
        </div>
    )
}
