import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent(e) {
    e.preventDefault();
    if (!name.trim() || !age || !major.trim()) return;

    setStudents([...students, { name, age, major }]);
    setName("");
    setAge("");
    setMajor("");
  }

  return (
    <main style={{ maxWidth: 500, margin: "50px auto", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Student Information System</h1>
      <h4>Developed By: 101523808 | Nousheen Perween | DevOps</h4>

      <form onSubmit={addStudent}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <br /><br />
        <input type="number" placeholder="Age" min="1" value={age} onChange={e => setAge(e.target.value)} required />
        <br /><br />
        <input placeholder="Major" value={major} onChange={e => setMajor(e.target.value)} required />
        <br /><br />
        <button type="submit">Add Student</button>
      </form>

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        students.map((student, index) => (
          <p key={index}>
            {student.name} — {student.age} — {student.major}
          </p>
        ))
      )}
    </main>
  );
}

export default App;