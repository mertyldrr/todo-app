const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors')

dotenv.config({ path: './config/config.env' });

connectDB();

const todos = require('./routes/todos');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/todos', todos);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))