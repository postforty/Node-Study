// background에서 실행 후 task queue에서 대기 후 call stack의 모든 작업이 완료되면 비로소 call stack에서 처리
const timeout = setTimeout(() => {
  console.log("1초 후에 실행됩니다.");
}, 1000);

const interval = setInterval(() => {
  console.log("1초 마다 실행됩니다.");
}, 1000);

const immediate = setImmediate(() => {
  console.log(
    "setImmediate 함수를 호출하고 난 뒤에 오는 모든 코드를 먼저 실행하고 그 다음 실행합니다."
  );
});

// call stack에서 먼저 순차적으로 처리
console.log("1");
console.log("2");
console.log("3");

// 실행결과 :
// 1
// 2
// 3
// setImmediate 함수를 호출하고 난 뒤에 오는 모든 코드를 먼저 실행하고 그 다
// 음 실행합니다.
// 1초 후에 실행됩니다.
// 1초 마다 실행됩니다.
// 1초 마다 실행됩니다.
// ...
