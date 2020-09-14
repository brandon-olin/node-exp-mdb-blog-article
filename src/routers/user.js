const express = require('express');
const router = new express.Router();
import { create } from '../controllers/user';

router.post('/users', create);

export default router;