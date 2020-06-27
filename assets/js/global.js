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

//Dark mode

var element = document.getElementById("myBody");
var darkStorage = localStorage.getItem("darkMode");

if ((darkStorage == null) || (darkStorage == "disabled")) {
  localStorage.setItem("darkMode", "disabled");
  element.classList.remove("global-hash-dark-version");

}

if (darkStorage == "enabled") {
  localStorage.setItem("darkMode", "enabled");
  element.classList.add("global-hash-dark-version");
}

function darkMode() {
  darkStorage = localStorage.getItem("darkMode");
  if ((darkStorage == null) || (darkStorage == "disabled")) {
    localStorage.setItem("darkMode", "enabled");
  }

  if (darkStorage == "enabled") {
    localStorage.setItem("darkMode", "disabled");
  }
  element.classList.toggle("global-hash-dark-version");

}
