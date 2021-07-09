import React from 'react'
import { useState, useEffect } from 'react'
import Item from '../component/Item'
import { observer,inject  } from 'mobx-react';



const Market = inject("MyInventory")(observer((props) => {
    const [itemInput, setItemInput] = useState("")

    function addItem() {

        props.MyInventory.addItem(itemInput)

    }
    return (
        <div>
            <input onChange={e => setItemInput(e.target.value)} value={itemInput} />
            <button onClick={addItem}>Add</button>
            <h1> totoal num of item {props.MyInventory.getTotalItem}</h1>
            <div>
                <ul>
                    {

                        props.MyInventory.listItem.map((i, ind) => {
                            return (
                                <Item key={ind}
                                    item={i}
                                ></Item>)
                        })

                    }
                </ul>
            </div>
        </div>
    )
}))
export default Market
