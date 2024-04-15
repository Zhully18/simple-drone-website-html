const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

// searchIcon.addEventListener("click", () => {
//   nav.classList.toggle("openSearch");
//   nav.classList.remove("openNav");
//   if (nav.classList.contains("openSearch")) {
//     return searchIcon.classList.replace("ri-search-line", "ri-close-fill");
//   }
//   searchIcon.classList.replace("ri-close-fill", "ri-search-line");
// });

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("ri-close-fill", "ri-search-line");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});