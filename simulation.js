function showMenuStars() {
  document.getElementById('menu-stars').style.display = "flex";
  document.getElementById('close-button').style.display = "inline-block";
  document.getElementById('show-menu-stars').style.transform = "translateY(-120px)";
}

function showOptions() {
  document.getElementById('menu-parameters').style.display = "flex";
}

function closeMenu() {
  document.getElementById('menu-stars').style.display = "none";
  document.getElementById('menu-parameters').style.display = "none";
  document.getElementById('close-button').style.display = "none";
  document.getElementById('show-menu-stars').style.transform = "translateY(0px)";
}

var i = 100;

setInterval( () => {
   // document.getElementById('star').style.opacity = `${i}%`;

   // i -= 10;

   // console.log(i);
}, 100);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateStars() {
  for(var i = 0; i < 100; i++) {
    var image = new Image();
    var environment = document.getElementById('wholepage')

    image.src = 'dog.png';
    image.setAttribute('id', 'background-stars')
    image.style.top = `${randomInt(0, 95)}vh`;
    image.style.left = `${randomInt(0, 95)}vw`;

    environment.appendChild(image);
  }
}
