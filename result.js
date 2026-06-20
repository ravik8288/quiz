(function () {
  "use strict";

  const config = window.QUIZ_CONFIG;
  const adManager = window.TWITQUIZ_ADS.createAdManager(config.ads);
  const stateKey = "quizmaster_active_quiz";
  const coinKey = "quizmaster_coins";
  const creditedKey = "quizmaster_result_credited";

  const popup = document.getElementById("rewardPopup");
  const closeButton = document.getElementById("closeReward");
  const claimButton = document.getElementById("claimReward");
  const rewardAmount = document.getElementById("rewardAmount");
  const coinReward = document.getElementById("coinReward");
  const topAd = document.getElementById("ad-top");

  rewardAmount.textContent = config.rewardedCoins;
  coinReward.textContent = config.completionCoins;
  adManager.display("top", "ad-top");

  if (!sessionStorage.getItem(creditedKey)) {
    addCoins(config.completionCoins);
    sessionStorage.setItem(creditedKey, "1");
  }

  function addCoins(amount) {
    const current = Number.parseInt(localStorage.getItem(coinKey), 10) || 0;
    localStorage.setItem(coinKey, String(current + amount));
  }

  function closePopup() {
    popup.hidden = true;
  }

  async function claimReward() {
    claimButton.disabled = true;
    claimButton.textContent = "Loading ad...";

    const granted = await adManager.showRewarded();
    if (granted) {
      addCoins(config.rewardedCoins);
      closePopup();
      return;
    }

    claimButton.disabled = false;
    claimButton.textContent = "Ad unavailable — try again";
  }

  closeButton.addEventListener("click", closePopup);
  claimButton.addEventListener("click", claimReward);

  // A new quiz can award a new completion reward.
  document.querySelector(".play_now_btn").addEventListener("click", () => {
    sessionStorage.removeItem(stateKey);
    sessionStorage.removeItem(creditedKey);
  });
})();
