// All interactive behavior is local to the invitation demo.
const floralDoorIntro = document.getElementById("floralDoorIntro");
const doorOpen = document.getElementById("doorOpen");
if (floralDoorIntro && doorOpen) {
  document.body.classList.add("has-door-intro");
  ["header", "main", "footer"].forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => element.setAttribute("inert", ""));
  });
  doorOpen.focus({ preventScroll: true });
  doorOpen.addEventListener("click", () => {
    floralDoorIntro.classList.add("is-opening");
    ["header", "main", "footer"].forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => element.removeAttribute("inert"));
    });
    window.setTimeout(() => {
      floralDoorIntro.hidden = true;
      document.body.classList.remove("has-door-intro");
      document.getElementById("musicToggle")?.focus({ preventScroll: true });
    }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1600);
  });
}

const countdown = document.getElementById("countdown");
const dateTarget = new Date(countdown.dataset.date).getTime();
const timeNodes = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const remaining = Math.max(0, dateTarget - Date.now());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60)
  };
  Object.entries(values).forEach(([unit, value]) => {
    timeNodes[unit].textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
window.setInterval(updateCountdown, 1000);

const rsvpForm = document.getElementById("rsvpForm");
rsvpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("rsvpResponse").textContent = "Preview only — RSVP is inactive. Nothing was sent or saved.";
});

// A gentle synthesized chime is created only after the guest presses Play.
let audioContext;
let musicTimer;
let noteIndex = 0;
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const notes = [261.63, 329.63, 392, 329.63, 293.66, 349.23, 440, 349.23];

function playNote() {
  if (!audioContext || audioContext.state !== "running") return;
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const volume = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = notes[noteIndex++ % notes.length];
  volume.gain.setValueAtTime(0.0001, now);
  volume.gain.exponentialRampToValueAtTime(0.045, now + 0.08);
  volume.gain.exponentialRampToValueAtTime(0.0001, now + 1.25);
  oscillator.connect(volume);
  volume.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 1.3);
}

musicToggle.addEventListener("click", async () => {
  const isPlaying = musicToggle.getAttribute("aria-pressed") === "true";
  if (isPlaying) {
    window.clearInterval(musicTimer);
    if (audioContext) await audioContext.suspend();
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.setAttribute("aria-label", "Play invitation music");
    musicLabel.textContent = "Play music";
    return;
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    musicLabel.textContent = "Music unavailable";
    return;
  }
  audioContext ||= new AudioContextClass();
  await audioContext.resume();
  playNote();
  musicTimer = window.setInterval(playNote, 720);
  musicToggle.setAttribute("aria-pressed", "true");
  musicToggle.setAttribute("aria-label", "Pause invitation music");
  musicLabel.textContent = "Pause music";
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
