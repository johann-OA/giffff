// =====================
// Valentine Gift Script (UPDATED: Garden instead of Gallery)
// =====================

// ---- Customize here ----
const girlName = "aya ";     // change to her name
const yourName = "mohamed  ";        // change to your name

const titleLine = `To ${girlName} 💖`;
const subLine = "I made this for you, because you are my favorite part of life.";

const letter = `
Hey baby girl,

I just wanted you to know something simple:
I’m grateful for you for your heart, your presence, and the way you make life feel lighter.
m always proud of having u 

On hard days, thinking about you gives me peace.
On good days, you make them even better.

no one could ever replace u , u are not juste someone i love , 
you are the only person in this world i want to love .

Happy Valentine’s Day 💘

Always,
${yourName}
`.trim();

const reasons = [
  "Your kindness and the way you care.",
  "Your smile (it changes my whole mood).",
  "The way you understand me.",
  "ur voice , ur honnesty",
  "you brings me peace, not stress.",
  "I can be fully myself around her.",
  "Because you’re you — and I choose you   and i will always choose you"
];

// ---- Helper ----
const $ = (id) => document.getElementById(id);

// Run only after the page is fully ready
document.addEventListener("DOMContentLoaded", () => {
  try {
    // =====================
    // Basic text
    // =====================
    const titleEl = $("title");
    const subtitleEl = $("subtitle");
    const yourNameEl = $("yourName");
    const dateLineEl = $("dateLine");

    if (titleEl) titleEl.textContent = titleLine;
    if (subtitleEl) subtitleEl.textContent = subLine;
    if (yourNameEl) yourNameEl.textContent = yourName;

    if (dateLineEl) {
      dateLineEl.textContent = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    // =====================
    // Letter
    // =====================
    const letterTextEl = $("letterText");
    if (letterTextEl) letterTextEl.textContent = letter;

    const letterCard = $("letterCard");
    const openLetterBtn = $("openLetter");

    if (openLetterBtn && letterCard) {
      openLetterBtn.addEventListener("click", () => {
        letterCard.hidden = !letterCard.hidden;
        if (!letterCard.hidden) {
          letterCard.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // =====================
    // Reasons
    // =====================
    const reasonsList = $("reasonsList");
    if (reasonsList) {
      reasonsList.innerHTML = "";
      reasons.forEach((r, i) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>💗</span><div><b>Reason ${i + 1}</b><br>${r}</div>`;
        reasonsList.appendChild(li);
      });
    }

    // =====================
    // Flower Garden (Peonies + Lilies) ✅ NEW
    // =====================
    const garden = $("garden");
    if (garden) {
      const flowerCount = 10;
      const sparklesCount = 18;

      const makeFlower = (type) => {
        const f = document.createElement("div");
        f.className = `flower ${type}`;

        // random placement / size / speed
        const left = Math.random() * 92 + 4;               // 4%..96%
        const scale = (Math.random() * 0.35 + 0.85).toFixed(2); // 0.85..1.20
        const swayDur = (Math.random() * 2 + 3).toFixed(2);     // 3..5s
        const delay = (Math.random() * 1.6).toFixed(2);

        f.style.left = `${left}%`;
        f.style.animationDuration = `${swayDur}s`;
        f.style.animationDelay = `${delay}s`;
        f.style.transform = `scale(${scale})`;

        f.innerHTML = `
          <div class="stem"></div>
          <div class="leaf l1"></div>
          <div class="leaf l2"></div>
          <div class="bloom">
            <span class="petal p1"></span>
            <span class="petal p2"></span>
            <span class="petal p3"></span>
            <span class="petal p4"></span>
            <span class="petal p5"></span>
            <span class="petal p6"></span>
            ${type === "peony" ? `<span class="center"></span>` : `<span class="stamen"></span>`}
          </div>
        `;
        return f;
      };

      const makeSparkle = () => {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.left = `${Math.random() * 100}%`;
        s.style.bottom = `${Math.random() * 40}px`;
        s.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
        s.style.animationDuration = `${(Math.random() * 2 + 3).toFixed(2)}s`;
        s.style.transform = `scale(${(Math.random() * 0.7 + 0.6).toFixed(2)})`;
        return s;
      };

      garden.innerHTML = "";

      // Flowers: half peonies, half lilies
      for (let i = 0; i < flowerCount; i++) {
        const type = i % 2 === 0 ? "peony" : "lily";
        garden.appendChild(makeFlower(type));
      }

      // Sparkles
      for (let i = 0; i < sparklesCount; i++) {
        garden.appendChild(makeSparkle());
      }
    }

    // =====================
    // Modal (Surprise)
    // =====================
    const modal = $("modal");
    const modalTitle = $("modalTitle");
    const modalText = $("modalText");

    const surpriseBtn = $("surpriseBtn");
    const closeBtn = $("closeModal"); // X button
    const okBtn = $("modalBtn");      // Aww button
    const modalBox = document.querySelector(".modal-box");

    const openModal = (title, text) => {
      if (!modal) return;
      if (modalTitle) modalTitle.textContent = title;
      if (modalText) modalText.textContent = text;
      modal.hidden = false;
    };

    const closeModal = () => {
      if (!modal) return;
      modal.hidden = true;
    };

    // Open modal
    if (surpriseBtn) {
      surpriseBtn.addEventListener("click", () => {
        openModal("Surprise 🎉", "You are loved more than you know 💘");
      });
    }

    // Close modal by X
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
      });
    }

    // Close modal by Aww button
    if (okBtn) {
      okBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
      });
    }

    // Click outside closes
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }

    // Prevent clicks inside the box from closing
    if (modalBox) {
      modalBox.addEventListener("click", (e) => e.stopPropagation());
    }

    // ESC closes
    document.addEventListener("keydown", (e) => {
      if (modal && !modal.hidden && e.key === "Escape") closeModal();
    });

  } catch (err) {
    console.error("Script crashed ❌", err);
  }
});
