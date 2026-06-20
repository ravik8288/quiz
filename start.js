(function () {
  "use strict";

  const config = window.QUIZ_CONFIG;
  const adManager = window.TWITQUIZ_ADS.createAdManager(config.ads);
  const coinKey = "quizmaster_coins";
  let pendingContest = null;

  const categories = [
    { id: "all", label: "ALL" },
    { id: "business", label: "BUSINESS AND ECONOMICS" },
    { id: "history", label: "HISTORY" },
    { id: "math", label: "MATH AND LOGIC" },
    { id: "world", label: "WORLD" },
    { id: "travel", label: "TRAVEL" },
    { id: "entertainment", label: "ENTERTAINMENT" },
    { id: "sports", label: "SPORTS" }
  ];

  const contests = [
    { category: "business", subtitle: "Business And Economics | Companies", icon: "💼", prize: 2000, fee: 100 },
    { category: "history", subtitle: "History | War", icon: "📜", prize: 2000, fee: 100 },
    { category: "sports", subtitle: "Sports | ICC World Cup", icon: "⚽", prize: 2000, fee: 100 },
    { category: "math", subtitle: "Math And Logic | Puzzles", icon: "🔢", prize: 2000, fee: 100 },
    { category: "entertainment", subtitle: "Entertainment | Movies", icon: "🎬", prize: 2000, fee: 100 },
    { category: "world", subtitle: "World | Geography", icon: "🌍", prize: 2000, fee: 100 },
    { category: "travel", subtitle: "Travel | Famous Places", icon: "✈️", prize: 2000, fee: 100 }
  ];

  const elements = {
    sidebar: document.getElementById("sidebar"),
    overlay: document.getElementById("sidebarOverlay"),
    menu: document.getElementById("menuBtn"),
    closeMenu: document.getElementById("closeSidebar"),
    categoryScroll: document.getElementById("categoryScroll"),
    categoryTabs: document.getElementById("categoryTabs"),
    quizList: document.getElementById("quizList"),
    coinCount: document.getElementById("coinCount"),
    coinButton: document.getElementById("coinButton"),
    coinAlert: document.getElementById("coinAlert"),
    cancel: document.getElementById("cancelBtn"),
    watch: document.getElementById("watchBtn"),
    popupReward: document.getElementById("popupReward")
  };

  function getCoins() {
    return Number.parseInt(localStorage.getItem(coinKey), 10) || 0;
  }

  function setCoins(value) {
    localStorage.setItem(coinKey, String(Math.max(0, value)));
    elements.coinCount.textContent = Math.max(0, value);
  }

  function addCoins(amount) {
    setCoins(getCoins() + amount);
  }

  function openSidebar() {
    elements.sidebar.classList.add("open");
    elements.overlay.classList.add("active");
    elements.sidebar.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    elements.sidebar.classList.remove("open");
    elements.overlay.classList.remove("active");
    elements.sidebar.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderTabs() {
    categories.forEach((category, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `category-tab${index === 0 ? " active" : ""}`;
      button.dataset.category = category.id;
      button.textContent = category.label;
      button.addEventListener("click", () => filterContests(category.id, button));
      elements.categoryTabs.appendChild(button);
    });
  }

  function createContestCard(contest, index) {
    const card = document.createElement("a");
    card.href = `play-quiz.html?cate=${encodeURIComponent(contest.category)}`;
    card.className = "start-quiz-card";
    card.dataset.category = contest.category;
    card.innerHTML = `
      <div class="quiz-card-icon">${contest.icon}</div>
      <div class="contest-details">
        <p class="contest-category">${contest.subtitle}</p>
        <h3>Play and Win <span>${contest.prize}</span></h3>
        <span class="entry-fee">Entry Fee 🪙 <span>${contest.fee}</span></span>
      </div>
      <div class="play-circle" aria-hidden="true">▶</div>`;
    card.addEventListener("click", event => {
      event.preventDefault();
      attemptContest(contest);
    });

    elements.quizList.appendChild(card);

    if (index === 1) {
      const ad = document.createElement("div");
      ad.className = "ads-container start-list-ad";
      ad.innerHTML = `
        <div class="tops-ads ads">
          <div id="start-ad-middle" class="custom-gpt-ad"></div>
          <div class="ads-label">Advertisement</div>
        </div>`;
      elements.quizList.appendChild(ad);
    }
  }

  function renderContests() {
    contests.forEach(createContestCard);
  }

  function filterContests(category, activeButton) {
    elements.categoryTabs.querySelectorAll(".category-tab").forEach(tab => {
      tab.classList.toggle("active", tab === activeButton);
    });
    elements.quizList.querySelectorAll(".start-quiz-card").forEach(card => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  }

  function attemptContest(contest) {
    pendingContest = contest;
    const coins = getCoins();

    if (coins < contest.fee) {
      elements.coinAlert.hidden = false;
      return;
    }

    setCoins(coins - contest.fee);
    startContest(contest);
  }

  function startContest(contest) {
    const attemptId = window.crypto?.randomUUID
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    sessionStorage.setItem("quizmaster_selected_category", contest.category);
    sessionStorage.removeItem("quizmaster_active_quiz");
    sessionStorage.removeItem("quizmaster_result_credited");
    sessionStorage.removeItem("quizmaster_category_reward_credited");
    sessionStorage.removeItem("quizmaster_selected_set");
    window.location.assign(
      `play-quiz.html?cate=${encodeURIComponent(contest.category)}&attempt=${encodeURIComponent(attemptId)}`
    );
  }

  function showCoinReward() {
    elements.coinAlert.hidden = false;
    pendingContest = null;
  }

  elements.menu.addEventListener("click", openSidebar);
  elements.closeMenu.addEventListener("click", closeSidebar);
  elements.overlay.addEventListener("click", closeSidebar);
  elements.cancel.addEventListener("click", () => {
    elements.coinAlert.hidden = true;
    pendingContest = null;
  });
  elements.watch.addEventListener("click", () => {
    elements.watch.disabled = true;
    elements.watch.textContent = "Loading ad...";
    window.setTimeout(() => {
      addCoins(config.rewardedCoins);
      elements.coinAlert.hidden = true;
      elements.watch.disabled = false;
      elements.watch.textContent = "▶ Watch Ads";
      if (pendingContest) {
        const contest = pendingContest;
        pendingContest = null;
        attemptContest(contest);
      }
    }, 900);
  });
  elements.coinButton.addEventListener("click", showCoinReward);
  document.getElementById("scrollLeft").addEventListener("click", () => {
    elements.categoryScroll.scrollBy({ left: -200, behavior: "smooth" });
  });
  document.getElementById("scrollRight").addEventListener("click", () => {
    elements.categoryScroll.scrollBy({ left: 200, behavior: "smooth" });
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeSidebar();
      elements.coinAlert.hidden = true;
    }
  });

  elements.popupReward.textContent = config.rewardedCoins;
  elements.coinCount.textContent = getCoins();
  adManager.display("top", "start-ad-top");
  renderTabs();
  renderContests();
  adManager.display("middle", "start-ad-middle");
})();
