import { React, useState, useEffect } from 'react'


const Item = (props) => {
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        setQuantity(props.item.quantity)
    }, [])
    useEffect(()=>{

    },[quantity])
    const item = props.item
    const store = props.store

    function buyItem() {
        setQuantity(quantity-1)
        props.store.buyItem(props.item.name)



    }
    function changePrice(){
        const newPrice=prompt('enter your new price')
        setPrice(newPrice)
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
}
export default Item




