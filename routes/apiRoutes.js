const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    let notes = fs.readFileSync('db/db.json');
    notes = JSON.parse(notes);
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let notes = fs.readFileSync('db/db.json');
    notes = JSON.parse(notes);

    req.body.id = notes.length.toString();
    // console.log(req.body);
    const newNote = req.body;

    notes.push(newNote);

    // console.log(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
});

module.exports = router;