import col from './col'
import header from '../data/header'
import { table, getBorderCharacters } from 'table'
import ora from 'ora'

const info = sym =>{
const data = header
const spinner = ora('loading').start()
col(sym)
.then(res => {
    data.push(res)
    spinner.stop()
    console.log(table(data,{border:getBorderCharacters('ramac')}))
})}

export default info