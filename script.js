const gambar = document.querySelector(".jumbotron");
const overlayer = document.querySelector(".overlayer");
gambar.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN" || e.target.tagName == "IMG") {
    overlayer.style.display = "inherit";
  }
  console.log(e.target.tagName);
});
overlayer.addEventListener("click", function (e) {
  if (e.target.tagName != "IMG") {
    overlayer.style.display = "none";
  }
});
