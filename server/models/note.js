var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: { type: String }
}, { timestamps: true })

mongoose.model('Note', NoteSchema);