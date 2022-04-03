var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/",
  },

  {
    name: "Ferrari",
    image: "img/ferrari.jpg",
    link: "http://www.arabalar.com.tr/",
  },

  {
    name: "Toyota ",
    image: "img/toyota.jpg",
    link: "http://www.arabalar.com.tr/",
  },
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/",
  },

  {
    name: "Toyota ",
    image: "img/toyota.jpg",
    link: "http://www.arabalar.com.tr/",
  },
];

var index = 0;
var slaytCount = models.length;
var settings = {
  duration: "2000",
  random: true,
};

var interval;

init(settings);

document.querySelector(".fa-caret-left").addEventListener("click", function () {
  index--;
  showSlide(index);
});

document.querySelector(".fa-caret-right").addEventListener("click", function () {
    index++;
    showSlide(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(s) {

  var prev;
  
  interval = setInterval(function () {
    if (s.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      {
        prev = index;
      }
    } else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }

    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }

  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-img-top").setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
