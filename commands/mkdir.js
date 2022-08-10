#!/usr/bin/env node

const { mkdirSync } = require("fs");

const $ = (argv) => {
  try {
    if (argv === null || !argv[0]) {
      console.log("mkdir: Missing file operand");
      process.exit(1);
    }
    argv.forEach((val) => {
      mkdirSync(val);
    });
  } catch (e) {
    if(e.code == "ENOENT") {
      console.log(`mkdir: cannot create directory ${e.path}: No such file or directory`)
      process.exit(1)
    }
    console.log(
      "%c Oops, looks like i encountered an error! Please create a issue on https://github.com/pratik12350/coreutils-in-nodejs/issues",
      "background-color: red;"
    );
    process.exit(1);
  }
};

const argv = process.argv;
argv.splice(0, 2);

$(argv);
