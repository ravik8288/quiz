(function () {
  "use strict";

  window.TWITQUIZ_ADS = {
    createAdManager(adsConfig) {
      return {
        display(position, elementId) {
          const el = document.getElementById(elementId);
          if (!el) return;

          // If the element already contains an ins.adsbygoogle tag, do not overwrite it
          if (el.querySelector('ins.adsbygoogle')) {
            return;
          }

          // Dynamically load Google AdSense script once if not already present
          if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
            const script = document.createElement("script");
            script.async = true;
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1484482880870768";
            script.crossOrigin = "anonymous";
            document.head.appendChild(script);
          }

          // List of Google AdSense Slots
          const slots = [
            { name: "ssd1", slot: "2972053355" },
            { name: "ssd2", slot: "9931876664" },
            { name: "ssd3", slot: "8618794990" },
            { name: "ssd4", slot: "2177846433" }
          ];

          // Pick an AdSense slot randomly
          const selected = slots[Math.floor(Math.random() * slots.length)];

          // Inject the AdSense markup matching the tags
          el.innerHTML = `<!-- ${selected.name} -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-1484482880870768"
                 data-ad-slot="${selected.slot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>`;

          // Trigger the AdSense push initialization
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("AdSense push failed: ", e);
          }
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
    interstitialSeconds: 0,
    showInterstitialBetweenQuestions: false,

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
      }
    ]
  };
})();
