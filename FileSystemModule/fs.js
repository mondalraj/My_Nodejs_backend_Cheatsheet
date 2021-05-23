const fs = require('fs');

function createFile(name, content){
    fs.writeFileSync(name, content);
    console.log("File Written");
}

module.exports = {
    createFile
}