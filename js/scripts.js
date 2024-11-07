document.addEventListener("DOMContentLoaded", function() {
    console.log("Blog Manga loaded!");
});
document.addEventListener("DOMContentLoaded", function() {
    const mangaCards = document.querySelectorAll(".manga-card");

    mangaCards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`Bienvenue dans la section ${card.querySelector("h3").innerText}!`);
        });
    });
    
    const commentButton = document.querySelector("button");
    commentButton.addEventListener("click", function() {
        const commentBox = document.querySelector("textarea");
        if (commentBox.value.trim()) {
            alert("Merci pour ton commentaire!");
            commentBox.value = "";
        } else {
            alert("Le commentaire ne peut pas être vide.");
        }
    });
});
