const path = require("path");

console.log(__filename); // C:\Users\J\Documents\GitHub\Node-Study\06_path.js
console.log(__dirname); // C:\Users\J\Documents\GitHub\Node-Study
console.log(path.basename(__filename)); // 06_path.js
console.log(path.basename(__filename, ".js")); // 06_path
console.log(path.extname(__filename)); // .js

// path.extname를 사용하면 substring를 사용하지 않아도 확장자를 얻을 수 있음
console.log(
  path.basename(__filename).substring(path.basename(__filename).indexOf("."))
);

console.log(path.parse("/home/user/dir/file.txt"));
{
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
  }