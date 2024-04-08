const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

const width = 2 + 2;
const height = 4 + 4;
const total = [width * height];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  output.textContent = `congratulations you have successfully won`;
  output.classList.add("design");
});
