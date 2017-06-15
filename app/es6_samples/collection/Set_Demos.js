/**
 * Created by chetan on 9/6/17.
 */
"use strict";

// Constructor
let scotch_collection = new Set();

// BASIC API METHODS
// Set.prototype.add (O) :: Add an object, O, to the set.
scotch_collection.add('Lagavulin 18');
scotch_collection.add('The Dalmore');

// You can also create a set from an array.
scotch_collection = new Set(['Lagavulin 18', 'The Dalmore']);

// All sets have a length property. This tells you how many objects are stored.
//   BE SURE TO USE 'size', NOT 'length', when you work with Map and Set.
console.log(scotch_collection.size); // 2

// Set.prototype.has(O) :: Return true if set contains the object, O. Otherwise, return false.
console.log(scotch_collection.has('The Dalmore')); // true
console.log(scotch_collection.has('Glenfiddich 18')); // false

// Set.prototype.delete(O) :: Remove the object, O, from the set. Return true if successful; false if O isn't in the set.
scotch_collection.delete('The Dalmore'); // true -- breaks my heart

// Set.prototype.clear() :: Remove all objects from the set.
scotch_collection.clear();
console.log( scotch_collection ); // Set {} -- long night.

/* ITERATOR METHODS
 * Sets provide a number of ways to loop through their keys and values.
 *  Let's reset our collection, and then explore. */
scotch_collection.add('Lagavulin 18');
scotch_collection.add('Glenfiddich 18');

/* Set.prototype.forEach(callback[, thisArg]) :: Execute a function, callback,
 *  on every key-value pair in the set. You can set the value of 'this' inside
 *  the callback by passing a thisArg, but that's optional and seldom necessary. */
scotch_collection.forEach(function (scotch) {
    console.log(`Excuse me while I sip this ${scotch}.`);
});

// Set.prototype.values() :: Returns an iterator over the values of the set.
let scotch_names = scotch_collection.values();
for (let name of scotch_names) {
    console.log(`I just drank ${name} . . . I think.`);
}

// Set.prototype.keys() :: For sets, this is IDENTICAL to the values function.
scotch_names = scotch_collection.keys();
for (let name of scotch_names) {
    console.log(`I just drank ${name} . . . I think.`);
}

/* Set.prototype.entries() :: Returns an iterator over [value, value] pairs,
 *   provided as an array with two entries. This is a bit redundant, but it's
 *   done this way to maintain interoperability with the Map API. */
const entries = scotch_collection.entries();
for (let entry of entries) {
    console.log(`I got some ${entry[0]} in my cup and more ${entry[1]} in my flask!`);
}