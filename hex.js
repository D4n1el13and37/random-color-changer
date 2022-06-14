const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
  let qurrentColor = "#"
  for (let i = 0; i < 6; i++) {
    qurrentColor += colors[getRandomNumber()];
  }
  document.body.style.backgroundColor = qurrentColor;
  color.innerHTML = qurrentColor;
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
} 