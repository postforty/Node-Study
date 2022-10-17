const mysql = require("mysql");
const sql = require("./sql");

// 공식 문제서에는 connection을 열고 닫는 방법으로 안내되어 있는데 실무에서는 불편함.
// connection.connect();
// connection.end();

// 실무에서는 connection pool을 만들어 사용
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "dev",
  password: "1234",
  database: "dev",
  connectionLimit: 10,
});

// 쿼리문을 실행하고 결과를 반환하는 함수
const query = async (alias, values) => {
  return new Promise((resolve, reject) =>
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        console.log(error);
        rejects({
          error,
        });
      } else resolve(results); // 쿼리 결과를 전달
    })
  );
};

module.exports = {
  query,
};
