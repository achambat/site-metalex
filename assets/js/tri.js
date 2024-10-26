function trierTableau() {
    const tableau = document.getElementById("membres");
    const lignes = Array.from(tableau.rows).slice(1); // Ignore l'en-tête
    
    lignes.sort((a, b) => {
        const nomA = a.cells[0].textContent.toLowerCase();
        const nomB = b.cells[0].textContent.toLowerCase();
        return nomA.localeCompare(nomB);
    });

    // Réinsérer les lignes triées dans le tableau
    lignes.forEach(ligne => tableau.appendChild(ligne));
}

// Appel de la fonction de tri après le chargement de la page
document.addEventListener("DOMContentLoaded", trierTableau);