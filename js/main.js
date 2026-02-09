document.addEventListener("DOMContentLoaded", () => {

  let fatwas = [];

  // تحميل الفتاوى من JSON
  fetch("js/data/fatwas.json")
    .then(response => response.json())
    .then(data => {
      fatwas = data;
      renderFatwas(fatwas);
    })
    .catch(error => {
      console.error("خطأ في تحميل ملف الفتاوى:", error);
      document.getElementById("fatwaList").innerHTML =
        "<p>تعذّر تحميل الفتاوى</p>";
    });

  // عرض الفتاوى
  window.renderFatwas = function(list) {
    const container = document.getElementById("fatwaList");
    container.innerHTML = "";

    if (list.length === 0) {
      container.innerHTML = "<p>لا توجد فتاوى</p>";
      return;
    }

    list.forEach(fatwa => {
      const div = document.createElement("div");
      div.className = "fatwa";

      div.innerHTML = `
        <h3>${fatwa.question}</h3>
        <p>${fatwa.answer}</p>
        <small>التصنيف: ${fatwa.category}</small>
      `;

      container.appendChild(div);
    });
  };

  // فلترة حسب التصنيف
  window.filterCategory = function(category) {
    if (category === "الكل") {
      renderFatwas(fatwas);
    } else {
      const filtered = fatwas.filter(f =>
        f.category.trim() === category.trim()
      );
      renderFatwas(filtered);
    }
  };

  // البحث في الفتاوى
  window.searchFatwa = function() {
    const keyword = document
      .getElementById("searchInput")
      .value
      .toLowerCase();

    const results = fatwas.filter(f =>
      f.question.toLowerCase().includes(keyword) ||
      f.answer.toLowerCase().includes(keyword)
    );

    renderFatwas(results);
  };

  // التنقل بين الأقسام
  window.showSection = function(sectionId) {
    document.getElementById("fatwas").style.display = "none";
    document.getElementById("ai").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
  };

  // ذكاء اصطناعي بسيط (مؤقت)
  window.answerQuestion = function() {
    const q = document.getElementById("aiQuestion").value.trim();
    const answerBox = document.getElementById("answer");

    if (!q) {
      answerBox.textContent = "من فضلك اكتب سؤالاً.";
      return;
    }

    answerBox.textContent =
      "هذا جواب تجريبي. سيتم ربط ذكاء اصطناعي حقيقي لاحقاً إن شاء الله.";
  };

});
