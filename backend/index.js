const express = require('express')
const cors = require('cors');
const app = express()
const mongoDB= require('./db');
const port = 5000
mongoDB();
 app.use(cors());
app.options('*', cors());
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","https://cerulean-pothos-7c7075.netlify.app");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// })
app.use(require('morgan')('combined'))

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})