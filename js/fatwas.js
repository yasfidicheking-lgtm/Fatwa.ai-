fetch("data/fatwas.json")
  .then(res => res.json())
  .then(fatwas => {
    const box = document.getElementById("fatwas");
    if (!box) return;

    box.innerHTML = "";

    fatwas.forEach(f => {
      box.innerHTML += `
        <div class="fatwa">
          <h4>س: ${f.question}</h4>
          <p><strong>ج:</strong> ${f.answer}</p>
          <small>${f.category}</small>
        </div>
      `;
    });
  });
