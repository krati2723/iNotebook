
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();


const app = express()
const port = 5000

//  Enable CORS
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

//Middleware
app.use(express.json())

//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello Kratika')
})

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost: ${port}`)
})
