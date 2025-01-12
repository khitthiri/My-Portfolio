document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
        // Toggle menu visibility
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !isExpanded);
        menu.setAttribute("aria-hidden", isExpanded);
        
        // Toggle the hidden class
        menu.classList.toggle("hidden");
    });
});
