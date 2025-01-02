import React, { useEffect, useState } from 'react';
import { getMarks } from '../api';

function StudentDashboard() {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const fetchMarks = async () => {
      const studentId = "12345"; // Replace with actual studentId
      const { data } = await getMarks(studentId);
      setMarks(data);
    };

    fetchMarks();
  }, []);

  return (
    <div>
      <h1>Your Marks</h1>
      {marks.map((mark) => (
        <div key={mark._id}>
          <p>Subject: {mark.subject}</p>
          <p>Marks: {mark.marks}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentDashboard;