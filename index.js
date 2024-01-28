const express = require('express');
const app = express();
const port = 3000;

// pulibc フォルダ配下を公開するように変更
//app.get('/', (req, res) => res.send('Hello world"'));
app.use(express.static('public'));

// ルーティングを追加
app.get('/greeting', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.send('<span style="color:gray">Hello HTMX!</span>');
});

// ユーザー一覧
app.get('/users', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  const html = `${users.map((user) => `<li>${user.name}</li>`).join('')}`;
  
  return res.send(html);
})

app.listen(port, () => console.log(`Express app listening on port ${port}`));
