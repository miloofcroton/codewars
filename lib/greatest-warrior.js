

const ranks = ['Pushover', 'Novice', 'Fighter', 'Warrior', 'Veteran', 'Sage', 'Elite', 'Conqueror', 'Champion', 'Master', 'Greatest'];

module.exports = class Warrior {
  
  constructor() {
    this.lev = 1;
    this.experience = 100;
    this.ranking = 'Pushover';
    this.achievement = [];
  }

  battle(enemy_level) {
    if(enemy_level > 100 || enemy_level < 1) return 'Invalid level';

    const diff = this.lev - enemy_level;
    this.experiencer(diff);
    this.leveler();
    this.ranker();
    this.responser(diff);
  }
  

  experiencer(diff) {
    if(diff === 0) this.experience += 10;
    else if(diff === -1) this.experience += 5;
    else if(diff < -1) this.experience += 0;
    else if(diff > 1) this.experience += (20 * diff * diff);

    if(this.experience > 10000) this.experience = 10000;
  }
  leveler() {
    this.lev = Math.floor(this.experience / 100);
    if(this.lev > 100) this.lev = 100;

  }
  ranker() {
    const index = Math.floor(this.experience / 1000) - 1;
    this.ranking = ranks[index];
  }
  responser(diff) {

    console.log(diff);
    
    if(diff >= 2) return 'Easy fight';
    else if(diff === 1 || diff === 0) return 'A good fight';
    else if(diff < 0) return 'An intense fight';
    else if(diff <= -5) return 'You\'ve been defeated';
  }
  training(event) {
    const [desc, exp, min] = event;
    if(this.lev >= min){
      this.experience += exp;
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
    return this.experience;
  }
  achievements() {
    return this.achievement;
  }
  
};

