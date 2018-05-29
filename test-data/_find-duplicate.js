const index = require("./_index.js");
const alpha = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function findThing(obj, key) {
    var processed = [];
    
    for(var i = 0; alpha[i] != key; i++) {
        processed = processed.concat(index[alpha[i]]);
    }

    for(var i = 0; i < processed.length; i++) {
        for(var j = 0; j < index[key].length; j++) {
            if(processed[i] === index[key][j]) {
                console.log(processed[i]);
            }
        }
    }
}

findThing(index, "b");