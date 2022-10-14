const express = require('express');
const router = express.Router();
const crewMembers = require('../controllers/crewMembers')

router.get('/', crewMembers.getAllMembers)
router.post('/', crewMembers.pushMember)

module.exports = router