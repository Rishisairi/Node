const fs = require("fs");
const quote = "Live more, Worry Less 😊😊";

// for(i = 1 ; i<= 10;i++){
// fs.writeFile(`./backup/text-${i}.html`,quote,(msg) => "Files Created successfully 😊")
// }

const [, , num] = process.argv;
var val = 1;
for (i = 1; i <= +num; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote, (msg) => (val += 1));
}

if (val == +num) {
  console.log("Files Created successfully 😊");
}
