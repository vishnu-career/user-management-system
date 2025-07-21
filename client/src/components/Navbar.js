import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiUsers, FiHome, FiPlus } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand text-white fw-bold d-flex align-items-center fs-4">
          <FiUsers className="me-2" />
          User Management
        </Link>

        <div className="d-flex gap-3">
          <Link
            to="/"
            className={`btn btn-outline-light rounded-pill px-4 ${
              location.pathname === '/' ? 'fw-semibold' : ''
            }`}
          >
            <FiHome className="me-2" />
            Home
          </Link>

          <Link
            to="/add"
            className={`btn btn-light text-primary rounded-pill px-4 ${
              location.pathname === '/add' ? 'fw-bold' : ''
            }`}
          >
            <FiPlus className="me-2" />
            Add Candidate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
