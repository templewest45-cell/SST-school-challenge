const STORAGE_KEY = "social-skill-app-state-v3";
const TEACHER_ILLUSTRATION = "./teacher-guide.png";

const levelPalette = {
  start: "linear-gradient(135deg, #66bb6a, #2e7d32)",
  patience: "linear-gradient(135deg, #4fc3f7, #1565c0)",
  waiting: "linear-gradient(135deg, #f6c453, #e65100)",
  friendship: "linear-gradient(135deg, #ef6c9b, #8e24aa)"
};

const levels = [
  {
    id: "start",
    shortTitle: "じゅぎょうスタート",
    title: "第1面 じゅぎょうスタート",
    color: levelPalette.start,
    description: "はいる・すわる・みる・きく・へんじ を れんしゅう",
    goals: ["入る", "座る", "見る", "聞く", "返事"],
    scenes: [
      {
        id: "start-1",
        action: "choose",
        prompt: "きょうしつに はいったよ。 さいしょに どうする？",
        instruction: "すわる じゅんびを しよう",
        illustration: "🚪",
        illustrationImage: "./start-1.png",
        hint: "まわりを みて、 じぶんの せきに むかおう。",
        choiceFeedback: "そっちで いいよ。",
        successFeedback: "じゅんび できたね。",
        options: [
          { id: "a", label: "せきに いって すわる", sublabel: "じゅぎょうの じゅんび", correct: true },
          { id: "b", label: "そのまま あるきまわる", sublabel: "まだ はじめない", correct: false }
        ]
      },
      {
        id: "start-2",
        action: "stop",
        prompt: "せんせいが はじめます と いったよ。 すわって とまってみよう。",
        instruction: "しずかに とまろう",
        timedInstruction: "しずかに とまろう",
        illustration: "🪑",
        illustrationImage: "./start-2.png",
        hint: "あしと てを しずかに して みよう。",
        choiceFeedback: "いい えらびかた だね。",
        successFeedback: "がまん できたね。",
        options: [
          { id: "a", label: "すわって まつ", sublabel: "じゅんび OK", correct: true },
          { id: "b", label: "たちあがる", sublabel: "まだ うごく", correct: false }
        ]
      },
      {
        id: "start-3",
        action: "look",
        prompt: "せんせいの ほうを みてみよう。",
        instruction: "まえを むいて みよう",
        illustration: "👩‍🏫",
        illustrationImage: "./start-3.png",
        hint: "おでこと からだを まえに むける ように しよう。",
        choiceFeedback: "それで いいよ。",
        successFeedback: "せんせいを みられたね。",
        options: [
          { id: "a", label: "せんせいを みる", sublabel: "ちゅうい を むける", correct: true },
          { id: "b", label: "うしろを みる", sublabel: "ほか が きになる", correct: false }
        ]
      },
      {
        id: "start-4",
        action: "speak",
        prompt: "なまえを よばれたよ。 なんて いう？",
        instruction: "「はい」と いってみよう",
        illustration: "🙋",
        illustrationImage: "./start-4.png",
        hint: "みじかく はっきり いえば だいじょうぶ。",
        choiceFeedback: "その こたえで いいよ。",
        successFeedback: "きこえる こえで いえたよ。",
        options: [
          { id: "a", label: "はい と へんじ", sublabel: "こえを だす", correct: true },
          { id: "b", label: "だまる", sublabel: "こえが でない", correct: false }
        ]
      }
    ]
  },
  {
    id: "patience",
    shortTitle: "がまんチャレンジ",
    title: "第2面 がまんチャレンジ",
    color: levelPalette.patience,
    description: "たちたい・はしりたい・さわりたい を がまんする",
    goals: ["立ちたい", "走りたい", "触りたい"],
    scenes: [
      {
        id: "patience-1",
        action: "stop",
        prompt: "まだ じゅぎょうちゅう。 たちたい きもちが あるよ。",
        instruction: "すわって がまん してみよう",
        timedInstruction: "まってみよう",
        illustration: "🧍",
        illustrationImage: "./patience-1_fixed.png",
        hint: "ては ひざに おいて、 まとう。",
        timedHint: "ては ひざに おいて、 {seconds}びょう まつ。",
        choiceFeedback: "いい えらびかた だね。",
        successFeedback: "すわって まてたね。",
        options: [
          { id: "a", label: "すわって がまん", sublabel: "そのまま まつ", correct: true },
          { id: "b", label: "すぐに たつ", sublabel: "きもちのまま", correct: false }
        ]
      },
      {
        id: "patience-2",
        action: "choose",
        prompt: "ろうかを みて はしりたく なったよ。",
        instruction: "どっちを えらぶ？",
        illustration: "🏃",
        illustrationImage: "./patience-2.png",
        hint: "あんぜんを まもる えらびかたを しよう。",
        choiceFeedback: "あんぜんな えらびかた だね。",
        successFeedback: "あんぜんに すすべたね。",
        options: [
          { id: "a", label: "あるいて すすむ", sublabel: "あんぜん", correct: true },
          { id: "b", label: "はしる", sublabel: "あぶない", correct: false }
        ]
      },
      {
        id: "patience-3",
        action: "look",
        prompt: "ともだちの ものが きになる。 どうする？",
        instruction: "まず みて とまろう",
        illustration: "🧸",
        illustrationImage: "./patience-3.png",
        hint: "さわるまえに せんせいを みる。",
        choiceFeedback: "それで だいじょうぶ。",
        successFeedback: "さわらずに がまん できたね。",
        options: [
          { id: "a", label: "さわらず まつ", sublabel: "がまん できる", correct: true },
          { id: "b", label: "すぐ さわる", sublabel: "あとで こまる", correct: false }
        ]
      }
    ]
  },
  {
    id: "waiting",
    shortTitle: "まちまちチャレンジ",
    title: "第3面 まちまちチャレンジ",
    color: levelPalette.waiting,
    description: "じゅんばんまち と さいごの ことば を れんしゅう",
    goals: ["順番待ち", "まだだよ", "切り替え", "返します"],
    scenes: [
      {
        id: "waiting-1",
        illustrationImage: "./waiting-1.png",
        action: "stop",
        prompt: "いまは じゅんばんまち。 まだ ばんが きていないよ。",
        instruction: "しずかに まってみよう",
        timedInstruction: "まってみよう",
        illustration: "⏳",
        hint: "じゅんばんが くるまで しずかに まとう。",
        choiceFeedback: "その えらびかたで いいよ。",
        successFeedback: "しずかに まてたね。",
        options: [
          { id: "a", label: "しずかに まつ", sublabel: "ばんを まもる", correct: true },
          { id: "b", label: "わりこむ", sublabel: "まだ はやい", correct: false }
        ]
      },
      {
        id: "waiting-2",
        illustrationImage: "./waiting-2.png",
        action: "look",
        prompt: "まだだよ と いわれた。 つぎの あんないを みよう。",
        instruction: "せんせいの あいずを みよう",
        illustration: "🚦",
        hint: "みる ことで つぎの こうどうが わかる。",
        choiceFeedback: "まず みるのが いいね。",
        successFeedback: "あいずを よく みられたね。",
        options: [
          { id: "a", label: "せんせいの あいずを みる", sublabel: "つぎを まつ", correct: true },
          { id: "b", label: "すぐに いく", sublabel: "まだ だめ", correct: false }
        ]
      },
      {
        id: "waiting-3",
        illustrationImage: "./waiting-3.png",
        action: "speak",
        prompt: "かりた ものを かえす じかんです。",
        instruction: "「かえします」と いってみよう",
        illustration: "📚",
        hint: "さいごに ことばを そえると つたわりやすい。",
        choiceFeedback: "それで つたわるよ。",
        successFeedback: "ていねいに いえたね。",
        options: [
          { id: "a", label: "かえします", sublabel: "ことばを そえる", correct: true },
          { id: "b", label: "だまって おく", sublabel: "つたわらない", correct: false }
        ]
      }
    ]
  },
  {
    id: "friendship",
    shortTitle: "ともだちミッション",
    title: "第4面 ともだちミッション",
    color: levelPalette.friendship,
    description: "きになる ときに がまんするか しつもんするか を えらぶ",
    goals: ["気になる", "質問する", "我慢する"],
    scenes: [
      {
        id: "friendship-1",
        illustrationImage: "./friendship-1.png",
        action: "speak",
        prompt: "ともだちが つかっている ものが きになる。",
        instruction: "どっちを えらぶ？",
        illustration: "🧩",
        hint: "とりたく なったら、 まず ことばで きいてみよう。",
        choiceFeedback: "ことばで きくのが いいね。",
        successFeedback: "いい えらびかた だったね。",
        options: [
          { id: "a", label: "てを あげて しつもん", sublabel: "ことばで きく", correct: true },
          { id: "b", label: "だまって とる", sublabel: "トラブルに なる", correct: false }
        ],
        prompt: "ともだちの もっているものが きになる。なんて きく？",
        instruction: "「これは なに？」「しつもんしても いいですか？」の どちらかを いってみよう",
        illustration: "ともだち",
        hint: "いきなり さわらず、やさしい こえで たずねよう。",
        choiceFeedback: "その ことばで きいてみよう。",
        successFeedback: "やさしく しつもん できたね。",
        options: [
          { id: "a", label: "これは なに？", sublabel: "やさしく きいてみる", correct: true },
          { id: "b", label: "しつもんしても いいですか？", sublabel: "きく まえに ことわる", correct: true },
          { id: "c", label: "だまって さわる", sublabel: "ことばで きけていない", correct: false }
        ]
      },
      {
        id: "friendship-2",
        illustrationImage: "./friendship-2.png",
        action: "speak",
        prompt: "ともだちに つかっていいか きいてみよう。",
        instruction: "「つかって いいですか」と いってみよう",
        illustration: "💬",
        hint: "やさしい こえで みじかく つたえよう。",
        choiceFeedback: "やさしく きけそう だね。",
        successFeedback: "やさしく きけたね。",
        options: [
          { id: "a", label: "つかって いいですか", sublabel: "しつもん する", correct: true },
          { id: "b", label: "むりやり つかう", sublabel: "まだ きいていない", correct: false }
        ]
      },
      {
        id: "friendship-3",
        illustrationImage: "./friendship-3.png",
        action: "stop",
        prompt: "いまは だめ と いわれた。 どうする？",
        instruction: "そのばで とまって まとう",
        timedInstruction: "まってみよう",
        illustration: "🤝",
        hint: "いま だめでも、 つぎが ある。",
        choiceFeedback: "その まちかたで いいよ。",
        successFeedback: "おちついて まてたね。",
        options: [
          { id: "a", label: "がまんして まつ", sublabel: "きりかえる", correct: true },
          { id: "b", label: "おこって とる", sublabel: "ともだちが こまる", correct: false }
        ]
      }
    ]
  }
];

const appState = {
  route: "home",
  levelId: levels[0].id,
  sceneIndex: 0,
  selectedOptionId: null,
  lastResult: "",
  lastResultType: "neutral",
  feedbackTimer: null,
  challengeIndex: 0,
  challengeCombo: 0,
  challengeBest: 0,
  challengePool: [],
  challengeActiveItem: null,
  settings: {
    judgeMode: "teacher",
    audioJudge: "on",
    hints: "on",
    countdownSeconds: 3,
    comboGoal: 3
  },
  media: {
    stream: null,
    audioContext: null,
    analyser: null,
    microphoneSource: null,
    meterInterval: null,
    countdownInterval: null,
    resolved: false,
    visionCanvas: null,
    visionContext: null,
    previousFrame: null,
    faceDetector: null,
    faceDetectionBusy: false
  },
  lastRouteBeforeSettings: "home",
  lastRouteBeforeChallenge: "home",
  teacherFeedback: null
};

const appEl = document.querySelector("#app");
const headerSettingsButton = document.querySelector("#headerSettingsButton");

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    appState.challengeBest = saved.challengeBest ?? 0;
    appState.settings = { ...appState.settings, ...(saved.settings || {}) };
  } catch (error) {
    console.warn("state load failed", error);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      challengeBest: appState.challengeBest,
      settings: appState.settings
    })
  );
}

function getLevel(levelId) {
  return levels.find((level) => level.id === levelId) || levels[0];
}

function getCurrentScene() {
  if (appState.route === "execute" && appState.challengeActiveItem) {
    return appState.challengeActiveItem;
  }

  const level = getLevel(appState.levelId);
  return level.scenes[appState.sceneIndex] || level.scenes[0];
}

function getSceneCountdownSeconds(scene) {
  return scene.countdownSeconds ?? appState.settings.countdownSeconds;
}

function sceneProgress(level, index) {
  return ((index + 1) / level.scenes.length) * 100;
}

function setRoute(route) {
  appState.route = route;
  render();
}

function openChallenge(fromRoute, reset = false) {
  appState.lastRouteBeforeChallenge = fromRoute;
  appState.selectedOptionId = null;
  appState.challengeActiveItem = null;

  if (reset) {
    appState.challengeIndex = 0;
    appState.challengeCombo = 0;
    appState.challengePool = makeChallengePool();
    appState.lastResult = "";
  }

  setRoute("challenge");
}

function cloneTemplate(id) {
  return document.querySelector(`#${id}`).content.cloneNode(true);
}

function bindRouteButtons() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedOptionId = null;
      setRoute(button.getAttribute("data-route"));
    });
  });
}

function render() {
  switch (appState.route) {
    case "training-list":
      renderTrainingList();
      break;
    case "play":
      renderPlay();
      break;
    case "execute":
      renderExecute();
      break;
    case "teacher-feedback":
      renderTeacherFeedbackScreen();
      break;
    case "challenge":
      renderChallenge();
      break;
    case "settings":
      renderSettings();
      break;
    default:
      renderHome();
      break;
  }
}

function renderHome() {
  appEl.replaceChildren(cloneTemplate("home-template"));

  document.querySelector("#homeSettingsSummary").innerHTML = `
    <p>はんてい: ${appState.settings.judgeMode === "ai" ? "AI サポート" : "きょうし ほじょ"}</p>
    <p>おんせい: ${appState.settings.audioJudge === "on" ? "ON" : "OFF"}</p>
    <p>ヒント: ${appState.settings.hints === "on" ? "ON" : "OFF"}</p>
    <p>じゅんび: ${appState.settings.countdownSeconds} びょう</p>
  `;

  document.querySelector("#homeChallengeSummary").innerHTML = `
    <p>ベストコンボ: <strong>${appState.challengeBest}</strong></p>
    <p>クリアもくひょう: ${appState.settings.comboGoal}</p>
  `;

  document.querySelector("#homeTrainingButton").addEventListener("click", () => {
    appState.selectedOptionId = null;
    setRoute("training-list");
  });

  document.querySelector("#homeChallengeButton").addEventListener("click", () => {
    openChallenge("home", true);
  });
}

function renderTrainingList() {
  appEl.replaceChildren(cloneTemplate("training-list-template"));
  const grid = document.querySelector("#trainingCardGrid");

  levels.forEach((level) => {
    const button = document.createElement("button");
    button.className = "level-card";
    button.style.background = level.color;
    button.innerHTML = `
      <p>${level.shortTitle}</p>
      <h3>${level.title}</h3>
      <p>${level.description}</p>
      <p>${level.goals.join(" ・ ")}</p>
    `;
    button.addEventListener("click", () => {
      appState.levelId = level.id;
      appState.sceneIndex = 0;
      appState.selectedOptionId = null;
      appState.lastResult = "";
      appState.lastResultType = "neutral";
      setRoute("play");
    });
    grid.appendChild(button);
  });

  const challengeButton = document.createElement("button");
  challengeButton.className = "level-card";
  challengeButton.style.background = "linear-gradient(135deg, #ff8a65, #d84315)";
  challengeButton.innerHTML = `
    <p>さいしゅうチャレンジ</p>
    <h3>第5面 れんぞくチャレンジ</h3>
    <p>4つの こうどうを ランダムで ふくしゅう</p>
    <p>れんぞく せいこうで クリア</p>
  `;
  challengeButton.addEventListener("click", () => {
    openChallenge("training-list", true);
  });
  grid.appendChild(challengeButton);

  bindRouteButtons();
}

function renderPlay() {
  appEl.replaceChildren(cloneTemplate("play-template"));

  const level = getLevel(appState.levelId);
  const scene = getCurrentScene();
  const isSuccessFeedback = appState.lastResultType === "success-stop" || appState.lastResultType === "success-wait";

  document.querySelector("#playLevelBadge").textContent = `${level.shortTitle} ${appState.sceneIndex + 1}/${level.scenes.length}`;
  document.querySelector("#playLevelTitle").textContent = level.title;
  document.querySelector("#sceneProgressLabel").textContent = `${appState.sceneIndex + 1} / ${level.scenes.length}`;
  document.querySelector("#sceneProgressFill").style.width = `${sceneProgress(level, appState.sceneIndex)}%`;
  document.querySelector("#scenePrompt").textContent = scene.prompt;

  const illustrationEl = document.querySelector("#sceneIllustration");
  if (appState.lastResultType === "wrong-choice") {
    illustrationEl.classList.add("feedback");
    illustrationEl.innerHTML = `
      <span>🤔</span>
      <strong>もういちど かんがえよう</strong>
    `;
  } else if (appState.lastResultType === "success-stop" || appState.lastResultType === "success-wait") {
    illustrationEl.classList.add("feedback", "success");
    illustrationEl.innerHTML = `
      <span>👍</span>
      <strong>${appState.lastResult}</strong>
    `;
  } else {
    illustrationEl.classList.remove("feedback", "success");
    renderSceneIllustration(illustrationEl, scene);
  }

  document.querySelector("#hintBox").textContent =
    appState.settings.hints === "on" ? `ヒント: ${getSceneHint(scene)}` : "ヒントは OFF です";

  const choiceGrid = document.querySelector("#choiceGrid");
  scene.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.disabled = isSuccessFeedback;
    if (option.id === appState.selectedOptionId) {
      button.classList.add("is-selected");
    }
    button.innerHTML = `
      <strong>${option.label}</strong>
      <span>${option.sublabel}</span>
    `;
    button.addEventListener("click", () => {
      appState.selectedOptionId = option.id;
      appState.lastResultType = "neutral";
      renderPlay();
    });
    choiceGrid.appendChild(button);
  });

  const performButton = document.querySelector("#performButton");
  const shouldShowPerformButton = Boolean(appState.selectedOptionId) && !isSuccessFeedback;
  performButton.hidden = !shouldShowPerformButton;
  performButton.disabled = isSuccessFeedback;
  performButton.textContent = "やってみる";
  performButton.addEventListener("click", () => {
    if (!appState.selectedOptionId) {
      appState.lastResult = "さきに どちらか えらぼう";
      appState.lastResultType = "neutral";
      renderPlay();
      return;
    }

    const selectedOption = scene.options.find((option) => option.id === appState.selectedOptionId);
    if (!selectedOption?.correct) {
      openTeacherFeedback({
        title: "もういちど えらぼう",
        message: "ちがう ほうも みてみよう。",
        detail: "この ばめんで いい こうどうは どれか、 イラストと ことばを みなおしてみよう。",
        tone: "retry",
        continueLabel: "もどって えらぶ",
        continueAction: "back-to-play"
      });
      return;
    }

    if (scene.action === "choose") {
      openTeacherFeedback({
        title: "いい えらびかた",
        message: scene.choiceFeedback || "そっちで いいよ。",
        detail: getChoiceExplanation(scene),
        tone: "success",
        continueLabel: "つぎの ばめんへ",
        continueAction: "next-scene"
      });
      return;
    }

    openTeacherFeedback({
      title: "このあと やってみよう",
      message: scene.choiceFeedback || "そっちで いいよ。",
      detail: getChoiceExplanation(scene),
      tone: "success",
      title: "はなまる",
      message: "がんばったね。3れんぞく せいこう できたよ。",
      detail: "はなまる！ トップに もどろう。",
      continueLabel: "トップへ",
      title: "はなまる",
      message: "がんばったね。3れんぞく せいこう できたよ。",
      detail: "はなまる！ トップに もどって つぎの れんしゅうへ いこう。",
      continueLabel: "じっこう する",
      continueAction: "to-execute"
    });
  });

  document.querySelector("#playSettingsButton").addEventListener("click", () => openSettings("play"));
  bindRouteButtons();
}

function renderSceneIllustration(container, scene) {
  container.replaceChildren();

  if (scene.illustrationImage) {
    const image = document.createElement("img");
    image.className = "scene-illustration-image";
    image.src = scene.illustrationImage;
    image.alt = scene.prompt;
    image.loading = "eager";
    image.addEventListener(
      "error",
      () => {
        image.remove();
        container.textContent = scene.illustration;
      },
      { once: true }
    );
    container.appendChild(image);
    return;
  }

  container.textContent = scene.illustration;
}

function getChoiceExplanation(scene) {
  switch (scene.action) {
    case "stop":
      return "この あとは、 からだを とめて まつ れんしゅうを するよ。 せんせいの あいずまで おちついて いられると いいね。";
    case "look":
      return "この あとは、 みる れんしゅうを するよ。 せんせいや あいずの ほうを むくと、 つぎの こうどうが わかりやすいよ。";
    case "speak":
      return "この あとは、 はなす れんしゅうを するよ。 みじかく はっきり いうと、 あいてに つたわりやすいよ。";
    default:
      return "いまの ばめんに あう こうどうを えらべたよ。 この えらびかたを つぎの ばめんでも つかってみよう。";
  }
}

function getSuccessExplanation(scene) {
  switch (scene.action) {
    case "stop":
      return "からだを とめて まつことが できたね。 がまんして まてると、 じゅぎょうや じゅんばんが うまく すすむよ。";
    case "look":
      return "せんせいや あいずの ほうを みられたね。 みることが できると、 つぎに なにを するか わかりやすいよ。";
    case "speak":
      return "ことばで つたえることが できたね。 きこえる こえで いうと、 きもちや おねがいが つたわりやすいよ。";
    default:
      return "その こうどうで だいじょうぶ。 いい やりかたが できたね。";
  }
}

function openTeacherFeedback(feedback) {
  appState.teacherFeedback = feedback;
  setRoute("teacher-feedback");
}

function renderTeacherFeedbackScreen() {
  appEl.replaceChildren(cloneTemplate("teacher-feedback-template"));

  const feedback = appState.teacherFeedback || {
    title: "せんせいの かいせつ",
    message: "つぎへ すすもう。",
    detail: "",
    tone: "neutral",
    continueLabel: "つぎへ",
    continueAction: "back-to-play"
  };

  document.querySelector("#teacherFeedbackTitle").textContent = feedback.title;
  document.querySelector("#teacherFeedbackMessage").textContent = feedback.message;
  document.querySelector("#teacherFeedbackDetail").textContent = feedback.detail || "";

  const panel = document.querySelector(".teacher-screen-panel");
  panel.classList.add(`teacher-screen-${feedback.tone || "neutral"}`);

  const imageEl = document.querySelector("#teacherScreenImage");
  const fallbackEl = document.querySelector("#teacherScreenFallback");
  imageEl.src = TEACHER_ILLUSTRATION;
  imageEl.addEventListener(
    "error",
    () => {
      imageEl.hidden = true;
      fallbackEl.hidden = false;
    },
    { once: true }
  );

  const continueButton = document.querySelector("#teacherFeedbackContinueButton");
  continueButton.textContent = feedback.continueLabel || "つぎへ";
  continueButton.addEventListener("click", handleTeacherFeedbackContinue);
}

function handleTeacherFeedbackContinue() {
  const action = appState.teacherFeedback?.continueAction || "back-to-play";
  appState.teacherFeedback = null;

  switch (action) {
    case "to-execute":
      appState.lastResult = "";
      appState.lastResultType = "neutral";
      setRoute("execute");
      break;
    case "next-scene":
      advanceToNextScene();
      break;
    case "finish-level":
      setRoute("training-list");
      break;
    case "back-to-challenge":
      appState.lastResult = "";
      appState.lastResultType = "neutral";
      setRoute("challenge");
      break;
    case "to-home":
      appState.selectedOptionId = null;
      appState.challengeActiveItem = null;
      appState.challengeIndex = 0;
      appState.challengePool = makeChallengePool();
      appState.lastResult = "";
      appState.lastResultType = "neutral";
      setRoute("home");
      break;
    case "back-to-play":
    default:
      appState.lastResult = "";
      appState.lastResultType = "neutral";
      setRoute("play");
      break;
  }
}

function getExecuteInstruction(scene) {
  if (scene.action === "stop") {
    return `${getSceneCountdownSeconds(scene)}びょう ${scene.timedInstruction || "まってみよう"}`;
  }

  if (scene.action === "speak") {
    const selectedOption = scene.options.find((option) => option.id === appState.selectedOptionId);
    if (selectedOption?.correct) {
      return selectedOption.label;
    }
  }

  return scene.instruction;
}

function getSceneHint(scene) {
  if (scene.timedHint) {
    return scene.timedHint.replace("{seconds}", String(getSceneCountdownSeconds(scene)));
  }

  return scene.hint;
}

function renderExecute() {
  appEl.replaceChildren(cloneTemplate("execute-template"));

  const challengeItem = appState.challengeActiveItem;
  const level = challengeItem ? { shortTitle: "チャレンジ", scenes: [challengeItem] } : getLevel(appState.levelId);
  const scene = getCurrentScene();
  const stopBarRow = document.querySelector("#stopBarRow");
  const lookBarRow = document.querySelector("#lookBarRow");
  const speakBarRow = document.querySelector("#speakBarRow");

  document.querySelector("#executeTitle").textContent = `${level.shortTitle} / ${scene.prompt}`;
  document.querySelector("#executeInstruction").textContent = getExecuteInstruction(scene);
  document.querySelector("#executeSceneProgress").textContent = challengeItem ? "1 / 1" : `${appState.sceneIndex + 1} / ${level.scenes.length}`;
  document.querySelector("#executeSceneFill").style.width = challengeItem ? "100%" : `${sceneProgress(level, appState.sceneIndex)}%`;
  document.querySelector("#countdownValue").textContent = String(getSceneCountdownSeconds(scene));
  updateExecuteStatus(`${getSceneCountdownSeconds(scene)}びょう ごに スタート`);

  stopBarRow.hidden = scene.action !== "stop";
  lookBarRow.hidden = scene.action !== "look";
  speakBarRow.hidden = scene.action !== "speak";

  document.querySelector("#backToPlayButton").addEventListener("click", async () => {
    await cleanupExecution(true);
    setRoute("play");
  });

  document.querySelector("#teacherSuccessButton").addEventListener("click", async () => {
    await resolveScene(true, "できた！");
  });

  document.querySelector("#teacherFailButton").addEventListener("click", async () => {
    await resolveScene(false, "もういちど やってみよう");
  });

  startExecution(scene);
}

async function startExecution(scene) {
  appState.media.resolved = false;
  updateExecuteStatus("じゅんび しています");
  await ensureMedia(scene.action === "speak");
  runCountdown(scene);
}

function setupVisionHelpers() {
  if (!appState.media.visionCanvas) {
    appState.media.visionCanvas = document.createElement("canvas");
    appState.media.visionCanvas.width = 96;
    appState.media.visionCanvas.height = 72;
    appState.media.visionContext = appState.media.visionCanvas.getContext("2d", { willReadFrequently: true });
  }

  appState.media.previousFrame = null;
  appState.media.faceDetectionBusy = false;

  if (!appState.media.faceDetector && "FaceDetector" in window) {
    try {
      appState.media.faceDetector = new window.FaceDetector({
        fastMode: true,
        maxDetectedFaces: 1
      });
    } catch (error) {
      appState.media.faceDetector = null;
    }
  }
}

async function ensureMedia(needAudio) {
  const videoEl = document.querySelector("#cameraPreview");
  const fallbackEl = document.querySelector("#cameraFallback");

  if (!navigator.mediaDevices?.getUserMedia) {
    fallbackEl.hidden = false;
    fallbackEl.textContent = "この ききでは カメラ / マイク を つかえません";
    return;
  }

  try {
    const constraints = {
      video: true,
      audio: Boolean(needAudio && appState.settings.audioJudge === "on")
    };

    appState.media.stream = await navigator.mediaDevices.getUserMedia(constraints);
    videoEl.srcObject = appState.media.stream;
    videoEl.muted = true;
    fallbackEl.hidden = true;
    videoEl.onloadedmetadata = async () => {
      try {
        await videoEl.play();
      } catch (error) {
        console.warn("video play failed", error);
      }
    };
    videoEl.onplaying = () => {
      fallbackEl.hidden = true;
    };
    setupVisionHelpers();

    if (constraints.audio) {
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      appState.media.audioContext = new AudioContextCtor();
      appState.media.analyser = appState.media.audioContext.createAnalyser();
      appState.media.analyser.fftSize = 256;
      appState.media.microphoneSource = appState.media.audioContext.createMediaStreamSource(appState.media.stream);
      appState.media.microphoneSource.connect(appState.media.analyser);
    }
  } catch (error) {
    fallbackEl.hidden = false;
    fallbackEl.textContent = "きょかが ないので、 きょうし ほじょで すすめます";
    updateExecuteStatus("カメラや マイクが つかえません。 ボタンではんていしてください。");
  }
}

function runCountdown(scene) {
  let current = getSceneCountdownSeconds(scene);
  document.querySelector("#countdownValue").textContent = String(current);
  updateExecuteStatus(`${current}びょう ごに スタート`);

  appState.media.countdownInterval = window.setInterval(() => {
    current -= 1;
    document.querySelector("#countdownValue").textContent = current > 0 ? String(current) : "GO";

    if (current > 0) {
      updateExecuteStatus(`${current}びょう ごに スタート`);
      return;
    }

    window.clearInterval(appState.media.countdownInterval);
    appState.media.countdownInterval = null;
    startMeters(scene);
  }, 1000);
}

function sampleMotionRatio() {
  const videoEl = document.querySelector("#cameraPreview");
  const { visionCanvas, visionContext } = appState.media;
  if (!videoEl || !visionCanvas || !visionContext || videoEl.readyState < 2) {
    return null;
  }

  visionContext.drawImage(videoEl, 0, 0, visionCanvas.width, visionCanvas.height);
  const { data } = visionContext.getImageData(0, 0, visionCanvas.width, visionCanvas.height);
  const currentFrame = new Uint8Array(visionCanvas.width * visionCanvas.height);

  for (let index = 0, pixelIndex = 0; index < data.length; index += 4, pixelIndex += 1) {
    currentFrame[pixelIndex] = (data[index] + data[index + 1] + data[index + 2]) / 3;
  }

  if (!appState.media.previousFrame) {
    appState.media.previousFrame = currentFrame;
    return null;
  }

  let diffTotal = 0;
  for (let index = 0; index < currentFrame.length; index += 1) {
    diffTotal += Math.abs(currentFrame[index] - appState.media.previousFrame[index]);
  }

  appState.media.previousFrame = currentFrame;
  return Math.min(diffTotal / currentFrame.length / 32, 1);
}

async function sampleLookRatio() {
  const videoEl = document.querySelector("#cameraPreview");
  if (!videoEl || videoEl.readyState < 2) {
    return null;
  }

  if (!appState.media.faceDetector || appState.media.faceDetectionBusy) {
    return null;
  }

  appState.media.faceDetectionBusy = true;

  try {
    const faces = await appState.media.faceDetector.detect(videoEl);
    if (!faces.length) {
      return 0;
    }

    const face = faces[0];
    const box = face.boundingBox;
    const centerX = box.x + box.width / 2;
    const centerY = box.y + box.height / 2;
    const normalizedX = centerX / videoEl.videoWidth;
    const normalizedY = centerY / videoEl.videoHeight;
    const distance = Math.abs(normalizedX - 0.5) + Math.abs(normalizedY - 0.48);
    return Math.max(0, 1 - distance * 1.1);
  } catch (error) {
    return null;
  } finally {
    appState.media.faceDetectionBusy = false;
  }
}

function sampleVolume() {
  if (!appState.media.analyser) {
    return 0;
  }

  const dataArray = new Uint8Array(appState.media.analyser.frequencyBinCount);
  appState.media.analyser.getByteFrequencyData(dataArray);
  const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
  return Math.min(average / 90, 1);
}

function startMeters(scene) {
  const stopMeter = document.querySelector("#stopMeter");
  const lookMeter = document.querySelector("#lookMeter");
  const speakMeter = document.querySelector("#speakMeter");
  const videoEl = document.querySelector("#cameraPreview");
  const startedAt = performance.now();
  const durationMs = Math.max(getSceneCountdownSeconds(scene), 2) * 1000;
  let stopHoldRatio = 0;
  let lastTickAt = startedAt;

  updateExecuteStatus("こうどう を はじめよう");

  appState.media.meterInterval = window.setInterval(async () => {
    if (appState.media.resolved) {
      return;
    }

    const now = performance.now();
    const elapsed = now - startedAt;
    const tickRatio = Math.max((now - lastTickAt) / durationMs, 0.01);
    lastTickAt = now;
    const ratio = Math.min(elapsed / durationMs, 1);

    if (scene.action === "stop") {
      const motionRatio = sampleMotionRatio();

      if (motionRatio != null) {
        if (motionRatio < 0.08) {
          stopHoldRatio = Math.min(stopHoldRatio + tickRatio, 1);
          updateExecuteStatus("そのまま しずかに とまろう");
        } else if (motionRatio < 0.16) {
          stopHoldRatio = Math.min(stopHoldRatio + tickRatio * 0.45, 1);
          updateExecuteStatus("いいよ そのまま");
        } else {
          stopHoldRatio = Math.max(stopHoldRatio - tickRatio * 1.2, 0);
          updateExecuteStatus("うごいたよ もういちど とまろう");
        }
      }

      const visibleRatio = motionRatio == null ? Math.min(ratio * 0.2, 0.2) : stopHoldRatio;
      stopMeter.style.width = `${visibleRatio * 100}%`;
      lookMeter.style.width = "0%";
      speakMeter.style.width = "0%";

      if (appState.settings.judgeMode === "ai" && stopHoldRatio >= 0.98) {
        await resolveScene(true, "カメラで とまれた！");
        return;
      }
    } else if (scene.action === "look") {
      stopMeter.style.width = "0%";
      const cameraReady = Boolean(videoEl && videoEl.readyState >= 2 && appState.media.stream);
      const visibleRatio = cameraReady ? ratio : 0.12;
      lookMeter.style.width = `${visibleRatio * 100}%`;
      speakMeter.style.width = "0%";

      if (cameraReady) {
        updateExecuteStatus("そのまま まえを みよう");
      } else {
        updateExecuteStatus("カメラが じゅんびできるまで バーを とめています");
      }
    } else if (scene.action === "speak") {
      stopMeter.style.width = "0%";
      lookMeter.style.width = "0%";
      const volumeRatio = sampleVolume();
      speakMeter.style.width = `${Math.max(volumeRatio, ratio * 0.2) * 100}%`;

      if (appState.settings.judgeMode === "ai" && appState.settings.audioJudge === "on" && volumeRatio > 0.55) {
        await resolveScene(true, "こえが とどいた！");
        return;
      }
    } else {
      stopMeter.style.width = "0%";
      lookMeter.style.width = "0%";
      speakMeter.style.width = "0%";
    }

    if (ratio >= 1) {
      if (scene.action === "speak" && appState.settings.judgeMode === "ai" && appState.settings.audioJudge === "on") {
        await resolveScene(false, "こえを もうすこし だしてみよう");
        return;
      }

      if (scene.action === "stop" && appState.settings.judgeMode === "ai") {
        updateExecuteStatus("とまる バーが たまるまで しずかに まとう。むずかしい ときは ボタンで すすめます");
      } else if (scene.action === "look" && appState.settings.judgeMode === "ai" && videoEl && videoEl.readyState >= 2 && appState.media.stream) {
        lookMeter.style.width = "100%";
        await resolveScene(true, "カメラで みる できた！");
        return;
      } else if (scene.action === "look" && appState.settings.judgeMode === "ai") {
        updateExecuteStatus("カメラが じゅんびできないので バーを とめています");
      } else {
        updateExecuteStatus("できたら ボタンを おしてください");
      }

      window.clearInterval(appState.media.meterInterval);
      appState.media.meterInterval = null;
    }
  }, 120);
}

function updateExecuteStatus(text) {
  const statusEl = document.querySelector("#executeStatus");
  if (statusEl) {
    statusEl.textContent = text;
  }
}

function resolveChoiceScene() {
  advanceToNextScene();
}

function advanceToNextScene() {
  const level = getLevel(appState.levelId);
  appState.lastResult = "";
  appState.lastResultType = "neutral";

  if (appState.sceneIndex >= level.scenes.length - 1) {
    appState.sceneIndex = 0;
    appState.selectedOptionId = null;
    openTeacherFeedback({
      title: `${level.shortTitle} クリア`,
      message: "さいごまで よく がんばったね。",
      detail: "この めんの だいじな こうどうが できたよ。 つぎの れんしゅうも やってみよう。",
      tone: "success",
      continueLabel: "れんしゅう いちらんへ",
      continueAction: "finish-level"
    });
    return;
  }

  appState.sceneIndex += 1;
  appState.selectedOptionId = null;
  setRoute("play");
}

function getSuccessFeedback(scene) {
  return scene.successFeedback || "できた！";
}

async function resolveScene(success, message) {
  if (appState.media.resolved) {
    return;
  }

  appState.media.resolved = true;
  await cleanupExecution(true);

  const scene = getCurrentScene();
  const option = scene.options.find((item) => item.id === appState.selectedOptionId);

  if (!option?.correct) {
    appState.lastResult = "えらびかたを もういちど みてみよう";
    appState.lastResultType = "wrong-choice";
    setRoute("play");
    return;
  }

  if (!success) {
    if (appState.challengeActiveItem) {
      openTeacherFeedback({
        title: "もういちど やってみよう",
        message,
        detail: "おなじ もんだいを もういちど じっせんしてみよう。",
        tone: "retry",
        continueLabel: "もういちど",
        continueAction: "to-execute"
      });
      return;
    }

    openTeacherFeedback({
      title: "もういちど やってみよう",
      message,
      detail: "せんせいの あいずを みながら、 もう いちど おちついて やってみよう。",
      tone: "retry",
      continueLabel: "もどって やりなおす",
      continueAction: "back-to-play"
    });
    return;
  }

  appState.lastResult = getSuccessFeedback(scene);
  appState.lastResultType = scene.action === "stop" ? "success-stop" : "success-wait";

  if (appState.challengeActiveItem) {
    completeChallengeSuccess();
    return;
  }

  openTeacherFeedback({
    title: "できたね",
    message: getSuccessFeedback(scene),
    detail: getSuccessExplanation(scene),
    tone: "success",
    continueLabel: "つぎへ すすむ",
    continueAction: "next-scene"
  });
}

async function cleanupExecution(stopTracks) {
  if (appState.feedbackTimer) {
    window.clearTimeout(appState.feedbackTimer);
    appState.feedbackTimer = null;
  }

  if (appState.media.countdownInterval) {
    window.clearInterval(appState.media.countdownInterval);
    appState.media.countdownInterval = null;
  }

  if (appState.media.meterInterval) {
    window.clearInterval(appState.media.meterInterval);
    appState.media.meterInterval = null;
  }

  if (stopTracks && appState.media.stream) {
    appState.media.stream.getTracks().forEach((track) => track.stop());
    appState.media.stream = null;
  }

  if (appState.media.microphoneSource) {
    appState.media.microphoneSource.disconnect();
    appState.media.microphoneSource = null;
  }

  if (appState.media.analyser) {
    appState.media.analyser.disconnect?.();
    appState.media.analyser = null;
  }

  if (appState.media.audioContext) {
    await appState.media.audioContext.close();
    appState.media.audioContext = null;
  }

  appState.media.previousFrame = null;
  appState.media.faceDetectionBusy = false;
}

function createChallengeItem(level, scene, overrides = {}) {
  return {
    id: `${level.id}-${scene.id}`,
    levelId: level.id,
    levelName: level.shortTitle,
    prompt: scene.prompt,
    illustration: scene.illustration,
    illustrationImage: scene.illustrationImage,
    hint: scene.hint,
    options: scene.options,
    action: scene.action,
    timedInstruction: scene.timedInstruction,
    timedHint: scene.timedHint,
    countdownSeconds: scene.countdownSeconds,
    ...overrides
  };
}

function completeChallengeSuccess() {
  appState.challengeCombo += 1;
  appState.challengeBest = Math.max(appState.challengeBest, appState.challengeCombo);
  appState.selectedOptionId = null;
  appState.challengeActiveItem = null;

  const reachedGoal = appState.challengeCombo >= appState.settings.comboGoal;
  appState.lastResult = reachedGoal
    ? `チャレンジ クリア！ ${appState.settings.comboGoal} れんぞく せいこう`
    : "せいかい。つぎへ すすもう";

  appState.challengeIndex += 1;
  saveState();

  if (reachedGoal) {
    appState.challengeCombo = 0;
    openTeacherFeedback({
      title: "チャレンジ クリア",
      message: `${appState.settings.comboGoal} れんぞく せいこう できたね。`,
      detail: "このまま つぎの もんだいに すすもう。",
      tone: "success",
      continueLabel: "つぎへ",
      continueLabel: "トップへ",
      title: "はなまる",
      message: "がんばったね。3れんぞく せいこう できたよ。",
      detail: "はなまる！ トップに もどろう。",
      continueLabel: "トップへ",
      continueAction: "to-home"
    });
    return;
  }

  renderChallenge();
}

function makeChallengePool() {
  const startLevel = levels[0];
  const patienceLevel = levels[1];
  const waitingLevel = levels[2];
  const friendshipLevel = levels[3];

  return [
    createChallengeItem(startLevel, startLevel.scenes[1], {
      prompt: "せきに すわって 5びょう じっとしてみよう",
      timedInstruction: "すわって 5びょう じっとしてみよう",
      timedHint: "ては ひざに おいて、 {seconds}びょう すわって まってみよう。",
      countdownSeconds: 5
    }),
    createChallengeItem(patienceLevel, patienceLevel.scenes[0]),
    createChallengeItem(patienceLevel, patienceLevel.scenes[1]),
    createChallengeItem(patienceLevel, patienceLevel.scenes[2]),
    createChallengeItem(waitingLevel, waitingLevel.scenes[0]),
    createChallengeItem(waitingLevel, waitingLevel.scenes[1]),
    createChallengeItem(waitingLevel, waitingLevel.scenes[2]),
    createChallengeItem(startLevel, startLevel.scenes[2]),
    createChallengeItem(startLevel, startLevel.scenes[3]),
    createChallengeItem(friendshipLevel, friendshipLevel.scenes[2]),
    createChallengeItem(friendshipLevel, friendshipLevel.scenes[0], {
      prompt: "ともだちの もっているものが きになる。なんて きく？",
      instruction: "「これは なに？」「しつもんしても いいですか？」の どちらかを いってみよう",
      illustration: "ともだち",
      hint: "いきなり さわらず、やさしい こえで たずねよう。",
      choiceFeedback: "その ことばで きいてみよう。",
      successFeedback: "やさしく しつもん できたね。",
      options: [
        { id: "a", label: "これは なに？", sublabel: "やさしく きいてみる", correct: true },
        { id: "b", label: "しつもんしても いいですか？", sublabel: "きく まえに ことわる", correct: true },
        { id: "c", label: "だまって さわる", sublabel: "ことばで きけていない", correct: false }
      ]
    }),
    createChallengeItem(friendshipLevel, friendshipLevel.scenes[1])
  ];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function renderChallenge() {
  if (!appState.challengePool.length || appState.challengeIndex >= appState.challengePool.length) {
    appState.challengePool = makeChallengePool();
    appState.challengeIndex = 0;
  }

  appEl.replaceChildren(cloneTemplate("challenge-template"));

  const item = appState.challengePool[appState.challengeIndex];
  const comboRatio = Math.min(appState.challengeCombo / appState.settings.comboGoal, 1) * 100;

  document.querySelector("#challengeComboValue").textContent = String(appState.challengeCombo);
  document.querySelector("#challengeBestValue").textContent = String(appState.challengeBest);
  document.querySelector("#challengeGoalLabel").textContent = `${appState.challengeCombo} / ${appState.settings.comboGoal}`;
  document.querySelector("#challengeGoalFill").style.width = `${comboRatio}%`;
  document.querySelector("#challengePromptCard").innerHTML = item.illustrationImage
    ? `
      <p class="small-label">${item.levelName}</p>
      <img class="scene-illustration-image challenge-illustration-image" src="${item.illustrationImage}" alt="${item.prompt}">
      <p>${item.prompt}</p>
    `
    : `
      <p class="small-label">${item.levelName}</p>
      <p>${item.illustration} ${item.prompt}</p>
    `;

  const grid = document.querySelector("#challengeChoiceGrid");
  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    if (option.id === appState.selectedOptionId) {
      button.classList.add("is-selected");
    }
    button.innerHTML = `
      <strong>${option.label}</strong>
      <span>${option.sublabel}</span>
    `;
    button.addEventListener("click", () => {
      appState.selectedOptionId = option.id;
      renderChallenge();
    });
    grid.appendChild(button);
  });

  document.querySelector("#challengeResultBox").textContent = appState.lastResult || "ランダムしゅつだい です";
  document.querySelector("#challengeActionButton").addEventListener("click", handleChallengeAction);
  document.querySelector("#challengeBackButton").addEventListener("click", () => {
    appState.selectedOptionId = null;
    appState.challengeActiveItem = null;
    appState.lastResult = "";
    setRoute(appState.lastRouteBeforeChallenge || "home");
  });
  bindRouteButtons();
}

function handleChallengeAction() {
  if (!appState.selectedOptionId) {
    appState.lastResult = "さきに えらんで みよう";
    renderChallenge();
    return;
  }

  const item = appState.challengePool[appState.challengeIndex];
  const selected = item.options.find((option) => option.id === appState.selectedOptionId);

  if (!selected?.correct) {
    appState.challengeCombo = 0;
    appState.selectedOptionId = null;
    saveState();
    openTeacherFeedback({
      title: "もういちど かんがえよう",
      message: "ヒントを みて、えらびなおしてみよう。",
      detail: appState.settings.hints === "on" ? `ヒント: ${item.hint}` : "ヒントは OFF です",
      tone: "retry",
      continueLabel: "もどって えらぶ",
      continueAction: "back-to-challenge"
    });
    return;
    appState.lastResult = "しっぱい。 コンボが 0に もどりました";
  } else {
    if (item.action === "choose") {
      completeChallengeSuccess();
      return;
    }

    appState.challengeActiveItem = item;
    setRoute("execute");
    return;

    appState.challengeCombo += 1;
    appState.challengeBest = Math.max(appState.challengeBest, appState.challengeCombo);
    appState.lastResult = "せいこう！ つぎへ すすもう";
  }

  if (appState.challengeCombo >= appState.settings.comboGoal) {
    appState.lastResult = `チャレンジ クリア！ ${appState.challengeCombo} れんぞく せいこう`;
    appState.challengeCombo = 0;
  }

  appState.selectedOptionId = null;
  appState.challengeIndex += 1;
  saveState();
  renderChallenge();
}

function openSettings(fromRoute) {
  appState.lastRouteBeforeSettings = fromRoute;
  setRoute("settings");
}

function readSettingsFromControls() {
  const judgeModeSelect = document.querySelector("#judgeModeSelect");
  const audioJudgeSelect = document.querySelector("#audioJudgeSelect");
  const hintSelect = document.querySelector("#hintSelect");
  const countdownRange = document.querySelector("#countdownRange");
  const comboRange = document.querySelector("#comboRange");

  return {
    judgeMode: judgeModeSelect.value,
    audioJudge: audioJudgeSelect.value,
    hints: hintSelect.value,
    countdownSeconds: Number(countdownRange.value),
    comboGoal: Number(comboRange.value)
  };
}

function renderSettings() {
  appEl.replaceChildren(cloneTemplate("settings-template"));

  const judgeModeSelect = document.querySelector("#judgeModeSelect");
  const audioJudgeSelect = document.querySelector("#audioJudgeSelect");
  const hintSelect = document.querySelector("#hintSelect");
  const countdownRange = document.querySelector("#countdownRange");
  const comboRange = document.querySelector("#comboRange");
  const countdownValueLabel = document.querySelector("#countdownValueLabel");
  const comboValueLabel = document.querySelector("#comboValueLabel");

  judgeModeSelect.value = appState.settings.judgeMode;
  audioJudgeSelect.value = appState.settings.audioJudge;
  hintSelect.value = appState.settings.hints;
  countdownRange.value = String(appState.settings.countdownSeconds);
  comboRange.value = String(appState.settings.comboGoal);
  countdownValueLabel.textContent = `${appState.settings.countdownSeconds} びょう`;
  comboValueLabel.textContent = `${appState.settings.comboGoal} れんぞく`;

  countdownRange.addEventListener("input", () => {
    countdownValueLabel.textContent = `${countdownRange.value} びょう`;
  });

  comboRange.addEventListener("input", () => {
    comboValueLabel.textContent = `${comboRange.value} れんぞく`;
  });

  const syncSettings = () => {
    appState.settings = readSettingsFromControls();
    saveState();
  };

  judgeModeSelect.addEventListener("change", syncSettings);
  audioJudgeSelect.addEventListener("change", syncSettings);
  hintSelect.addEventListener("change", syncSettings);
  countdownRange.addEventListener("input", syncSettings);
  comboRange.addEventListener("input", syncSettings);

  document.querySelector("#closeSettingsButton").addEventListener("click", () => {
    syncSettings();
    setRoute(appState.lastRouteBeforeSettings || "home");
  });

  document.querySelector("#saveSettingsButton").addEventListener("click", () => {
    syncSettings();
    setRoute(appState.lastRouteBeforeSettings || "home");
  });
}

headerSettingsButton.addEventListener("click", () => openSettings(appState.route));

loadState();
render();
