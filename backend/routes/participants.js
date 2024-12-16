const express = require('express');
const QRCode = require('qrcode');
const Participant = require('../models/Participant');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('organization').optional().notEmpty().withMessage('Organization cannot be empty if provided'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, organization } = req.body;
  try {
    const qrCodeUrl = await QRCode.toDataURL(email); // Generate QR code based on email
    const participant = new Participant({ name, email, organization, QR_code: qrCodeUrl });
    await participant.save();
    res.status(201).json({ message: 'Participant registered successfully', qrCodeUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;