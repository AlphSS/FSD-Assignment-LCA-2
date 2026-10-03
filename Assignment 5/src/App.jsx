
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="MCA">MCA</option>
          <option value="MBA">MBA</option>
          <option value="BCA">BCA</option>
          <option value="BTech">BTech</option>
        </select>
      </form>

      <div className="preview">
        <h3>Entered Details</h3>
        <p><strong>Name:</strong> {formData.name || "Not entered"}</p>
        <p><strong>Email:</strong> {formData.email || "Not entered"}</p>
        <p><strong>Age:</strong> {formData.age || "Not entered"}</p>
        <p><strong>Course:</strong> {formData.course || "Not selected"}</p>
      </div>
    </div>
  );
}

export default App;
