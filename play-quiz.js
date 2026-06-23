(function () {
  "use strict";

  const config = window.QUIZ_CONFIG;
  const adManager = window.TWITQUIZ_ADS.createAdManager(config.ads);
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("cate") || "business";
  const attemptId = params.get("attempt") || "direct";
  const quizzes = window.CATEGORY_QUIZZES;
  const category = quizzes[requestedCategory] ? requestedCategory : "business";
  const categoryQuiz = quizzes[category];
  const selectedSetKey = "quizmaster_selected_set";
  const setHistoryKey = `quizmaster_set_history_${category}`;
  const resultKey = "quizmaster_category_result";
  const quiz = selectQuizSet();

  let current = 0;
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let secondsLeft = 180;
  let answered = false;
  let finished = false;
  let timerId;

  const elements = {
    title: document.getElementById("quizCategoryTitle"),
    timer: document.getElementById("timer"),
    correct: document.getElementById("correctScore"),
    wrong: document.getElementById("wrongScore"),
    count: document.getElementById("questionCount"),
    question: document.getElementById("playQuestionText"),
    options: document.getElementById("playOptions"),
    score: document.getElementById("scoreText"),
    fact: document.getElementById("playFunFact")
  };

  function selectQuizSet() {
    const sets = categoryQuiz.sets?.length
      ? categoryQuiz.sets
      : [{
          id: `${category}-default`,
          title: categoryQuiz.title,
          questions: categoryQuiz.questions
        }];

    try {
      const saved = JSON.parse(sessionStorage.getItem(selectedSetKey));
      if (saved?.category === category && saved?.attemptId === attemptId) {
        const existing = sets.find(set => set.id === saved.setId);
        if (existing) return existing;
      }
    } catch {
      sessionStorage.removeItem(selectedSetKey);
    }

    let history = [];
    try {
      const savedHistory = JSON.parse(localStorage.getItem(setHistoryKey));
      if (Array.isArray(savedHistory)) history = savedHistory;
    } catch {
      localStorage.removeItem(setHistoryKey);
    }

    const validIds = new Set(sets.map(set => set.id));
    history = history.filter(id => validIds.has(id));

    let available = sets.filter(set => !history.includes(set.id));
    if (available.length === 0) {
      history = [];
      available = [...sets];
    }

    const selected = available[Math.floor(Math.random() * available.length)];
    history.push(selected.id);
    localStorage.setItem(setHistoryKey, JSON.stringify(history));
    sessionStorage.setItem(selectedSetKey, JSON.stringify({
      category,
      attemptId,
      setId: selected.id
    }));
    return selected;
  }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderQuestion() {
    answered = false;
    const item = quiz.questions[current];
    elements.count.textContent = `Question ${current + 1}/${quiz.questions.length}`;
    elements.question.textContent = item.q;
    elements.options.replaceChildren();

    const shuffledOptions = shuffle(item.options);
    shuffledOptions.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "play-option";
      button.textContent = option;
      button.addEventListener("click", () => selectOption(button, item.answer));
      elements.options.appendChild(button);
    });
  }

  function selectOption(selected, answer) {
    if (answered) return;
    answered = true;
    const options = [...elements.options.querySelectorAll(".play-option")];
    options.forEach(option => {
      option.disabled = true;
      if (option.textContent === answer) option.classList.add("correct");
    });

    if (selected.textContent === answer) {
      score += 10;
      correct += 1;
    } else {
      selected.classList.add("wrong");
      wrong += 1;
    }

    elements.correct.textContent = correct;
    elements.wrong.textContent = wrong;
    elements.score.textContent = `Your Score is ${score}`;

    window.setTimeout(() => {
      current += 1;
      if (current < quiz.questions.length && secondsLeft > 0) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    }, 900);
  }

  window.updateTimer = function () {
    secondsLeft -= 1;
    const minutes = Math.floor(Math.max(0, secondsLeft) / 60);
    const seconds = Math.max(0, secondsLeft) % 60;
    elements.timer.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
    if (secondsLeft <= 0) finishQuiz();
  }

  function finishQuiz() {
    if (finished) return;
    finished = true;
    window.clearInterval(timerId);
    sessionStorage.setItem(resultKey, JSON.stringify({
      category,
      title: quiz.title,
      setId: quiz.id,
      score,
      correct,
      wrong,
      total: quiz.questions.length
    }));
    window.location.assign("score.html");
  }

  elements.title.textContent = quiz.title;
  elements.fact.textContent = config.funFact;

  const coins = Number.parseInt(localStorage.getItem("quizmaster_coins"), 10) || 0;
  const playCoinsEl = document.getElementById("playCoins");
  if (playCoinsEl) playCoinsEl.textContent = coins;

  adManager.display("top", "play-ad-top");
  adManager.display("middle", "play-ad-middle");
  renderQuestion();
  timerId = window.setInterval(window.updateTimer, 1000);
})();
