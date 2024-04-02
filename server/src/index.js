const express = require('express');
const app = express();
const PORT = 3000;

// Isso aqui era importante?
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Internal Server Error');
// });

const poemsRouter = require('../routes/poems.js');
app.use(express.json());

app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}/api/poems`),
);

app.use('/api', poemsRouter);
