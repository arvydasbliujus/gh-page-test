window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").style.fontSize = "0.8rem";
  } else {
    document.querySelector(".header").style.fontSize = "1.8rem";
  }
}