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
         if (this.health -= receiveDamage);
         return this.health;
    }   
}
    

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
        
    
    receiveDamage(theDamage) {
        if (i=0, theDamage > 0, i++);
        return this.health;
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}






// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        if (this.health > 0) {
            return 'A Saxon has received ${theDamage} points of damage';
        } else {
            return 'A Saxon has died in combat';
        }
        
    }
}



// War
class War {
    vikingArmy = [];
    saxonArmy = [];
   addViking(Viking) {
    this.Viking.push(Viking);
   } 
   addSaxon() {

   }
   vikingAttack() {

   }
   saxonAttack() {

   }
   showStatus() {

   }
}