const express = require('express');
const router = express.Router();
const Requisition = require('../models/Requisition');

// Route to create a new requisition
router.post('/create', async (req, res) => {
  try {
    const requisition = new Requisition(req.body);
    await requisition.save();
    res.status(201).json({ success: true, message: 'Requisition created successfully', requisition });
  } catch (err) {
    console.error('Error creating requisition:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Route to get all requisitions
router.get('/all', async (req, res) => {
  try {
    const requisitions = await Requisition.find();
    res.status(200).json({ success: true, requisitions });
  } catch (err) {
    console.error('Error fetching requisitions:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;