/*
  Dropdown
*/

document.addEventListener("DOMContentLoaded", function() {
  const e = document.body,
    t = document.getElementById("toggle"),
    c = document.querySelector(".header-nav-dropdown"),
    o = document.querySelectorAll(".header-checkbox:checked");
  if (e.classList.add("is-loaded"), c && (c.addEventListener("click", function() {
      c.classList.toggle("is-active")
    }), document.addEventListener("click", function(e) {
      e.target.closest(".header-nav-dropdown") || c.classList.remove("is-active")
    })))

  function i(e) {
    e.matches && (t.checked = !1)
  }
});


/*
Pinned Section
*/

const e = document.querySelector(".pinned-section"),
  t = document.querySelector(".pinned-pages"),
  n = document.querySelector(".pinned-posts"),
  o = document.querySelector(".pinned-pages .item-1"),
  s = document.querySelector(".pinned-pages .item-2"),
  r = document.querySelector(".pinned-pages .item-3"),
  i = document.querySelector(".pinned-pages .item-4"),
  m = document.querySelector(".pinned-posts .item-1"),
  d = document.querySelector(".pinned-posts .item-2"),
  c = document.querySelector(".pinned-posts .item-3"),
  l = document.querySelector(".pinned-posts .item-4");
e && (m || o || e.remove()), o && (t.style.flexBasis = "25%", n && (n.style.flexBasis = "75%"), l && l.remove()), s && (t.style.flexBasis = "50%", n && (n.style.flexBasis = "50%"), c && c.remove(), l && l.remove()), r && (t.style.flexBasis = "75%", n && (n.style.flexBasis = "25%"), d && d.remove(), c && c.remove(), l && l.remove()), i && (t.style.flexBasis = "100%", n && n.remove());



//Dunkler Modus

var element = document.getElementById("myBody");
var darkStorage = localStorage.getItem("darkMode");
var darkText = document.getElementById("darkModeText");

if ((darkStorage == null) || (darkStorage == "disabled")) {
  localStorage.setItem("darkMode", "disabled");
  element.classList.remove("global-hash-dark-version");
  darkText.textContent= "Dunkler Modus";

}

if (darkStorage == "enabled") {
  localStorage.setItem("darkMode", "enabled");
  element.classList.add("global-hash-dark-version");
  darkText.textContent= "Lichtmodus";
}

function darkMode() {
  darkStorage = localStorage.getItem("darkMode");

  if ((darkStorage == null) || (darkStorage == "disabled")) {
    localStorage.setItem("darkMode", "enabled");
    darkText.textContent= "Lichtmodus";
  }

  if (darkStorage == "enabled") {
    localStorage.setItem("darkMode", "disabled");
    darkText.textContent= "Dunkler Modus";
  }
  element.classList.toggle("global-hash-dark-version");

}
