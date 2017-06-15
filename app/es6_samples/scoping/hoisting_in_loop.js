/**
 * Created by chetan on 4/6/17.
 */
"use strict";

var languages = ['Danish', 'Norwegian', 'Swedish'];

// Pollutes global namespace. Ew!
for (var i = 0; i < languages.length; i += 1) {
    console.log(languages[i] +'is a Scandinavian language.');
}

console.log(i); // 4


//let also has the major advantage of rebinding the loop variable on every
// iteration, so each loop gets its own copy, rather than sharing the globally-scoped variable.

// Simple & Clean
for (var i = 1; i < 6; i += 1) {
    setTimeout(function() {
        console.log("I've waited " + i + " seconds!");
    }, 1000 * i);
}