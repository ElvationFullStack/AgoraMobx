import { observable, action, makeObservable, computed } from 'mobx'
import { Item } from './Item'
 export class Inventory {

    constructor() {
        this.listItem = []


        makeObservable(this, {
            listItem: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            getTotalItem:computed

        })
    }
    addItem = (name) => {
        
        const item = this.listItem.find(i => i.name === name)
        if (item === undefined) {
            const newItem = new Item(name)
            this.listItem.push(newItem)
        } else {
            item.quantity += 1
        }

    }
    buyItem = (name) => {
        const item = this.listItem.find(i => i.name == name)
        item.quantity--
        if (item.quantity === 0) {
            this.listItem=this.listItem.filter(i=>i.name!=name)
        }
        

    }
    changePrice = (name, price) => {
        const item = this.listItem.find(i => i.name === name)
        item.price = price
    }
    get getTotalItem(){
        let total =0
        this.listItem.forEach(i=> total+=i.quantity)
        return total
    }
    


}


