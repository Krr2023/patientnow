const http = require("http");

const server = http.createServer((req, res) => {
 // 設置 SSE 標頭
 res.writeHead(200, {
  "Content-Type": "text/event-stream",
  "Connection": "keep-alive",
 });

 // 每秒推送一個事件
 setInterval(() => {
  const number = Math.floor(Math.random() * 100);
  res.write(`event: number\ndata: ${number}\n\n`);
 }, 1000);
});

server.listen(3000);
