// Background Color On Scroll On Top Nav
let navBarTop = document.querySelector("#header .navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navBarTop.classList.add("scroll-on");
  } else {
    navBarTop.classList.remove("scroll-on");
  }
};

// Navbar Hide On Click When Collapsed
let navBar = document.querySelectorAll("#header .nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
