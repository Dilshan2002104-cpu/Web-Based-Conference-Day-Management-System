const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const participantRoutes = require('./routes/participants');
const sessionRoutes = require('./routes/sessions');
const attendanceRoutes = require('./routes/attendance');
const userRoutes = require('./routes/User')
const cors = require('cors');

const app = express();
app.use(cors());
connectDB();

app.use(express.json());
app.use('/api/participants', participantRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/register',userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
