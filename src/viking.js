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
    let luckySoldier = getRandomInt(this.vikingArmy.length)
    let unluckySoldier = getRandomInt(this.saxonArmy.length)
    this.saxonArmy[unluckySoldier].receiveDamage(this.vikingArmy[luckySoldier].strength)
   
    if(this.saxonArmy[unluckySoldier].health <=0) {
        this.saxonArmy.splice(unluckySolider,1);
        return `A Saxon has died in combat`
    } else {
        return `A Saxon has received ${this.vikingArmy[luckySoldier].strength} of damage!`
    }
    }



   saxonAttack() {
    let luckySoldier = getRandomInt(this.saxonArmy.length)
    let unluckySoldier = getRandomInt(this.vikingArmy.length)
    this.vikingArmy[unluckySoldier].receiveDamage(this.saxonArmy[luckySoldier].strength)
   
    if(this.vikingArmy[unluckySoldier].health<=0) 
    {
        this.vikingArmy.splice(unluckySolider,1);
        return `A Viking has fallen`
    } else {
        return `${this.vikingArmy[luckySoldier].name} has received ${this.saxonArmy[unluckySoldier].name} of damage!`
    }
    }
   }

   
   showStatus() {
    if()
   }
}

let viking = new Viking ('Ragnar', 300, 300)
let saxon = new Saxon (200, 250)

let war = new War()

newWar.addViking(viking)
newWar.addSaxon(saxon)

// newWar.vikingAttack()
function getRandomInt (max) {
    return Math.floor(Math.random()*Math.floor(max))
}
