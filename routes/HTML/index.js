const pth = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(pth.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(pth.join(__dirname, '../../public/notes.html'));
});

module.exports = router;