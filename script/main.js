// Service Content
let serviceContent = document.querySelectorAll(".content");
let serviceMenu = document.querySelectorAll(".service-menu-a");
console.log(serviceContent);
serviceMenu.forEach(function (element, index){
    element.addEventListener('click', function (){
        let serviceMenuActive = document.querySelector(".service-menu-a.active");
        let serviceContentActive = document.querySelector(".content.is-active");
        element.classList.add('active');
        serviceMenuActive.classList.remove('active');
        serviceContent[index].classList.add('is-active');
        serviceContentActive.classList.remove('is-active');
    });
});
// News Popup
let newsContent = document.querySelectorAll(".news-content img");
console.log(newsContent);
// newsContent.forEach(function(element){
//     element.addEventListener('mouseover', function(){
//         let newsPopup = document.querySelectorAll(".news-content-popup");
//         newsPopup[i].style.display = "block";
//         i++;
//         newsPopup[i-1].style.display = "none";
//     });
// });
// Вопрос? Почему вот так не работает? Должно же)

//News Menu
let newsMenu = document.querySelectorAll(".news-menu-a");
console.log(newsMenu);

newsMenu.forEach(function(element){
    element.addEventListener('click', function(){
        let newsMenuActive = document.querySelector(".news-menu-a.active");
        element.classList.add("active");
        newsMenuActive.classList.remove("active");
    });
});
//Work Filter
let flex = document.querySelector('.news-content');
let iso = new Isotope( flex, {
  // options...
  itemSelector: '.all'
});

let filterBtn = document.querySelectorAll('.news-menu-a');
console.log(filterBtn)
for ( let i = 0; i < filterBtn.length; i++){
    filterBtn[i].onckick = function (click) {
        click.preventDefault();
        let filterData = event.target.getAttribute('data-filter');
        news-content.arrange({
            filter: graphic
        });
    };
}

// Portfolio Slider
let left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    slider = document.querySelectorAll(".slider img"),
    sliderContent = document.querySelectorAll(".user");
console.log(sliderContent);

let counter = [];

slider.forEach(function (element, i){
    element.addEventListener('click', function (){
        sliderActive = document.querySelector(".slider-active");
        ContentActive = document.querySelector(".user.active")
        element.classList.add('slider-active');
        sliderActive.classList.remove('slider-active');
        sliderContent[i].classList.add('active');
        ContentActive.classList.remove('active');
        counter = i;
    });
});

left.addEventListener('click', function(){
    sliderActive = document.querySelector(".slider-active");
    counter--;
    slider[counter].classList.add('slider-active');
    sliderActive.classList.remove('slider-active');
    sliderContent[counter].classList.add('active');
    ContentActive.classList.remove('active');

    if (counter <= 0){
        counter = 3;
    }
});

right.addEventListener('click', function(){
    sliderActive = document.querySelector(".slider-active");
    ContentActive = document.querySelector(".user.active")
    counter++;
    console.log(counter);
    slider[counter].classList.add('slider-active');
    sliderActive.classList.remove('slider-active');
    sliderContent[counter].classList.add('active');
    ContentActive.classList.remove('active');
    if (counter >= 3){
        counter = -1;
    }
});
