import quote from './quote'
import chalk from 'chalk'

const col = sym => { 
 return new Promise((resolve,reject)=>{ 
    quote(sym)
    .then(res => {
      const col = []
      col.push(res.data.data[0].symbol)
      col.push(res.data.data[0].lastPrice)
      col.push(chalk.green(res.data.data[0].change))
      col.push(res.data.data[0].open)
      col.push(res.data.data[0].dayHigh)
      col.push(res.data.data[0].dayLow)
      resolve(col)
    }) 
  }
)}

export default col