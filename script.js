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

const sidebarMenu = document.querySelectorAll(".sidebar ul li a"),
  sidebarContent = document.querySelectorAll("main section");
for (let i = 0; i < sidebarMenu.length; ++i) {
  sidebarMenu[i].addEventListener("click", (e) => {
    e.preventDefault();
    sidebarContent.forEach((isi) => {
      if (!isi.classList.contains("d-none")) {
        isi.classList.add("d-none");
      }
    });
    sidebarContent[i].classList.remove("d-none");
  });
}
const humbergerMenu = document.querySelectorAll(".humberger"),
  sidebar = document.querySelector(".sidebar");
humbergerMenu.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    if (e.target.tagName == "INPUT") {
      sidebar.classList.toggle("geser");
    }
  });
});
// humbergerMenu.addEventListener("click", (e) => {
//   if (e.target.tagName == "INPUT") {
//     sidebar.classList.toggle("geser");
//   }
// });
