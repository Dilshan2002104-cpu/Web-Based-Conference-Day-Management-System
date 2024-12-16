const express = require('express');
const { body, validationResult } = require('express-validator');
const Session = require('../models/Session');
const Track = require('../models/Track');

const router = express.Router();

// Create a track
router.post('/tracks', [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional().notEmpty().withMessage('Description cannot be empty if provided'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description } = req.body;
  try {
    const track = new Track({ title, description });
    await track.save();
    res.status(201).json({ message: 'Track created successfully', track });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a session
router.post('/sessions', [
  body('track_id')
    .notEmpty().withMessage('Track ID is required')
    .custom(value => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        throw new Error('Invalid Track ID');
      }
      return true;
    }),
  body('title').notEmpty().withMessage('Title is required'),
  body('speaker').notEmpty().withMessage('Speaker is required'),
  body('time').isISO8601().withMessage('Time must be a valid ISO 8601 date'),
  body('venue').optional().notEmpty().withMessage('Venue cannot be empty if provided'),
  body('capacity').isInt({ gt: 0 }).withMessage('Capacity must be a positive integer'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { track_id, title, speaker, time, venue, capacity } = req.body;
  try {
    // Check if the track exists
    const trackExists = await Track.findById(track_id);
    if (!trackExists) {
      return res.status(404).json({ error: 'Track not found' });
    }

    const session = new Session({ track_id, title, speaker, time, venue, capacity });
    await session.save();
    res.status(201).json({ message: 'Session created successfully', session });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all sessions
router.get('/sessions', async (req, res) => {
  try {
    const sessions = await Session.find().populate('track_id');
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;