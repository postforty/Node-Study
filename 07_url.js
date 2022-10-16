const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
); // 최대치 URL 패턴
console.log(myURL);
// 실행 결과:
// URL {
//     href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
//     origin: 'https://sub.example.com:8080',
//     protocol: 'https:',
//     username: 'user',
//     password: 'pass',
//     host: 'sub.example.com:8080',
//     hostname: 'sub.example.com',
//     port: '8080',
//     pathname: '/p/a/t/h',
//     search: '?query=string',
//     searchParams: URLSearchParams { 'query' => 'string' },
//     hash: '#hash'
//   }
