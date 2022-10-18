const mysql = require("mysql");
const sql = require("./sql");

// 공식 문제서에는 connection을 열고 닫는 방법으로 안내되어 있는데 실무에서는 불편함.
// connection.connect();
// connection.end();

// 실무에서는 connection pool을 만들어 사용
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: process.env.MYSQL_LIMIT,
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
