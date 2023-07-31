// **自己紹介写真*/
$(document).ready(function() {
  $('.slider').slick({
    // 画像スライダーのオプション設定
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
  });
});


//ワニ放出
function releaseWani() {
  const waniCount = document.getElementById("waniCount").value;
  const waniContainer = document.getElementById("waniContainer");
  
  // ワニをクリア
  waniContainer.innerHTML = "";
  
  // ワニを追加
  for (let i = 0; i < waniCount; i++) {
    const wani = document.createElement("span");
    wani.innerHTML = "🐊";
    waniContainer.appendChild(wani);
  }
}



// アニマル大脱出
const animals = ["🐒","🦍","🦧","🐩","🐕","🐈","🐅","🐆","🐎","🦌","🦏","🦛","🐂","🐃","🐄","🐖","🐏","🐑","🐐","🐪","🐫","🦙","🦘","🦥","🦨","🦡","🐘","🐁","🐀","🦔","🐇","🦎","🐊","🐢","🦦","🦆","🐓","🦃","🦅","🦢","🦜","🦩","🦚","🦉","🐦","🐧","🐥","🐤"];

function getRandomAnimal() {
  return animals[Math.floor(Math.random() * animals.length)];
}

function releaseAnimals() {
  const animalCount = document.getElementById("animalCount").value;
  const animalContainer = document.getElementById("animalContainer");
  animalContainer.innerHTML = "";

  for (let i = 0; i < animalCount; i++) {
    const animal = document.createElement("span");
    animal.innerHTML = getRandomAnimal();
    animalContainer.appendChild(animal);
  }
}
