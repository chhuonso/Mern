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
}


class Effect extends Card {
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }


}

