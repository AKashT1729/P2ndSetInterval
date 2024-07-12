let intervalId;

document.querySelector("#start").addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;
    }, 1000);
    console.log("Started");
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Stopped");
});
