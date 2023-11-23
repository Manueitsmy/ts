let message: string = 'Hello World !';
console.log(message);

class Hero {
   private name: string;
   private power: number;
   private life: number;
   private weapon!: Weapon;

constructor(name: string, power: number, life: number){
    this.name = name;
    this.power = power;
    this.life = life;
};

privName(): string {
    return this.name;
}
privPower(): number {
    return this.power;
    }
privLife(): number {
    return this.life;
    }

attack(opponent: Hero){
opponent.life = opponent.life - this.power;
}

isAlive(): boolean {
    return this.life > 0;
}
}

class Weapon {
name: string;

constructor (name:string){
    this.name = name;
}
}

class HeroAxe extends Hero {
    constructor(name: string, power: number, life: number){
    super(name, power, life);
    }
attack(opponent: Hero): void {
    if (opponent instanceof HeroSword){
    opponent.privLife() = opponent.privLife() - this.privPower()*2;
    // faire une autre méthode (setter)
    }
}
}

class HeroSword extends Hero {
attack(opponent: Hero): void {
    
}
}

class HeroSpear extends Hero {
attack(opponent: Hero): void {
    
}
}

const heroOne = new Hero("Kriss", 20, 100);
const heroTwo = new Hero("Davy", 15, 110);
heroOne.attack(heroTwo);
heroTwo.attack(heroOne);
console.log(heroOne);
console.log(heroTwo);