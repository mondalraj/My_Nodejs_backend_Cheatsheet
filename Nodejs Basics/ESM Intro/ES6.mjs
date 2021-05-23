import fs from 'fs';

//This is ES6 Module System bit it is not supported in .js files, we have to rename the file by .mjs

console.log(fs.readFileSync('ES6.js', 'utf8'));