const express = require("express");
const app = express();

// 上傳數字
app.post("/api/update-number", (req, res) => {
  const { number } = req.body;

  // 儲存數字

  // 傳送 SSE 事件
  const event = new EventSource("/api/sse");
  event.send(JSON.stringify({ number }));

  res.send();
});

// SSE 事件
app.get("/api/sse", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Connection": "keep-alive",
    "Cache-Control": "no-cache",
  });

  // 每秒傳送一次數字
