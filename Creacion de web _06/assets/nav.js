document.addEventListener("DOMContentLoaded", function () {
  if (window.IntersectionObserver) {
    document.documentElement.classList.add("js-reveal");
    var els = document.querySelectorAll(".reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("mobile-open");
    });
  }

  document.querySelectorAll("li.has-dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });
});