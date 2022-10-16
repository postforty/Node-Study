console.log("Hello World");

const world = "world";
console.log(`hello ${world}`);

// 에러 메시지 출력
// console.error(new Error("에러 메시지 출력"));
console.error("에러 메시지 출력");

// console.table로 표형식으로 배열값 출력
const arr = [
  {
    name: "김일남",
    email: "one@gmail.com",
  },
  {
    name: "김이남",
    email: "two@gmail.com",
  },
];
console.table(arr);

// console.dir로 원하는 depth까지만 출력
const obj = {
  students: {
    grade1: { class1: {}, class2: {} },
    grade2: { class1: {}, class2: {} },
    teachers: ["김일남", "김이남"],
  },
};
console.dir(obj, { depth: 1, colors: true });

// 실행 시간 출력
console.time("func 1");
for (let i = 0; i < 999999; i++) {}
console.timeEnd("func 1");
