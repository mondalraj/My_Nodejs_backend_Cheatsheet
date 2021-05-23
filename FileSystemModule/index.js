const { createFile } = require('./fs');


const fs = require('fs');
console.log(fs.readdirSync('..'))

/*
o/p-> [
  'JS DSA Exercise',
  'My_JavaScript_Tutorials_Cheatsheet',
  'My_Nodejs_backend_Cheatsheet',
  'Reactjs - frontend',
  'Sass Tutorials'
]
*/


// createFile('test.txt', 'Hello World!');

//Alternative for Sync in fs is using promises, it will work very similar to Synchronous.
/*
const _fs = require('fs');
const fs = _fs.promises;

//Self Executing anonymous function
(async () => {
        console.log(await fs.readdir('..'));
})();
*/
/*
o/p-> [
  'JS DSA Exercise',
  'My_JavaScript_Tutorials_Cheatsheet',
  'My_Nodejs_backend_Cheatsheet',
  'Reactjs - frontend',
  'Sass Tutorials'
]
*/

console.log(fs.readFileSync('./fs.js', 'utf8'));