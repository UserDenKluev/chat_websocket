import {Router} from "express";
import {GetMessages, Message} from "./controllers/message.controller";
import axios from "axios";

export const routes = (router: Router) => {
    router.post('/api/message', Message)
    router.get('/api/messages', GetMessages);
}
