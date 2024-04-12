const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const poemsRouter = require('../routes/poems.js');
app.use(express.json());
app.use(cors());

app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}/api/poems`),
);

app.use('/api', poemsRouter);
