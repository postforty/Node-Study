const { rejects } = require("assert");
const crypto = require("crypto");

console.log(crypto.createHash("sha512").update("pw1234").digest("base64")); // 9iSeOd1vv2qinR2UM5Aog5LmqBncF/oFeTTsPUjqwGoG3lG232280LqAScE7FR7HHe4K0gyedCN7iZDZl+NZaA==
console.log(crypto.createHash("sha512").update("pw1234").digest("hex")); // f6249e39dd6fbf6aa29d1d943390288392e6a819dc17fa057934ec3d48eac06a06de51b6df6dbcd0ba8049c13b151ec71dee0ad20c9e74237b8990d997e35968
// 해커들은 "레인보우 테이블"을 가지고 있다. 따라서 위의 방식이 안전하지 않을 수 있다.

// salting 암호화
// 위의 방식 보다 더 안전한 방식이다.
// 램덤한 Salt 문자열 만들기
const createSalt = () => {
  return new Promise((resolve, rejects) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) rejects(err);
      resolve(buf.toString("base64"));
    });
  });
};
const createCryptoPassword = async (plainPassword) => {
  const salt = createSalt();
  // 암호화할 문자열, salt, 반복횟수, 출력할 바이트수, 해시 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};
