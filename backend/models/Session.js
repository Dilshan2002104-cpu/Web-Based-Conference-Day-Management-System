const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  track_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Track', required: true },
  title: { type: String, required: true },
  speaker: { type: String, required: true },
  time: { type: Date, required: true },
  venue: { type: String, required: true },
  capacity: { type: Number, required: true },
  registered_count: { type: Number, default: 0 },
});

module.exports = mongoose.model('Session', SessionSchema);
