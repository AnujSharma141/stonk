import fs from 'fs'
import ora from 'ora'
import {table, getBorderCharacters} from 'table'

import data from '../data/list.json'
import header from '../data/header'
import col from './col'
import search from './search'

//add stock
const add = ticker =>{
    const inst = data
    inst.list.push(ticker)
    //validate
    search.req(ticker)
    .then(res => {
        res.data == undefined? console.log('ticker not found!'): (()=>{
            const filter = res.data.filter(item => item.symbol === ticker)
            filter.length === 0 ? console.log('ticker not valid!'): (()=>{
                //file update
                fs.writeFileSync('data/list.json',JSON.stringify(inst))
                console.log(ticker + ' added in watchlist!')
            })()
        })()
    })
}

//remove stock
const remove = ticker =>{
    const inst = data
    const filter = inst.list.filter(item => item !== ticker)
    //validate
    fs.writeFileSync('data/list.json',JSON.stringify({list:filter}))
    inst.list.length === filter.length? console.log('not found!'):
    console.log(ticker + ' removed from watchlist!')
}

//logs watchlist
const log = () =>{
    const tab = header
    const spinner = ora('loading').start()
    let fill = data.list.map(item => col(item))
    Promise.all(fill).then(item=>{ 
        item.unshift(tab[0])
        spinner.stop()
        console.log(table(item,{border:getBorderCharacters('ramac')}))
    })
}

const port = {
    add: add,
    remove: remove,
    log: log
}

export default port