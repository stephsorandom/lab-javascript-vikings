// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage (theDamage) {
         this.health -= theDamage;
       }   
}
let rambo = new Soldier(500, 10)
rambo.receiveDamage(99)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
        
    
    receiveDamage(theDamage) {
      this.health -= theDamage;
      if (this.health > 0) {
          return `${this.name} has received ${theDamage} points of damage`
      } else {
          return `${this.name} has died in act of combat`
      }
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}






// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A ${this.name} has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
        
    }
}



// War
class War {
    vikingArmy = [];
    saxonArmy = [];
   addViking(pike) {
    this.Viking.push(pike);
   } 
   addSaxon(arrow) {
    this.Saxon.push(arrow);
   }
   vikingAttack() {

   }
   saxonAttack() {

   }
   showStatus() {

   }
}

let viking = new Viking('John', 250, 60)
let saxon = new Saxon(69, 100)
let war = new War()

newWar.addViking(viking)
newWar.addSaxon(saxon)