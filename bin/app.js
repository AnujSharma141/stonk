#!/usr/bin/env node

import info from '../src/info'
import search from '../src/search'
import yargs from 'yargs'

const options = yargs
 .usage("Usage: -i <info>")
 .usage("Usage: -s <search>")
 .option("s",{ alias: "search", describe: "search from stocks listed", type: "string", demandOption: false })
 .option("i", { alias: "info", describe: "quote value of a stock", type: "string", demandOption: false })
 .help(true)
 .argv


if(options.info) info(options.info)
if(options.search) search(options.search)