const fs = require("fs"); // filesystem

// 비동기 - 파일 읽기
fs.readFile("./sample/text.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("fs.readFile : ", data);
});

// 동기 - 파일 읽기
const data = fs.readFileSync("./sample/text.txt", "utf8");
console.log("fs.readFileSync : ", data);

// 비동기 - 파일 쓰기
const txt = "파일 쓰기 테스트";
fs.writeFile("./sample/text_w.txt", txt, "utf8", (err) => {
  if (err) {
    throw err;
  }
  const data = fs.readFileSync("./sample/text_w.txt", "utf8");
  console.log("fs.readFileSync : ", data);
});

// 동기 - 파일 쓰기
// fs.writeFileSync("./sample/text_w.txt", txt, "utf8");
