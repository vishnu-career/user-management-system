import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { FiEdit, FiTrash2, FiUserPlus, FiUsers } from 'react-icons/fi';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  const loadData = async () => {
    try {
      const res = await api.get('/candidates');
      setCandidates(res.data);
    } catch (err) {
      alert('Failed to fetch candidates');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this candidate?')) {
      try {
        await api.delete(`/candidates/${id}`);
        loadData();
      } catch (err) {
        alert('Delete failed');
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">
            <FiUsers className="me-2" />
            Candidate List
          </h4>
          <Link to="/add" className="btn btn-info">
            <FiUserPlus className="me-2" />
            Add Candidate
          </Link>
        </div>

        {candidates.length === 0 ? (
          <div className="text-center text-muted py-5">No candidates found.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th style={{ width: '150px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((c, index) => (
                  <tr key={c.id}>
                    <td>{index + 1}</td>
                    <td>{c.first_name}</td>
                    <td>{c.last_name}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                    <td>
                      <Link to={`/edit/${c.id}`} className="btn btn-sm btn-outline-success me-2">
                        <FiEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateList;
