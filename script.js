var canvas = document.getElementById("matrix-background");
var context = canvas.getContext("2d");

var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
canvas.width = browser_width;
canvas.height = browser_height;

var font_size = 10;
var columns = Math.floor(browser_width / font_size);
var drops = [];
for (var i = 0; i < columns; i++) {
  drops.push(0);
}

var str = "Nizar El Idrysy";

function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, browser_width, browser_height);
  context.font_size = "700 " + font_size + "px";
  context.fillStyle = "#00cc33";

  for (var i = 0; i < columns; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * font_size;
    var y = drops[i] * font_size;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
draw();
setInterval(draw, 35); //speed of the movement of the letters
