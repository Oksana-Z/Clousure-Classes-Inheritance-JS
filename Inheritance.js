class Fighter {
  constructor (fighter) {
    this._name = fighter.name;
    this._attack = fighter.attack;
    this._hitpoints = fighter.hitpoints;
    this._totalhitpoints = this._hitpoints
  }

  getHitpoints() {
    return this._hitpoints;
  }

  setHitpoints(hitpointsToSet) {
    this._hitpoints = hitpointsToSet;
  }

  getTotalHitpoints() {
    return this._totalhitpoints;
  }

  setTotalHitpoints(totalhitpointsToSet) {
    this._totalhitpoints = totalhitpointsToSet;
  }

  getAttack() {
    return this._attack;
  }

  setAttack(attackToSet) {
    this.attack = attackToSet;
  }

  fight(opponent){
    if (opponent.isAlive()) {
      opponent.takeAttack(this._attack);
    }
  }

  isAlive() {
    return this._hitpoints > 0;
  }

  takeAttack(attack) {
    this._hitpoints -= attack;
  }
}

class Champion extends Fighter {

  constructor(fighter) {
    super(fighter);
    this.isDefence = false;
  }
  
  rest() {
    this._hitpoints += 5;
  }

  defence() {
    this.isDefence = true;
  }

  takeAttack(attack) {
    if(this.isDefence) {
      return
    } else {
      this._hitpoints -= attack;
    }
  }

  fight(opponent) {
    if (opponent.isAlive()) {
      opponent.takeAttack(this._attack);
      this.makeKill(opponent)
    }
  }

  makeKill(opponent) {
    if (!opponent.isAlive()) {
      this._attack += 1;
    }
  }
}

class Monster extends Fighter {
  constructor(fighter) {
    super(fighter);
    this.isEnrage = false;
    this.enragedAttacks = 0;
  }

  enrage() {
    this.isEnrage = true;
  }

  fight(opponent){
    if (this.isEnrage && this.enragedAttacks >= 2) {
      this.isEnrage = false;
      this.enragedAttacks = 0;
    }
    if (opponent.isAlive()) {
      opponent.takeAttack(
        this.isEnrage ? this._attack * 2 : this._attack
      );
      if (this.isEnrage) {
        this.enragedAttacks += 1;
      }
      this.makeKill(opponent);
    }
  }

  makeKill(opponent) {
    if (!opponent.isAlive()) {
      this._hitpoints += Math.floor(.25 * opponent.getTotalHitpoints());
      this._totalHitpoints += Math.floor(.1 * opponent.getTotalHitpoints());
    }
  }
}

const heracles = new Champion({name: 'Heracles', attack: 10, hitpoints: 50});
const boar = new Monster({name: 'Erymanthian Boar', attack: 5, hitpoints: 100});






console.log(heracles.getHitpoints()) // 50
boar.enrage()
boar.fight(heracles)
boar.fight(heracles)
boar.fight(heracles)
console.log(heracles.getHitpoints()) // 25
boar.fight(heracles)
console.log(heracles.getHitpoints()) // 20
boar.fight(heracles)
boar.fight(heracles)
boar.fight(heracles)
boar.fight(heracles) 
boar.fight(heracles)
boar.fight(heracles) 
console.log(boar.getHitpoints()) // 112 