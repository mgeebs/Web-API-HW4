//var ActorSchema = require('./Actors');//actor schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GENRES = ['Action','Adventure','Horror','Comedy','Drama','Fantasy','Mystery','Thriller','Western'];

// movie schema
var MovieSchema = new Schema({
    title: {type: String, required: true, unique: true},
    year: {type: Number, require: true},
    genre: {type: String, enum: GENRES, required: true},
    actors: {
        type: [{
            actorName: {type: String, required: true},
            characterName: {type: String, required: true}
        }],
        required: true,
        validate: {
            validator: function (v) {
                return v.length >= 3;
            },
            message: 'You must have at least 3 actors!'
        }
    }
});



// return the model
module.exports = mongoose.model('Movie', MovieSchema);


///USE THIS TO MAKE THE MOVIE MODEL, COPY IT AND ALTER FOR MOVIES