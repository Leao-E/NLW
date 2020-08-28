import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const router = express.Router();

//used to convert the request body to a json
app.use(cors());
app.use(express.json());
app.use(routes)

var port = 3333;

app.listen(port);