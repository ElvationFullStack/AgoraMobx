import React from 'react'
import { useState,useEffect } from 'react'
import  Item  from '../component/Item'


export default function Market(props) {
    console.log(" inside Market ", props.store.listItem)
    const [itemInput, setItemInput] = useState("")
    const[list,setList]=useState([])

useEffect(()=>{
    setList(props.store.listItem)
},[])
useEffect(()=>{
    
},[list])

      function addItem(){

        props.store.addItem(itemInput)
        setItemInput("")

    }
    return (
        <div>
            <input onChange={e => setItemInput(e.target.value)} value={itemInput} />
            <button onClick={addItem}>Add</button>
            <div>
               <ul>
                    {
                  
                        list.map((i,ind)=> {
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
}
