let ScoringService = require("../js/scoring-service");

describe('ScoringService', () => {
  let scoringService;

  beforeEach(() => {
    scoringService = new ScoringService();
  });

  describe('calculateScoreRelativeToPar', () => {
    it('calculates under par score correctly', () => {
      let par = 72;
      let playerScores = Array(18).fill(3, 0, 18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(scoreRelativeToPar).toEqual(-18);
    });
    it('calculates over par score correctly', () => {
      let par = 72;
      let playerScores = Array(18).fill(5, 0, 18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(scoreRelativeToPar).toEqual(18);
    });
    it('returns a number', () => {
      let par = 72;
      let playerScores = Array(18).fill(5, 0, 18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(typeof scoreRelativeToPar).toEqual('number');
    });
    it('calculates even when no scores', () => {
      let par = 72;
      let playerScores = Array(18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(scoreRelativeToPar).toEqual(-72);
    });
  });
  describe('calculateOutScore', () => {
    it('returns a number', () => {
      let playerScores = Array(18).fill(5, 0, 18);
      let outScore = scoringService.calculateOutScore(playerScores);
      expect(typeof outScore).toEqual('number');
    });
    it('calculates even when no score', () => {
      let playerScores = Array(18);
      let outScore = scoringService.calculateOutScore(playerScores);
      expect(outScore).toEqual(0);
    });
    it('calculates score correctly', () => {
      let playerScores = [3, 4, 5, 9, 20, 10];
      let outScore = scoringService.calculateOutScore(playerScores);
      expect(outScore).toEqual(12);
    });
  });
  describe('calculateInScore', () => {
    it('returns a number', () => {
      let playerScores = Array(18).fill(5, 0, 18);
      let inScore = scoringService.calculateInScore(playerScores);
      expect(typeof inScore).toEqual('number');
    });
    it('calculates even when no score', () => {
      let playerScores = Array(18);
      let inScore = scoringService.calculateInScore(playerScores);
      expect(inScore).toEqual(0);
    });
    it('calculates score correctly', () => {
      let playerScores = [3, 4, 5, 9, 20, 10];
      let inScore = scoringService.calculateInScore(playerScores);
      expect(inScore).toEqual(39);
    });
  });
  describe('calculateTotalScore', () => {
    it('returns a number', () => {
      let playerScores = Array(18).fill(5, 0, 18);
      let total = scoringService.calculateTotalScore(playerScores);
      expect(typeof total).toEqual('number');
    });
    it('calculates even when no score', () => {
      let playerScores = Array(18);
      let total = scoringService.calculateTotalScore(playerScores);
      expect(total).toEqual(0);
    });
    it('calculates score correctly', () => {
      let playerScores = [3, 4, 5, 9, 20, 10];
      let total = scoringService.calculateTotalScore(playerScores);
      expect(total).toEqual(51);
    });
  });
});
