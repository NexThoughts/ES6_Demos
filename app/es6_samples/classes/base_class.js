/**
 * Created by chetan on 5/6/17.
 */

// Food is a base class
class Food {

    constructor (name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
/*
 When defining methods, you use shorthand method definitions;
 Unlike when creating objects, you do not separate method definitions in class
 bodies with commas; and
 You can refer to properties on instances of the class directly (Line A).(chicken_breast.protein

 */
    toString () {
        return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
    }

    print () {
        console.log( this.toString() );
    }
}

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);

chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
console.log(chicken_breast.protein); // 26 (LINE A)