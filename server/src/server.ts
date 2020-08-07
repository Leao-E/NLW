import express from 'express';

const app = express();
const router = express.Router();

//used to convert the request body to a json
app.use(express.json());

router.use('/e', () => {
  console.log('eeee');
});

router.get('/t', (req, res) => {
  return res.json({
    "t": "t"
  });
});

app.use('/teste', router);

app.get('/ee', (req, res) => {
  return res.json({
    "e": "eee",
    "r": "ieieie"
  });
});




var port = 3030;

app.listen(port);