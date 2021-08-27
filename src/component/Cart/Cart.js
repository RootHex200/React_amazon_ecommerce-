
import React from 'react'

export default function Cart(props) {
    console.log(props.Cart)
    const item=props.Cart
    let total=0;
    for(var i=0;i<item.length;i++){
        var nwew=item[i];
        total=total+nwew.price;
    }
    return (
        <div>
            <h1>Order SUmmary </h1>
            <br />
            <h1>order item: {item.length}</h1>

            <br />
            <br />
            <br />
            <br />
            <h3>$total taka:{total}</h3>
        </div>
    )
}
