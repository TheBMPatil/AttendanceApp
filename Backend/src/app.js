const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);

module.exports = app;
