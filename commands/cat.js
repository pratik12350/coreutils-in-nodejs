#!/usr/bin/env node

const { readFileSync, existsSync, lstatSync } = require("fs");

const $ = (file) => {

  try {
    if (existsSync(file) && lstatSync(file).isFile()) {
      const fileContent = readFileSync(file, "utf8");
      console.log(fileContent);
    } else if (existsSync(file) && !lstatSync(file).isFile()) {
      console.log(`cat: ${process.argv[2]}: Is a directory`);
      process.exit(1);
    } else if (!existsSync(file)) {
      console.log(`cat: ${pocess.argv[2]}: No such file or directory`);
    }
  } catch (e) {
    if (e.code == "EACCES") {
      console.log(`cat: ${process.argv[2]}: Permission denied`);
    }
  }
};

const file = process.argv[2];

$(file);
