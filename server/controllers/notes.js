var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show_all: function (req, res) {
        Note.find({}).sort({createdAt: -1}).exec(function (err, notes) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                console.log('successfully found notes!');
                res.json(notes);
            }
        })
    },
    add: function (req, res) {
        console.log(req.body);
        var note = new Note({
            content: req.body.content,
        })
        note.save(function (err) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                console.log('successfully added new note!');
                res.redirect('/notes');
            }
        })
    },
    remove: function (req, res) {
        console.log("entered controller");
        console.log(req.params.id);
        Note.remove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            }
            else {
                console.log('successfully deleted note!');
                res.redirect(303,'/notes');
            }
        })
    },
    show_one: function (req, res) {
        Note.findOne({ _id: req.params.id }, function (err, note) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                console.log('successfully found the note!');
                res.json(note);
            }
        })
    },
    update: function (req, res) {
        console.log(req.params.id);
        console.log(req.body);
        Note.update({ _id: req.params.id }, { $set: { content: req.body.content} }, function (err) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                console.log('successfully updated the note!');
                res.redirect(303, '/notes');
            }
        })
    }



}