const toggleButton = document.getElementsByClassName("togglebutton")[0];
const navbarLinks = document.getElementsByClassName("itemdisappear")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
