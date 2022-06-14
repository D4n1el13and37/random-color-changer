const colors = ["aqua", "GreenYellow", "LawnGreen", "Chartreuse", "LightSeaGreen", "yellow",]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
  const randomNumber = getRandom ();
  color.innerHTML = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
})

function getRandom () {
  return Math.floor(Math.random() * colors.length);
};