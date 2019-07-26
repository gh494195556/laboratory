const express = require('express');
const app = express();

console.log(__dirname);

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', (req, res) =>
  res.sendFile(`${__dirname}\\public\\views\\index.html`)
);
app.post('/form', (req, res) => {
  console.log(req.params);
});
app.listen(3000, () =>
  console.log('application is running ai http://localhost:3000')
);
