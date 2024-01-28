const express = require('express');
const app = express();
const port = 3000;

// pulibc フォルダ配下を公開するように変更
//app.get('/', (req, res) => res.send('Hello world"'));
app.use(express.static('public'));

app.listen(port, () => console.log(`Express app listening on port ${port}`));
