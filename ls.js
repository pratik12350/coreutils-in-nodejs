#!/usr/bin/env node

const fs = require("fs");

const $ = async (dir) => {
  try {
    const folderContent = await fs.promises.readdir(dir);
    if (folderContent.length < 15) {
      console.log(folderContent.join(" "));
    } else {
      console.log(folderContent.join("\n"));
    }
    process.exit(0);
  } catch (e) {
    if (e.code == "ENOENT") {
      console.log(`ls: cannot access '${dir}': no such file or directory`);
      process.exit(1);
    } else if (e.code == "EACCES") {
      console.log(`ls: cannot access '${dir}': permission denied`);
      process.exit(1);
    }
  }
};

let dir = process.argv[2] || process.cwd();

$(dir);
