import express from 'express';
import cors from 'cors';
import './socket';
import {routes} from "./routes";
import axios from 'axios';


const app = express();

const XANO_API_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:mqNTjBGh';

app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:5000'
    ],
}));

routes(app)

app.listen(8000, () => {
    console.log('Server is running on port 8000')
});
