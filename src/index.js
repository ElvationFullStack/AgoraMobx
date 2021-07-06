import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Inventory} from './store/Inventory'
import { Item } from './store/Item';

const item1= new Item("knife")
const item2= new Item("knife number 2 ")
const MyInventory=new Inventory()
MyInventory.listItem.push(item1)
MyInventory.listItem.push(item2)


ReactDOM.render(
  <React.StrictMode>
    <App store={MyInventory}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
