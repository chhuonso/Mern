class Card {
    constructor(name, cost){
        this.name = name;
        this. cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, res, power){
        super(name, cost);
        this.res = res;
        this.power = power;
    }

    attack(target){
        target.res -= this.power;
        if(target.res < 0){
            target.res = 0;
        }
    }
    showStats() {
        console.log("Current stats: " + this.res);
    }
}


class Effect extends Card {
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    enhance(unit) {
        console.log(this.text);
        unit.res += this.mag;
    }

}

// Unit cards
const unit1 = new Unit("Red Belt Ninha", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninha", 4, 5, 4);

// Effect cards
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience",-2);
const effect3 = new Effect("Pair Programming", 3, "    increase target's power by 2" , "power", +2);



unit1.attack(unit2);
unit2.showStats();
effect3.enhance(unit2);
unit2.showStats();
