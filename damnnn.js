function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    "Bishkek, KG • " +
    now.toLocaleString("en-US", {
      month: "short", day: "numeric",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
}
updateClock();
setInterval(updateClock, 1000);
document.getElementById("techSearch").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".tech-card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});