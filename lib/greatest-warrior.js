



const ranks = ['Pushover', 'Novice', 'Fighter', 'Warrior', 'Veteran', 'Sage', 'Elite', 'Conqueror', 'Champion', 'Master', 'Greatest'];

module.exports = class Warrior {


  
  constructor() {
    this.spies = new Map();
    this.level = 1;
    this.experience = 100;
    this.rank = 'Pushover';
  }

  battle(opponent) {
    if(opponent.level > 100) return 'Invalid level';

    const diff = this.level - opponent.level;
    if(diff <= -5) return 'You\'ve been defeated';
    else if(opponent.level === this.level) this.experience += 10;
    else if(opponent.level === this.level - 1) this.experience += 5;
    else if(opponent.level < this.level - 1) this.experience += 0;
    else if(opponent.level > this.level) this.experience += (20 * diff * diff);


    if(diff >= 2) return 'Easy fight';
    else if(diff === 1 || diff === 0) return 'Easy fight';
    else if(diff < 0) return 'An intense fight';

  }



  training(data) {
    const [desc, exp, min] = data;
    if(this.level >= min){
      this.experience += exp;
      return desc;
    }
    else {
      return 'Not strong enough';
    }

  }

  level() {
    return this.level;
  }
  rank() {
    return this.rank;
  }
  experience() {
    return this.experience;
  }
  achievements() {

  }
  





};

