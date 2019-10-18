const mongoose = require('mongoose');

var Thief = mongoose.model('Thief', {
    name: { 
        type: String 
    },
    area: { 
        type: String 
    },
    crime: { 
        type: String 
    },
    phone: { 
        type: String 
    }
});

module.exports = { Thief };