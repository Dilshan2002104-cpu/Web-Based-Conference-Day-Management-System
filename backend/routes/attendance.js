const express = require('express');
const Attendance = require('../models/Attendance');

const router = express.Router();

router.post('/check-in', async (req, res) => {
  const { participant_id, session_id } = req.body;
  try {
    const attendance = new Attendance({ participant_id, session_id });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;