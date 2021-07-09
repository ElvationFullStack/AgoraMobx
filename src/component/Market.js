import React from 'react'
import { useState,useEffect } from 'react'
import  Item  from '../component/Item'
import { observer } from 'mobx-react';


const Market= observer(  (props) =>{
    console.log(" inside Market ", props.store.listItem)
    const [itemInput, setItemInput] = useState("")
    const[list,setList]=useState([])


      function addItem(){

        props.store.addItem(itemInput)

    }
    return (
        <div>
            <input onChange={e => setItemInput(e.target.value)} value={itemInput} />
            <button onClick={addItem}>Add</button>
            <div>
               <ul>
                    {
                  
                       props.store.listItem.map((i,ind)=> {
                            return (
                            <Item key={ind}
                                item={i}
                                store={props.store}
                            ></Item>)
                        })
                       
                    }
                    </ul>
            </div>
        </div>
    )
})
export default Market
