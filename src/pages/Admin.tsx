import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css"; // we’ll style here

const AdminAbout: React.FC = () => {
  const [formData, setFormData] = useState({
    aboutMe: "",
    education: "",
    skills: "",
    internships: "",
    workExperience: "",
  });

  // Fetch current about info
  useEffect(() => {
    axios.get("http://localhost:5000/api/about")
      .then(res => {
        if (res.data) setFormData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit updated data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/about", formData);
      alert("✅ About Info Updated Successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update About Info");
    }
  };

  return (
    <section className="admin-section d-flex align-items-center justify-content-center">
      <div className="admin-card glass-card p-4">
        <h2 className="text-glow mb-4">⚙️ Admin Panel - About Page</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="mb-3">
            <label className="form-label">About Me</label>
            <textarea
              name="aboutMe"
              className="form-control"
              rows={3}
              value={formData.aboutMe}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Education</label>
            <textarea
              name="education"
              className="form-control"
              rows={3}
              value={formData.education}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Skills</label>
            <textarea
              name="skills"
              className="form-control"
              rows={3}
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Internships</label>
            <textarea
              name="internships"
              className="form-control"
              rows={3}
              value={formData.internships}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Work Experience</label>
            <textarea
              name="workExperience"
              className="form-control"
              rows={3}
              value={formData.workExperience}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-futuristic w-100">
            💾 Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminAbout;
