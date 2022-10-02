function showMenuStars() {
  document.getElementById('menu-stars').style.display = "flex";
  document.getElementById('close-button').style.display = "inline-block";
  document.getElementById('show-menu-stars').style.transform = "translateY(-120px)";
}

function showParameters() {
  document.getElementById('menu-parameters').style.display = "flex";
}

function showSpeedMenu() {
   document.getElementById('menu-speed').style.display = "flex";
}

function closeMenu() {
  document.getElementById('menu-stars').style.display = "none";
  document.getElementById('menu-parameters').style.display = "none";
  document.getElementById('menu-speed').style.display = "none";
  document.getElementById('close-button').style.display = "none";
  document.getElementById('show-menu-stars').style.transform = "translateY(0px)";
  highlighted_star(0);
}

function menuButton() {
   showMenuStars();
   showSpeedMenu();
}

function onStart() {
   generateBackgroundStars();
   generateGiantStars();
}

var star_number = 0;

function starOptions(star_no) {
   showParameters();
   highlighted_star(star_no);

   star_number = star_no;
}

const background_stars_count = 350;

setInterval( () => {
   stars = document.getElementsByClassName('background-stars');

   for(var i = 0; i < background_stars_count; i++) {
      twinkle(stars[i], randomInt(25, 100), randomInt(1, 3));
   }

   if(star_number != 0) {
      make_changes(star_number);
   }
   

}, 250);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateBackgroundStars() {

   var environment = document.getElementById('wholepage');
   const image_sources = ['star1.png', 'star2.png', 'star3.png', 'star4.png', 'star5.png'];

   for(var i = 0; i < background_stars_count; i++) {
      var image = new Image();
      var width_height_size = `${randomInt(6, 20)}px`;
      var image_index = randomInt(0, 4);

      image.src = image_sources[image_index];
      image.setAttribute('id', 'background-stars')
      image.setAttribute('class', 'background-stars')

      image.style.top = `${randomInt(0, 95)}vh`;
      image.style.left = `${randomInt(0, 95)}vw`;

      image.style.width = width_height_size;
      image.style.height = width_height_size;

      environment.appendChild(image);
   }
}

function generateGiantStars() {

   var environment = document.getElementById('wholepage');

   for(var i = 0; i < 4; i++) {
      var image = new Image();
      var width_height_size = 100;

      image.src = 'star-giant.png';
      image.setAttribute('id', 'giant-stars')
      image.setAttribute('class', 'giant-stars')

      image.style.position = "static";


      image.style.top = `${randomInt(0, 80)}vh`;
      image.style.left = `${randomInt(0, 80)}vw`;

      image.style.width = `${width_height_size}px`;
      image.style.height = `${width_height_size}px`;

      image.style.opacity = "75%";

      var div = document.createElement("div");
      div.setAttribute('id', `star-giant${i}_div`);

      div.style.position = "absolute";

      div.style.width = image.style.width;
      div.style.height = image.style.height;

      div.style.top = image.style.top;
      div.style.left = image.style.left;

      div.style.borderRadius = "50%";

      environment.appendChild(div);


      div.appendChild(image);

      console.log(width_height_size);
   }
}

function twinkle(star, opacity, speed) {
   star.style.opacity = `${opacity * speed}%`
}

function highlighted_star(star_number) {
   var stars = document.getElementsByClassName('giant-stars');
   var star_index = star_number - 1;

   for(var i = 0; i < 4; i++) {
      stars[i].style.border = "none";
   }

   stars[star_index].style.border = "solid azure 2px";

   document.getElementById('size').value = star_sizes[star_index];
   document.getElementById('color').value = star_colors[star_index];
}

var star_sizes = [50, 50, 50, 50];
var star_colors = ['#000000', '#000000', '#000000', '#000000'];

function make_changes(star_number) {
   var stars = document.getElementsByClassName('giant-stars');
   var star_index = star_number - 1;
   var div = document.getElementById(`star-giant${star_index}_div`);
   
   //SIZE
   stars[star_index].style.width = `${document.getElementById('size').value * 2}px`;
   stars[star_index].style.height = `${document.getElementById('size').value * 2}px`;
   star_sizes[star_index] = document.getElementById('size').value

   div.style.width = stars[star_index].style.width;
   div.style.height = stars[star_index].style.height;
   
   //COLOR
   div.style.backgroundColor = `${document.getElementById('color').value}`;
   star_colors[star_index] = document.getElementById('colors').value;

   console.log(document.getElementById('color').value);
}
