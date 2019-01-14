// Soldier
function Soldier(health, strength) {
   this.health = 300;
   this.strength = 150;
   Soldier.prototype.attack = function attack (){
    return this.strength;
    }
    Soldier.prototype.receiveDamage = function receiveDamage(damage){
        
        this.health = health-damage;
    }

}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    Viking.prototype.receiveDamage = function receiveDamage(damage){
        this.health = health-damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${name} has died in act of combat`;
        }
    }
    Viking.prototype.battleCry = function battleCry(){
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health,strength) {
    this.health = health;
    this.strength = strength;
    Saxon.prototype.receiveDamage = function receiveDamage(damage){
        this.health = health-damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    var randSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var randViking = Math.floor(Math.random()*this.vikingArmy.length);

    War.prototype.addViking = function addViking(viking){
        this.vikingArmy.push(viking);
    }
    War.prototype.addSaxon = function addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    War.prototype.vikingAttack = function vikingAttack(){
           
        var status = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength);
        if (this.saxonArmy[randSaxon].health <= 0) {
            this.saxonArmy.shift(this.saxonArmy[randSaxon])
        }
        return status  
    }
    War.prototype.saxonAttack = function saxonAttack(){
        var status = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].strength);
        if (this.vikingArmy[randViking].health <= 0) {
            this.vikingArmy.shift(this.vikingArmy[randViking])
        } 
        return status
    }
    War.prototype.showStatus = function showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0 ){
            return "Saxons have fought for their lives and survive another day...";
        } else if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1 ) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    
}
