const menuIcon = document.getElementById("menu-icon");

const navDilog = document.getElementById("nav-dilog")

const closeMenuButton = document.getElementById("cross")

menuIcon.addEventListener("click", () => {
        navDilog.classList.toggle("hidden")
})


closeMenuButton.addEventListener("click", () => {
        navDilog.classList.toggle("hidden")
})      