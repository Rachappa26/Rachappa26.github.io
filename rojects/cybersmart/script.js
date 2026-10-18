const lessons = [
  {
    kicker: "MODULE 01 · PHISHING",
    title: "Spot the warning signs",
    intro: "Phishing messages try to pressure you into clicking a link, opening an attachment, or sharing information. Review this example before choosing a response.",
    type: "phishing",
    question: "What is the safest next step?",
    choices: [
      "Click the link quickly so your account is not locked.",
      "Reply with your password to verify your identity.",
      "Do not click. Verify through a trusted channel and report it using your organisation's process.",
      "Forward the message to colleagues to ask if they received it."
    ],
    answer: 2,
    feedback: "The message uses urgency and an unfamiliar link. Don't interact with the link or provide credentials. Verify independently and report it through the approved process.",
    wrong: "Urgency is a common pressure tactic. Avoid links, attachments, and replies until you've verified the request through a trusted channel."
  },
  {
    kicker: "MODULE 02 · ACCOUNT SECURITY",
    title: "Protect your accounts",
    intro: "Strong account habits reduce the risk of unauthorised access. Choose the best practice for a work account.",
    type: "password",
    question: "Which approach provides the strongest everyday protection?",
    choices: [
      "Reuse one memorable password across work and personal accounts.",
      "Use a unique password, store it in an approved password manager, and enable MFA where available.",
      "Share your password with a trusted teammate in case you are away.",
      "Use your name and birth year so you can remember the password."
    ],
    answer: 1,
    feedback: "Unique passwords limit the impact if another service is compromised. An approved password manager and multi-factor authentication add useful layers of protection.",
    wrong: "Reused, shared, or predictable passwords increase risk. Prefer unique passwords, approved password-management tools, and MFA where available."
  },
  {
    kicker: "MODULE 03 · INCIDENT RESPONSE",
    title: "Respond without delay",
    intro: "You clicked a link in a suspicious message and then realised it may have been fake. The safest response is prompt, calm, and follows your organisation's process.",
    type: "incident",
    question: "What should you do next?",
    choices: [
      "Delete the message and hope nothing happens.",
      "Wait until tomorrow to see whether anything unusual occurs.",
      "Immediately follow your organisation's incident-reporting process and provide the relevant details.",
      "Post a screenshot of the message publicly to warn others."
    ],
    answer: 2,
    feedback: "Report promptly using your organisation's approved channel. Follow instructions from IT or security staff; don't try to investigate on your own or share sensitive details publicly.",
    wrong: "Do not ignore a possible incident or post sensitive details publicly. Prompt reporting helps the appropriate team assess and respond."
  }
];

let currentStep = 0;
let score = 0;
let answered = false;

const intro = document.getElementById("intro");
const learningView = document.getElementById("learningView");
const resultsView = document.getElementById("resultsView");
const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const lessonKicker = document.getElementById("lessonKicker");
const lessonTitle = document.getElementById("lessonTitle");
const lessonIntro = document.getElementById("lessonIntro");
const lessonContent = document.getElementById("lessonContent");
const footerNote = document.getElementById("footerNote");
const progressBar = document.getElementById("progressBar");
const stepLabel = document.getElementById("stepLabel");
const progressPercent = document.getElementById("progressPercent");

startBtn.addEventListener("click", startLearning);
continueBtn.addEventListener("click", continueLearning);
document.getElementById("restartBtn").addEventListener("click", startLearning);
document.getElementById("reviewBtn").addEventListener("click", () => {
  resultsView.classList.add("hidden");
  learningView.classList.remove("hidden");
  showLesson(0);
});

function startLearning() {
  currentStep = 0;
  score = 0;
  answered = false;
  intro.classList.add("hidden");
  resultsView.classList.add("hidden");
  learningView.classList.remove("hidden");
  showLesson(currentStep);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLesson(index) {
  const lesson = lessons[index];
  answered = false;
  continueBtn.disabled = true;
  continueBtn.innerHTML = index === lessons.length - 1 ? 'See results <span aria-hidden="true">→</span>' : 'Continue <span aria-hidden="true">→</span>';
  lessonKicker.textContent = lesson.kicker;
  lessonTitle.textContent = lesson.title;
  lessonIntro.textContent = lesson.intro;
  stepLabel.textContent = `KNOWLEDGE CHECK ${index + 1} OF ${lessons.length}`;
  const percent = Math.round(((index + 1) / lessons.length) * 100);
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  footerNote.textContent = "Select one answer to receive feedback.";

  lessonContent.innerHTML = "";
  if (lesson.type === "phishing") {
    const email = document.createElement("div");
    email.className = "email-example";
    email.innerHTML = `
      <div class="email-top"><strong>From:</strong> IT Support &lt;support-security@example-alerts.com&gt;<br>
      <strong>To:</strong> Employee<br><strong>Subject:</strong> URGENT: Mailbox access will expire</div>
      <div class="email-body">
        <div class="email-subject">Action required within 30 minutes</div>
        <p>Your mailbox will be suspended. Use the link below to confirm your password and keep access.</p>
        <p><span class="warning-chip">Urgent deadline</span><span class="warning-chip">Unfamiliar sender domain</span><span class="warning-chip">Password request</span></p>
        <p style="color:#3559d8;text-decoration:underline;font-weight:700">Confirm your account now</p>
      </div>`;
    lessonContent.appendChild(email);
  }
  const question = document.createElement("p");
  question.className = "question";
  question.textContent = lesson.question;
  lessonContent.appendChild(question);

  const choices = document.createElement("div");
  choices.className = "choice-list";
  choices.setAttribute("role", "group");
  choices.setAttribute("aria-label", "Answer choices");
  lesson.choices.forEach((label, i) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + i)}</span><span>${escapeHTML(label)}</span>`;
    button.addEventListener("click", () => selectAnswer(i, button, choices, lesson));
    choices.appendChild(button);
  });
  lessonContent.appendChild(choices);
  const feedback = document.createElement("div");
  feedback.id = "feedback";
  feedback.className = "feedback hidden";
  feedback.setAttribute("role", "status");
  lessonContent.appendChild(feedback);
}

function selectAnswer(index, selectedButton, choices, lesson) {
  if (answered) return;
  answered = true;
  const buttons = [...choices.querySelectorAll("button")];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === lesson.answer) button.classList.add("correct");
    if (i === index && i !== lesson.answer) button.classList.add("incorrect");
    if (i === index) button.classList.add("selected");
  });
  const feedback = document.getElementById("feedback");
  feedback.classList.remove("hidden");
  if (index === lesson.answer) {
    score++;
    feedback.classList.add("good");
    feedback.innerHTML = `<strong>Correct — good choice.</strong>${escapeHTML(lesson.feedback)}`;
    footerNote.textContent = "Correct answer selected.";
  } else {
    feedback.classList.add("bad");
    feedback.innerHTML = `<strong>Not the safest choice.</strong>${escapeHTML(lesson.wrong)}<br><br><strong>Remember:</strong> ${escapeHTML(lesson.feedback)}`;
    footerNote.textContent = "Review the feedback, then continue.";
  }
  continueBtn.disabled = false;
}

function continueLearning() {
  if (!answered) return;
  if (currentStep < lessons.length - 1) {
    currentStep++;
    showLesson(currentStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResults();
  }
}

function showResults() {
  learningView.classList.add("hidden");
  resultsView.classList.remove("hidden");
  document.getElementById("scoreNumber").textContent = `${score}/${lessons.length}`;
  document.getElementById("resultIcon").textContent = score === lessons.length ? "✓" : "★";
  document.getElementById("resultTitle").textContent = score === lessons.length ? "Excellent work!" : "You've completed the module!";
  document.getElementById("resultSummary").textContent =
    score === lessons.length
      ? "You answered every knowledge check correctly. Keep applying these habits at work."
      : "Use the reminders below to reinforce the key habits. You can retry the knowledge checks whenever you're ready.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
