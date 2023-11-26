const path = require('path')

const filepath = path.join('/content/','subfolder','test.txt');

console.log(path.resolve(__dirname, 'content','subfolder','test.txt'));