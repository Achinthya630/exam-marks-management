import React from 'react';
import { Link } from 'react-router-dom';

function TeacherDashboard() {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <Link to="/upload-marks">Upload Marks</Link>
    </div>
  );
}

export default TeacherDashboard;