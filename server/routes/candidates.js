const express = require('express');
const router = express.Router();
const db = require('../db');

// Get All Candidates
router.get('/', (req, res) => {
  db.query('SELECT * FROM candidates', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add Candidate
router.post('/', (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  if (!first_name || !last_name || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const sql = 'INSERT INTO candidates (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)';
  db.query(sql, [first_name, last_name, email, phone], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, ...req.body });
  });
});

// Update Candidate
router.put('/:id', (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  const sql = 'UPDATE candidates SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?';
  db.query(sql, [first_name, last_name, email, phone, req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Updated successfully' });
  });
});

// Delete Candidate
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM candidates WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Deleted successfully' });
  });
});

module.exports = router;
