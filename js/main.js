document.getElementById("mob-btn-close").addEventListener("click", function () {
  document.getElementById("mob-menu-open").classList.remove("is-open");
});

document.getElementById("mob-btn-open").addEventListener("click", function () {
  document.getElementById("mob-menu-open").classList.add("is-open");
});
document
  .getElementById("modal-btn-close")
  .addEventListener("click", function () {
    document.getElementById("modal-open").classList.remove("is-open");
  });

document
  .getElementById("modal-btn-open")
  .addEventListener("click", function () {
    document.getElementById("modal-open").classList.add("is-open");
  });
