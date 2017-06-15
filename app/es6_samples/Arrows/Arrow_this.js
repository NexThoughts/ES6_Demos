/**
 * Created by chetan on 5/6/17.
 */

"use strict";
// let polyglot = {
//     name : "Michel Thomas",
//     languages : ["Spanish", "French", "Italian", "German", "Polish"],
//     introduce : function () {
//         this.languages.forEach((language) => {
//             console.log("My name is " + this.name + ", and I speak " + language + ".");
//     });
//     }
// }
/*
 Inside of introduce, this.name is undefined. Right outside of the callback,
 in our forEach loop, it refers to the polyglot object.
  Often, what we want in cases like this is for this within our inner function
   to refer to the same object that this refers to in the outer function.

 */
// const polyglot = {
//     name : "Michel Thomas",
//     languages : ["Spanish", "French", "Italian", "German", "Polish"],
//     introduce : function () {
//         // this.name is "Michel Thomas"
//         const self = this;
//         this.languages.forEach(function(language) {
//             // this.name is undefined, so we have to use our saved "self" variable
//             console.log("My name is " + self.name + ", and I speak " + language + ".");
//         });
//     }
// }

polyglot.introduce();


