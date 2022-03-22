const express = require('express');
const routes = require('./src/routes/crmRoutes');
const connectDB = require('./src/config/db');

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());
routes(app);

app.get('/', (req, res) => {
  res.json({ msg: 'Node and express server running at Port', PORT });
});

app.listen(PORT, () => {
  console.log('Server started at port', PORT);
});
