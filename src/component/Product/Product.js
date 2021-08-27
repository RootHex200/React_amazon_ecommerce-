

import React from 'react'
import './Product.css'
export default function Product(props) {
    const {name,price,img,stock,seller}=props.data;
    return (
        <div className="product">
            <div className="productimag">
                <img src={img} alt=""/>
            </div>
            <div className="productdata">
                <h1>{name}</h1>
                <br></br>
                <p><small>by:{seller}</small></p>

                <p><small>${price}</small></p>

                <p><small>only {stock} left in stock -order soon</small></p>

                <button onClick={function(){
                    props.handeler(props.data)
                }}>Add to cart </button>
            </div>
        </div>
    )
}
