
import React, { Component } from 'react'
import logo from '../../image/logo.jpg'
import "./header.css"
export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt=""/>
                <nav>
                    <a href="/shop">Shop</a>
                        <a href="/order">Order Review</a>
                            <a href="/manage">Mange Inverstroy</a>
                    </nav>
            </div>
        )
    }
}




