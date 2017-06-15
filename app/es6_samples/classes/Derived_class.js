/**
 * Created by chetan on 5/6/17.
 */

class FatFreeFood extends Food {

    constructor (name, protein, carbs) {
        super(name, protein, carbs, 0);
    }

    print () {
        super.print();
        console.log(`Would you look at that -- ${this.name} has no fat!`);
    }

}

const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);
fat_free_yogurt.print(); // 'Greek Yogurt | 26g P :: 16g C :: 0g F  /  Would you look at that -- Greek Yogurt has no fat!'

