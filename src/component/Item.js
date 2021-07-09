import { React, useState, useEffect } from 'react'
import { observer ,inject} from 'mobx-react';


const Item =inject("MyInventory") (observer((props) => {


    const item = props.item

    function buyItem() {
        props.MyInventory.buyItem(props.item.name)



    }
    function changePrice(){
        const newPrice=prompt('enter your new price')
        props.MyInventory.changePrice(props.item.name,parseInt(newPrice))
    }
    return (

        <li>
            <span>{item.name}</span>
            <span> ==</span>
            <span>{item.price}</span>
            <span> ==</span>

            <span>{item.quantity}</span>
            <button onClick={buyItem}>buy Item</button>
            <button onClick={changePrice}>change price </button>


        </li>
    )
}))
export default Item




