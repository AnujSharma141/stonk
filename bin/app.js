#!/usr/bin/env node

// const yargs = require('yargs')

// const usage = "\nUsage: tran <lang_name> sentence to be translated"

// const options = yargs.usage(usage)  
//     .option("l", {alias:"languages",
//         describe: "List all supported languages.",
//         type: "boolean",
//         demandOption: false })
//     .help(true).argv

// const options = yargs.usage("Usage: -n <name>")
//     .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//     .option("s", { alias: "search", describe: "Search term", type: "string" }).argv

import scrape from '../src/scrape'

scrape('playboi-carti', 'sky')
.then(data=> data.error.status? console.log(data.error.message)
    :console.log(data.lyrics))
   