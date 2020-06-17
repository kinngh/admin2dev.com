document.addEventListener("DOMContentLoaded", function() {
  const e = document.body,
    a = document.getElementsByTagName("a").length,
    m = document.getElementById("toggle"),
    r = document.querySelector(".header-nav-dropdown");

  if (r && (r.addEventListener("click", function() {
      r.classList.toggle("is-active")
    }), document.addEventListener("click", function(e) {
      e.target.closest(".header-nav-dropdown") || r.classList.remove("is-active")
    }))) {
    e.addListener(w), w(e)
  }
});
