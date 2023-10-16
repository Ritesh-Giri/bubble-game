var timer = 3;
var score = 0;
var hitrn = 0;

function bubble() {
  var clutter = "";

  for (var i = 1; i <= 189; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }
  document.querySelector(".p-btm").innerHTML = clutter;
}

function runTimer() {
  var timerprnt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timeInterval").textContent = timer;
    } else {
      clearInterval(timerprnt);
      document.querySelector(".p-btm").innerHTML = "<h4>Game Over</h4>";
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector(".hitval").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector(".scoreval").textContent = score;
}

document.querySelector(".p-btm").addEventListener("click", function (dets) {
  var clicked = Number(dets.target.textContent);
  if (clicked === hitrn) {
    increaseScore();
    bubble();
    getNewHit();
  }
});

runTimer();
bubble();
getNewHit();
increaseScore();
