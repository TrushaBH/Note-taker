const fs = require('fs');
const pth = require('path');

const createNew = (note, notesArray) => {
    // adds a note to notes array
    notesArray.push(note)

    // saves notes
    fs.writeFileSync(
        pth.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

// finds specific note
const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// edit note
const editNote = (editedNote, notesArray) => {
    
    const index = notesArray.findIndex(note => note.id === editedNote.id);

   
    notesArray.splice(index, 1);
    notesArray.splice(index, 0, editedNote);

    
    fs.writeFileSync(
        pth.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
};

const removeNote = (note, notesArray) => {
    
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);

    
    fs.writeFileSync(
        pth.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

module.exports = { createNew, findById, editNote, removeNote };