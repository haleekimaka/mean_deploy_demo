var notes = require('../controllers/notes.js');
var path = require('path');

module.exports = function (app) {
    app.get('/notes', notes.show_all);

    app.get('/notes/:id', notes.show_one);

    app.post('/notes', notes.add);

    app.put('/notes/:id', notes.update);

    app.delete('/notes/:id', notes.remove);

    app.all("*", (request, response) => { response.sendFile(path.resolve("./anonymous/dist/index.html")) });
}