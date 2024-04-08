// first form submission

const form = document.querySelector(".btn");
const out = document.querySelector(".out");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  out.textContent = `Congratulations you have submitted your data for proccessing`;
  out.classList.add("design");
});

// const form = document.querySelector(".btn");
// const out = document.querySelector(".output");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   out.textContent = `congratulations you have successfully won`;
// });
