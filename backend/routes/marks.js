const express = require('express');
const Mark = require('../models/Mark');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Upload marks
router.post('/upload', authMiddleware, async (req, res) => {
  try {
    const { studentId, subject, marks } = req.body;
    const mark = new Mark({
      studentId,
      teacherId: req.user.id,
      subject,
      marks,
    });
    await mark.save();
    res.status(201).json({ message: 'Marks uploaded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// View marks
router.get('/:studentId', authMiddleware, async (req, res) => {
  try {
    const marks = await Mark.find({ studentId: req.params.studentId });
    res.status(200).json(marks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;