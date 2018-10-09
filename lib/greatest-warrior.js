

const ranks = ['Pushover', 'Novice', 'Fighter', 'Warrior', 'Veteran', 'Sage', 'Elite', 'Conqueror', 'Champion', 'Master', 'Greatest'];

module.exports = class Warrior {
  
  constructor() {
    this.lev = 1;
    this.exp = 100;
    this.ranking = 'Pushover';
    this.achievement = [];
  }

  battle(enemy_level) {
    if(enemy_level > 100 || enemy_level < 1) return 'Invalid level';

    const diff = this.lev - enemy_level;
    this.experiencer(diff);
    this.leveler();
    this.ranker();
    return this.responder(diff);
  }
  

  experiencer(diff) {
    if(diff === 0) this.exp += 10;
    else if(diff === -1) this.exp += 5;
    else if(diff < -1) this.exp += 0;
    else if(diff > 1) this.exp += (20 * diff * diff);

    if(this.exp > 10000) this.exp = 10000;
  }
  leveler() {
    this.lev = Math.floor(this.exp / 100);
    if(this.lev > 100) this.lev = 100;
  }
  ranker() {
    const index = Math.floor(this.exp / 1000);
    this.ranking = ranks[index];
  }
  responder(diff) {    
    if(diff >= 2) return 'Easy fight';
    else if(diff === 1 || diff === 0) return 'A good fight';
    else if(diff < 0) return 'An intense fight';
    else if(diff <= -5) return 'You\'ve been defeated';
  }
  training(event) {
    const [desc, exp, min] = event;
    if(this.lev >= min){
      this.exp += exp;
      this.achievement.push(desc);
      return desc;
    }
    else return 'Not strong enough';
  }

  level() {
    return this.lev;
  }
  rank() {
    return this.ranking;
  }
  experience() {
    return this.exp;
  }
  achievements() {
    return this.achievement;
  }
  
};

