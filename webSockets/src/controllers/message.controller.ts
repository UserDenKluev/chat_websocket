import {io} from '../socket'
import axios from "axios";

const XANO_API_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:mqNTjBGh';

export const Message = (req, res) => {
    io.send(req.body.message, req.body.message);
    res.send({message: req.body.message});
}

export const GetMessages = async (req, res) => {
    try {
        const response = await axios.get(`${XANO_API_URL}/messages`);
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Xano:', error);
        res.status(500).send('Error fetching data');
    }
}
