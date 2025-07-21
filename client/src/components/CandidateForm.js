import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import { FiUser, FiUserCheck, FiMail, FiPhone, FiUsers, FiSave } from 'react-icons/fi';

const CandidateForm = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      api.get('/candidates')
        .then(res => {
          const candidate = res.data.find(c => c.id === parseInt(id));
          if (candidate) setForm(candidate);
        })
        .catch(() => alert("Error loading candidate"));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};

    if (!form.first_name.trim()) err.first_name = "First name is required";
    else if (!/^[A-Za-z\s]+$/.test(form.first_name)) err.first_name = "Only letters allowed";

    if (!form.last_name.trim()) err.last_name = "Last name is required";
    else if (!/^[A-Za-z\s]+$/.test(form.last_name)) err.last_name = "Only letters allowed";

    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Invalid email format";

    if (!form.phone.trim()) err.phone = "Phone is required";
    else if (!/^\d+$/.test(form.phone)) err.phone = "Phone must be numeric";
    else if (form.phone.length < 10 || form.phone.length > 15) err.phone = "Must be 10–15 digits";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (isEdit) {
        await api.put(`/candidates/${id}`, form);
        alert("Candidate updated!");
      } else {
        await api.post('/candidates', form);
        alert("Candidate added!");
      }
      navigate('/');
    } catch {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <h4 className="text-center mb-4">
          <FiUsers className="me-2" />
          {isEdit ? 'Edit Candidate' : 'Add New Candidate'}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label"><FiUser className="me-2" />First Name</label>
            <input
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              onKeyPress={(e) => !/[a-zA-Z\s]/.test(e.key) && e.preventDefault()}
              className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.first_name}</div>
          </div>

          <div className="mb-3">
            <label className="form-label"><FiUserCheck className="me-2" />Last Name</label>
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              onKeyPress={(e) => !/[a-zA-Z\s]/.test(e.key) && e.preventDefault()}
              className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.last_name}</div>
          </div>

          <div className="mb-3">
            <label className="form-label"><FiMail className="me-2" />Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-4">
            <label className="form-label"><FiPhone className="me-2" />Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.phone}</div>
          </div>

          <button type="submit" className="btn btn-success w-100">
            <FiSave className="me-2" />
            {isEdit ? 'Update Candidate' : 'Add Candidate'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;
