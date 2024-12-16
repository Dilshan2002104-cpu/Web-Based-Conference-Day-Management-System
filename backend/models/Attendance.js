const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  participant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant', required: true },
  session_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true },
  check_in_time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
