function answerQuestion() {
  const q = document.getElementById("aiQuestion").value;

  if (!q) {
    document.getElementById("answer").innerText =
      "من فضلك اكتب سؤالك أولاً";
    return;
  }

  document.getElementById("answer").innerText =
    "⚠️ هذه إجابة تجريبية. سيتم ربط الذكاء الاصطناعي الحقيقي لاحقاً.\n\nسؤالك: " +
    q;
}
