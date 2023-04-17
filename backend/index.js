const express = require('express')
const cors = require('cors');
const app = express()
const mongoDB= require('./db');
const helmet = require('helmet');
const port = 5000
mongoDB();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      "default-src": ["'self'"],
      "style-src": ["'self'"]
    },
    featurePolicy: {
      interestCohort: ["'none'"]
    }
  }
}));

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