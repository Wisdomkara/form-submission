// first form submission

let form = document.querySelector("#btn");
const out = document.querySelector(".out");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  out.textContent = `Congratulations you have submitted your data for proccessing`;
  out.classList.add("design");
  const Fullname = document.getElementById("Fullname").value;
  const E_mail = document.getElementById("Email").value;
  const date_of_birth = document.getElementById("date_of_birth").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("Full name", Fullname);
  localStorage.setItem("Email", E_mail);
  localStorage.setItem("date of birth", date_of_birth);
  localStorage.setItem("password", password);
});
console.log(form);
