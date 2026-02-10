/* =========================
   التنقل بين الأقسام
========================= */
function showSection(id) {
  document.getElementById("fatwas").style.display = "none";
  document.getElementById("ai").style.display = "none";

  const sunnaSection = document.getElementById("sunna");
  if (sunnaSection) sunnaSection.style.display = "none";

  document.getElementById(id).style.display = "block";
}

/* =========================
   MENU ☰
========================= */
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (!menu) return;

  menu.style.right =
    menu.style.right === "0px" ? "-260px" : "0px";
}

/* إغلاق المينيو عند الضغط خارجها */
document.addEventListener("click", function (e) {
  const menu = document.getElementById("sideMenu");
  const btn = document.querySelector(".menu-btn");

  if (!menu || !btn) return;

  if (
    menu.style.right === "0px" &&
    !menu.contains(e.target) &&
    !btn.contains(e.target)
  ) {
    menu.style.right = "-260px";
  }
});

/* =========================
   عرض الفتاوى
========================= */
function renderFatwas(list) {
  const container = document.getElementById("fatwaList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>🔍 لا توجد فتاوى مطابقة</p>";
    return;
  }

  list.forEach(fatwa => {
    const div = document.createElement("div");
    div.className = "fatwa";

    div.innerHTML = `
      <strong>❓ السؤال:</strong><br>
      ${fatwa.q}<br><br>

      <strong>✅ الجواب:</strong><br>
      ${fatwa.a}<br><br>

      <em>📚 المصدر: ${fatwa.src}</em>
    `;

    container.appendChild(div);
  });
}

/* =========================
   البحث في الفتاوى
========================= */
function searchFatwa() {
  const value = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filtered = fatwas.filter(f =>
    f.q.toLowerCase().includes(value) ||
    f.a.toLowerCase().includes(value)
  );

  renderFatwas(filtered);
}

// عرض جميع الفتاوى مباشرة عند فتح الموقع
renderFatwas(fatwas);

/* =========================
   التصفية حسب التصنيف
========================= */
function filterCategory(category) {
  if (category === "all") {
    renderFatwas(fatwas);
  } else {
    const filtered = fatwas.filter(
      f => f.category === category
    );
    renderFatwas(filtered);
  }
}

/* =========================
   عرض السنة
========================= */
function renderSunna() {
  const container = document.getElementById("sunnaList");
  if (!container) return;

  container.innerHTML = "";

  sunnaQuestions.forEach(item => {
    const div = document.createElement("div");
    div.className = "fatwa";

    div.innerHTML = `
      <strong>❓ السؤال:</strong><br>
      ${item.q}<br><br>

      <strong>📜 الجواب:</strong><br>
      ${item.a}<br><br>

      <em>📚 المصدر: ${item.src}</em>
    `;

    container.appendChild(div);
  });
}

function showSunna() {
  document.getElementById("fatwas").style.display = "none";
  document.getElementById("ai").style.display = "none";

  const sunnaSection = document.getElementById("sunna");
  sunnaSection.style.display = "block";

  renderSunna();
}

/* =========================
   الذكاء الاصطناعي
========================= */
function answerQuestion() {
  const questionInput = document
    .getElementById("question")
    .value
    .trim()
    .toLowerCase();

  const answerBox = document.getElementById("answer");

  if (questionInput === "") {
    answerBox.innerHTML = "❗ من فضلك اكتب السؤال أولاً";
    return;
  }

  answerBox.innerHTML =
    "🤖 هذا جواب تقريبي، يُرجى الرجوع لأهل العلم في الفتوى.";
}
