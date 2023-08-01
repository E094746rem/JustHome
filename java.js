// this will meke it say in the consile i got clicked
// const bar = document.querySelector(".fa-bars");
// bar.addEventListener("click", () => {
//   console.log("i got clicked");
// });
const bar = document.querySelector(".fa-bars");
const sidebar = document.querySelector(.sidebar);
bar.addEventListener("click", () => {
  sidebar.classList.toggle(".show-menu")
});
