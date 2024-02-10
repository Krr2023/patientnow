const express = require('express');
const app = express();

// 使用 body-parser 中介軟體來解析 POST 請求的 body
app.use(require('body-parser').json());

// 建立一個路由來處理 POST /api/store-number 請求
app.post('/api/store-number', async (req, res) => {
  const { number } = req.body;

  // 驗證 number 是否為有效數字
  if (!number || isNaN(number)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  // 將數字儲存至資料庫
  // ... 實際的儲存程式碼會因您使用的資料庫而異 ...

  // 回應成功訊息
  res.json({ success: true });
});

// 啟動伺服器
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
