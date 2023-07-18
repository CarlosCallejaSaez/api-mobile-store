const express = require('express');
const app = express();
const { connectionDB } = require('./config/db.js');

app.use(express.json());

app.use('/api', (req,res) => {res.send('Welcome to Mobile API');});



app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Error 404: Page not found' });
});


app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Internal Server Error' });
});

connectionDB();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});