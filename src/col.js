import quote from './quote'
import chalk from 'chalk'

const col = sym => { 
 return new Promise((resolve,reject)=>{ 
    quote(sym)
    .then(res => {
      const col = []
      col.push(res.data.data[0].symbol)
      col.push(res.data.data[0].change>0?chalk.green(res.data.data[0].lastPrice)
      :chalk.red(res.data.data[0].lastPrice))
      col.push(res.data.data[0].change>0?chalk.green(res.data.data[0].change)
      :chalk.red(res.data.data[0].change))
      col.push(res.data.data[0].change>0?chalk.green(res.data.data[0].pChange)
      :chalk.red(res.data.data[0].pChange))
      col.push(res.data.data[0].open)
      col.push(res.data.data[0].dayHigh)
      col.push(res.data.data[0].dayLow)
      col.push(res.data.data[0].high52)
      col.push(res.data.data[0].low52)
      resolve(col)
    }) 
  }
)}

export default col