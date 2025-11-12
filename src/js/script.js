// On cible les éléments à modifier
const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-btn");

// Ajoute un écouteur d'événements au bouton 'toggle'
toggle.addEventListener("click", () => {
    // Mise à jour des attributs ARIA pour l'accessibilité
    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
});
