const gambar = document.querySelector(".jumbotron");
const overlayer = document.querySelector(".overlayer");
gambar.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN" || e.target.className == "pas-foto") {
    overlayer.style.display = "inherit";
  }
  console.log(e.target.tagName);
});
overlayer.addEventListener("click", function (e) {
  if (e.target.tagName != "IMG") {
    overlayer.style.display = "none";
  }
});
const humbergerMenu = document.querySelector("main section .humberger"),
  sidebar = document.querySelector(".sidebar");
humbergerMenu.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    sidebar.classList.toggle("geser");
  }
});
