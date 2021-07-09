import { React, useState, useEffect } from 'react'
import { observer } from 'mobx-react';


const Item = observer((props) => {


    const item = props.item

    function buyItem() {
        props.store.buyItem(props.item.name)



    }
    function changePrice(){
        const newPrice=prompt('enter your new price')
        props.store.changePrice(props.item.name,parseInt(newPrice))
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
})
export default Item




