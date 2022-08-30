class Ninja {
    constructor(name, health=100) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        // return this;
    }

    showStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Strength: ${this.strength}`)
        // return this;
    }

    drinkSake(){
        console.log("DRANK SAKEBOM")
        this.health += 10;
        // return this;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        if(this.wisdom > 5){     
            this.drinkSake();
            console.log("What one programmer can do in one month, two programmers can do in two months.");
        }
    }
}

const superSensei = new Sensei("Master Splinter");
// superSensei.showStats();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"