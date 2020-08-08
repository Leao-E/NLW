import express from 'express';

const app = express();
const router = express.Router();

//used to convert the request body to a json
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    "teste": "teste"
  });
});

var port = 3030;

app.listen(port);