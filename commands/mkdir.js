#!/usr/bin/env node

const { mkdirSync } = require("fs");

const $ = (argv) => {
  try {
    argv.forEach(val => {
      mkdirSync(val)
    })
  } catch (e) {
    console.log("%c Oops, looks like i encountered an error! Please create a issue on https://github.com/pratik12350/coreutils-in-nodejs/issues", "background-color: red;")
    process.exit(1)
  }
}

const argv = process.argv
argv.splice(0, 2)

$(argv);
