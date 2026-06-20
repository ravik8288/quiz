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

  // Initialize H5 Games Ads configuration
  if (typeof adConfig === 'function') {
    adConfig({
      preloadAdBreaks: 'on',
      sound: 'on',
      onReady: function () {
        console.log('H5 Games Ads initialized and ready');
      }
    });
  }

  function showLoader() {
    const loader = document.getElementById("adLoaderModal");
    if (loader) {
      loader.style.visibility = "visible";
      loader.style.opacity = "1";
    }
  }

  function hideLoader() {
    const loader = document.getElementById("adLoaderModal");
    if (loader) {
      loader.style.visibility = "hidden";
      loader.style.opacity = "0";
    }
  }

  function claimReward() {
    claimButton.disabled = true;
    showLoader();

    // 1.5s buffer for ad to preload
    setTimeout(() => {
      if (typeof adBreak !== "function") {
        console.error("adBreak not available");
        hideLoader();
        claimButton.disabled = false;
        return;
      }

      let adShown = false;
      let callbackFired = false;

      adBreak({
        type: "reward",
        name: "claim_coins",
        beforeReward: function (showAdFn) {
          console.log("Ad ready, showing now...");
          adShown = true;
          hideLoader();
          showAdFn();
        },
        adViewed: function () {
          callbackFired = true;
          addCoins(config.rewardedCoins);
          closePopup();
        },
        adDismissed: function () {
          callbackFired = true;
          console.log("Ad dismissed - closing popup");
          hideLoader();
          closePopup();
        },
        adBreakDone: function (placementInfo) {
          console.log("adBreakDone status:", placementInfo ? placementInfo.breakStatus : "unknown");
          hideLoader();
          
          if (adShown) {
            closePopup();
          } else if (!adShown && !callbackFired) {
            console.log("No ad served - enabling claim button for retry");
            claimButton.disabled = false;
          }
        }
      });
    }, 1500);
  }

  closeButton.addEventListener("click", closePopup);
  claimButton.addEventListener("click", claimReward);

  // A new quiz can award a new completion reward.
  document.querySelector(".play_now_btn").addEventListener("click", () => {
    sessionStorage.removeItem(stateKey);
    sessionStorage.removeItem(creditedKey);
  });
})();
