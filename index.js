const fs = require('fs');

const randomNumber = Math.floor(Math.random() * 100);

fs.writeFile('num.html', `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Number</title>
</head>
<body>
  <h1>${randomNumber}</h1>
</body>
</html>`, (err) => {
  if (err) throw err;
  console.log('Number updated!');
});
