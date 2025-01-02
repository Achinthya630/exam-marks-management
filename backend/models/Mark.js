const mongoose = require('mongoose');

const MarkSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: String,
  marks: Number,
});

module.exports = mongoose.model('Mark', MarkSchema);
