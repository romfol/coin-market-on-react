const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(`${_dirname}/build/index.html`);
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log('Server launched on http://localhost:9000/');
});
