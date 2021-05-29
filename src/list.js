import fs from 'fs'
import { table, getBorderCharacters } from 'table'
import data from '../data/list.json'
import header from '../data/header'
import col from './col'

//add stock
const add = ticker =>{
    const inst = data
    inst.list.push(ticker)
    //validate
    fs.writeFileSync('data/list.json',JSON.stringify(inst))
    console.log(ticker + ' added in watchlist!')
}

//remove stock
const remove = ticker =>{
    const inst = data
    const filter = inst.list.filter(item => item !== ticker)
    //validate
    fs.writeFileSync('data/list.json',JSON.stringify({list:filter}))
    console.log(ticker + ' removed from watchlist!')
}

//logs watchlist`
const log = () =>{
    const tab = header
    let fill = data.list.map(item => col(item))
    Promise.all(fill).then(item=>{ 
        item.unshift(tab[0])
        console.log(table(item,{border:getBorderCharacters('ramac')}))
    })
}

const port = {
    add: add,
    remove: remove,
    log: log
}

export default port