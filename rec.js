// 監聽從 num.html 發送的消息
window.addEventListener("message", (event) => {
  // 從 event.data 中獲取發送的數字
  const number = event.data;

  // 將數字編寫入 index.html
  const numElement = document.getElementById("num");
  numElement.textContent = number;

  // 將數字發送到 console://rec.js
  console.log("rec.js", number);
});
