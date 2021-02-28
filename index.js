require('dotenv').config({});
const app = require('express')();
const PORT = process.env.APP_PORT || 3000;

const mainRouter = require('./src/routes');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.use('/', mainRouter)