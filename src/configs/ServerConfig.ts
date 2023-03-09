import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const SERVER = {
  port: SERVER_PORT,
  hostname: SERVER_HOSTNAME,
};

const config = {
  server: SERVER,
};

export default config;