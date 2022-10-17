const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

// Add event listener to menu button
menuButton.addEventListener("click", function (event) {
  // Toggle classes on click
  menuButton.classList.toggle("menu-button-active");
  navMenu.classList.toggle("menu-active");
});
