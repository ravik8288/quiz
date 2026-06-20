(function () {
  "use strict";

  window.TWITQUIZ_ADS = {
    createAdManager(adsConfig) {
      return {
        display(position, elementId) {
          const el = document.getElementById(elementId);
          if (!el) return;
          el.innerHTML = `<div class="ad-placeholder">Demo Ad [${position.toUpperCase()}]</div>`;
        },
        showRewarded() {
          return new Promise((resolve) => {
            // Simulated 1-second ad viewing experience
            setTimeout(() => {
              resolve(true);
            }, 1000);
          });
        }
      };
    }
  };

  window.QUIZ_CONFIG = {
    pointsPerCorrectAnswer: 100,
    completionCoins: 100,
    rewardedCoins: 100,
    answerDelayMs: 450,
    interstitialSeconds: 5,
    showInterstitialBetweenQuestions: true,

    ads: {
      provider: "demo",
      top: "",
      middle: "",
      interstitial: "",
      rewarded: ""
    },

    funFact: "Mahendra Singh Dhoni holds the distinction of being one of the most successful captains in IPL history.",

    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
      },
      {
        question: "Who starred in the movie 'Fight Club'?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Matt Damon", "Tom Cruise"],
        correct: "Brad Pitt"
      }
    ]
  };
})();
