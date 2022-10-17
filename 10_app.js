const express = require("express");
const app = express();

// post를 받기 위해 필요한 코드
app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("서버가  포트 3000번으로 시작되었습니다.");
});

// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/customers", (req, res) => {
  const customers = [
    {
      name: "김일남",
      email: "one@gmail.com",
    },
    {
      name: "김이남",
      email: "two@gmail.com",
    },
  ];
  res.send(customers);
});

app.post("/customers", (req, res) => {
  console.log(req.body.param);
  res.send("Ok");
});
