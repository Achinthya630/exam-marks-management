import React, { useState } from 'react';
import { uploadMarks } from '../api';

function UploadMarks() {
  const [formData, setFormData] = useState({ studentId: '', subject: '', marks: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadMarks(formData);
      alert('Marks uploaded successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Student ID" onChange={(e) => setFormData({ ...formData, studentId: e.target.value })} required />
      <input type="text" placeholder="Subject" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
      <input type="number" placeholder="Marks" onChange={(e) => setFormData({ ...formData, marks: e.target.value })} required />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadMarks;