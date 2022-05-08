import app from './app';
import { Server as WebsocketServer } from 'socket.io';
import http from 'http';
import { connectDB } from './database';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketServer(httpServer);

console.log('Server on port ', 3000);
