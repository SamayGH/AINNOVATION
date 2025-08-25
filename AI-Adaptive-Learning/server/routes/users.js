import { Router } from 'express';
const router = Router();

// Mock list of learners
const learners = [
  { id: 1, name: 'Asha', grade: '9', locale: 'hi-IN', progress: { math: 0.62 } },
  { id: 2, name: 'Ravi', grade: '10', locale: 'en-IN', progress: { english: 0.48 } },
];

router.get('/', (req, res) => {
  res.json({ data: learners });
});

export default router;
