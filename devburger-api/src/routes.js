import { Router } from 'express';
import { v4 } from 'uuid';
import User from './app/models/User.js'
import { password } from './config/database';


const routes = new Router();


routes.get('/', async (request, response) => {
    const user = await  User.create({
        id: v4(),
        name: 'Dourado',
        email: 'dourado@email.com',
        password_hash: 'devdourado'       
});

return response.status(201).json(user);
});

export default routes;