const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    // console.log(req.body);
    const newNote = req.body;
    const updatedNotes = notes;

    updatedNotes.push(newNote);

    // console.log(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(updatedNotes, null, 2)
    );
    // console.log(notes);
});

module.exports = router;