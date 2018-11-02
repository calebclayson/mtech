module.exports = class ScoringService {
  calculateScoreRelativeToPar(par, scores) {
    return scores.map(score => (score ? score : 0)).reduce((a, b) => a + b, 0) - par;
  }
  calculateOutScore(scores) {
    if (!this.calculateIfNull(scores)) {
      let outScore = 0;
      for (let i = 0; i < scores.length / 2; i++) {
        outScore += scores[i];
      }
      return outScore;
    } else {
      return 0;
    }
  }
  calculateInScore(scores) {
    if (!this.calculateIfNull(scores)) {
      let inScore = 0;
      let halfLength = scores.length/2 -1;
      for (let i = scores.length - 1; i > halfLength; i--) {
        inScore += scores[i];
      }
      return inScore;
    } else {
      return 0;
    }
  }
  calculateTotalScore(scores) {
    if (!this.calculateIfNull(scores)) {
      let total = 0;
      for (let i = 0; i < scores.length; i++) {
        total += scores[i];
      }
      return total;
    } else {
      return 0;
    }
  }
  calculateIfNull(scores) {
    let empty = true;
    for(let i = 0; i < scores.length; i++) {
      if(scores[i] != null){
        empty = false;
      }
    }
    return empty;
  }
};