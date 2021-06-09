#!/usr/bin/env node

import info from '../src/info'
import search from '../src/search'
import port from '../src/list'
import yargs from 'yargs'

//parsing arguements
const options = yargs
 .usage("Usage: -i <info>")
 .usage("Usage: -s <search>")
 .usage("Usage: -a <add>")
 .usage("Usage: -r <remove>")
 .usage("Usage: -w")
 .option("s",{ alias: "search", describe: "search from stocks listed", type: "string", demandOption: false })
 .option("a",{ alias: "add", describe: "add stock to watchlist", type: "string", demandOption: false })
 .option("r",{ alias: "remove", describe: "remove stock from watchlist", type: "string", demandOption: false })
 .option("i", { alias: "info", describe: "quote value of a stock", type: "string", demandOption: false })
 .option("w", { alias: "watch", describe: "logs the watchlist", type: "boolean", demandOption: false })
 .help(true)    
 .argv


if(options.info) info(options.info)
if(options.search) search.log(options.search)
if(options.remove) port.remove(options.remove)
if(options.add) port.add(options.add)
if(options.w) port.log()