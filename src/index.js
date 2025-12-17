const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => 
  res.send('Hello from LambdaTest sample app')
);

app.get('/api/echo', (req, res) =>
  res.json({ echo: req.query.msg || 'hello' })
);

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () =>
  console.log(`App running on http://localhost:${port}`)
);

