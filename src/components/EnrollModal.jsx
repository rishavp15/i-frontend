import React, { useState, useEffect } from 'react';import API_URL from '../config/api';
export default function EnrollModal({ isOpen, onClose, selectedCourse }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: 'Web Development' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const courses = ['Web Development', 'Data Science', 'Machine Learning', 'Cloud Computing', 'AI & NLP', 'Python'];

  useEffect(() => {
    if (selectedCourse && courses.includes(selectedCourse)) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/api/forms/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setTimeout(() => {
          onClose();
          setFormData({ name: '', email: '', phone: '', course: 'Web Development' });
        }, 1500);
      } else {
        setMessage(data.message || 'Error submitting enrollment');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>Enroll Now</h2>

        {message && <div className="form-message">{message}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select name="course" value={formData.course} onChange={handleChange} required>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Enrolling...' : 'Enroll'}
          </button>
        </form>
      </div>
    </div>
  );
}
