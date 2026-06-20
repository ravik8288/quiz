(function () {
  "use strict";

  const adManager = window.TWITQUIZ_ADS.createAdManager(window.QUIZ_CONFIG.ads);
  const resultKey = "quizmaster_category_result";
  const creditedKey = "quizmaster_category_reward_credited";
  const coinKey = "quizmaster_coins";
  let result;

  try {
    result = JSON.parse(sessionStorage.getItem(resultKey));
  } catch {
    result = null;
  }

  if (!result) {
    window.location.replace("start.html");
    return;
  }

  const accuracy = result.total > 0 ? result.correct / result.total : 0;
  const reward = accuracy > 0.5 ? 2000 : window.QUIZ_CONFIG.completionCoins;
  let coins = Number.parseInt(localStorage.getItem(coinKey), 10) || 0;
  const creditId = `${result.category}:${result.setId || "default"}:${result.score}:${result.correct}:${result.wrong}`;
  if (sessionStorage.getItem(creditedKey) !== creditId) {
    coins += reward;
    localStorage.setItem(coinKey, String(coins));
    sessionStorage.setItem(creditedKey, creditId);
  }

  document.getElementById("scoreCoins").textContent = coins;
  document.getElementById("scoreReward").textContent = reward;
  document.getElementById("scoreCategory").textContent = result.title;
  document.getElementById("scoreValue").textContent = result.score;
  document.getElementById("scoreCorrect").textContent = `${result.correct}/${result.total}`;
  document.getElementById("scoreWrong").textContent = result.wrong;
  adManager.display("top", "score-ad-top");
  adManager.display("middle", "score-ad-middle");
})();
