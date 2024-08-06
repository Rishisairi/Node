const os = require("os");

const convertTOGb = (num) => num / 1024 ** 3;
const roundOff = (num) => num.toFixed(2);
const formatting = (num) => `${num} GB`;

// console.log(pipe(convertTOGb, roundOff, formatting)(os.freemem()));

// console.log(os.version())
// console.log(os.cpus());

const fs = require("fs");

const data = "Eat 5 ⭐ do nothing";

fs.writeFile("names.txt", data, (err) => console.log("saved successfully"));
