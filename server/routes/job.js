const router = require('express').Router();
const Job = require('../models/Job');
const verifyToken = require('../middleware/auth');

// 📝 POST a job (Protected)
router.post('/add', verifyToken, async (req, res) => {
  try {
    const newJob = new Job({
      ...req.body,
      postedBy: req.user.id,
    });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔍 GET all jobs (Public)
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', 'email');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
