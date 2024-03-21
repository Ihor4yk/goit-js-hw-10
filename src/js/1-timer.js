const startBtn = document.querySelector("[data-start]");

startBtn.addEventListener("click", () => {
  setInterval(() => {
    console.log("Hello");
  }, 1000)
});