(function () {
  "use strict";

  const config = window.QUIZ_CONFIG;
  const adManager = window.TWITQUIZ_ADS.createAdManager(config.ads);
  const params = new URLSearchParams(window.location.search);
  const requestedQuestion = Number.parseInt(params.get("question"), 10);
  const currentQuestion = Number.isInteger(requestedQuestion) && requestedQuestion >= 0
    ? Math.min(requestedQuestion, config.questions.length - 1)
    : 0;

  const stateKey = "quizmaster_active_quiz";
  const coinKey = "quizmaster_coins";
  let quizState = loadState();
  let selectedAnswer = null;
  let pendingUrl = "";

  const elements = {
    score: document.getElementById("scoreDisplay"),
    counter: document.getElementById("questionCounter"),
    question: document.getElementById("questionText"),
    options: document.getElementById("optionsContainer"),
    message: document.getElementById("answerMessage"),
    progress: document.getElementById("progressFill"),
    fact: document.getElementById("funFact"),
    secondaryAd: document.getElementById("secondaryAd"),
    popup: document.getElementById("adsPopup"),
    closeAd: document.getElementById("closeAd"),
    timer: document.getElementById("adTimer")
  };

  function emptyState() {
    return {
      score: 0,
      correctAnswers: 0,
      answers: {}
    };
  }

  function loadState() {
    if (currentQuestion === 0 && !params.has("resume")) {
      const fresh = emptyState();
      sessionStorage.setItem(stateKey, JSON.stringify(fresh));
      sessionStorage.removeItem("quizmaster_result_credited");
      return fresh;
    }

    try {
      const saved = JSON.parse(sessionStorage.getItem(stateKey));
      return saved && saved.answers ? saved : emptyState();
    } catch {
      return emptyState();
    }
  }

  function saveState() {
    sessionStorage.setItem(stateKey, JSON.stringify(quizState));
  }

  function renderQuestion() {
    const item = config.questions[currentQuestion];
    elements.score.textContent = quizState.score;
    elements.counter.textContent = `Question ${currentQuestion + 1} of ${config.questions.length}`;
    elements.question.textContent = item.question;
    elements.progress.style.width = `${((currentQuestion + 1) / config.questions.length) * 100}%`;
    elements.fact.textContent = config.funFact;
    elements.message.textContent = "";
    elements.options.replaceChildren();

    item.options.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.answer = option;
      button.textContent = option;
      button.addEventListener("pointerup", () => selectAnswer(option, button), { once: true });
      elements.options.appendChild(button);
    });

    elements.secondaryAd.hidden = currentQuestion === 0 && !window.location.search;
  }

  function selectAnswer(answer, selectedElement) {
    if (selectedAnswer) return;
    selectedAnswer = answer;

    const item = config.questions[currentQuestion];
    const isCorrect = answer === item.correct;
    selectedElement.classList.add("selected");

    elements.options.querySelectorAll(".option").forEach(option => {
      option.disabled = true;
      if (option.dataset.answer === item.correct) option.classList.add("correct");
      if (option.dataset.answer === answer && !isCorrect) option.classList.add("wrong");
    });

    const alreadyAnswered = Object.prototype.hasOwnProperty.call(
      quizState.answers,
      currentQuestion
    );

    if (isCorrect && !alreadyAnswered) {
      quizState.score += config.pointsPerCorrectAnswer;
      quizState.correctAnswers += 1;
      elements.message.textContent = "Correct!";
    } else {
      elements.message.textContent = `Correct answer: ${item.correct}`;
    }

    quizState.answers[currentQuestion] = answer;
    elements.score.textContent = quizState.score;
    saveState();

    window.setTimeout(goNext, config.answerDelayMs);
  }

  function goNext() {
    const nextIndex = currentQuestion + 1;
    pendingUrl = nextIndex < config.questions.length
      ? `index.html?question=${nextIndex}`
      : "result.html";

    if (nextIndex < config.questions.length && config.showInterstitialBetweenQuestions) {
      showInterstitial();
      return;
    }

    window.location.assign(pendingUrl);
  }

  function showInterstitial() {
    let remaining = Math.max(0, config.interstitialSeconds);
    elements.popup.hidden = false;
    elements.closeAd.disabled = true;
    elements.timer.textContent = `⏳ Please wait ${remaining} seconds...`;
    adManager.display("interstitial", "ad-interstitial");

    const interval = window.setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        window.clearInterval(interval);
        elements.timer.textContent = "✅ You can now close this ad!";
        elements.closeAd.disabled = false;
        return;
      }
      elements.timer.textContent = `⏳ Please wait ${remaining} seconds...`;
    }, 1000);
  }

  elements.closeAd.addEventListener("click", () => {
    if (elements.closeAd.disabled) return;
    window.location.assign(pendingUrl);
  });

  adManager.display("top", "ad-top");
  if (currentQuestion > 0 || window.location.search) {
    adManager.display("middle", "ad-middle");
  }
  renderQuestion();
})();
