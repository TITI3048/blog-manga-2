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

/* Carrousel : Fonctionnalité */
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const slideWidth = slides[0].getBoundingClientRect().width;

// Fonction pour aligner les slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Fonction pour déplacer vers une slide spécifique
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Événement pour le bouton "Suivant"
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) moveToSlide(track, currentSlide, nextSlide);
});

// Événement pour le bouton "Précédent"
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) moveToSlide(track, currentSlide, prevSlide);
});


document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const daysInWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const events = {
        "2024-12-02": ["Sortie One Piece #1050"],
        "2024-12-05": ["Sortie Solo Leveling T15"],
        "2024-12-07": ["Weekly Shonen Jump"],
        "2024-12-09": ["Sortie Bleach T74"],
    };

    function createCalendar(year, month) {
        calendar.innerHTML = "";

        // Création des en-têtes (jours de la semaine)
        daysInWeek.forEach(day => {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day", "header");
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });

        // Obtenir le premier jour et le nombre de jours dans le mois
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Ajouter des cases vides pour les jours avant le début du mois
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("day");
            calendar.appendChild(emptyCell);
        }

        // Ajouter les jours du mois
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateString = date.toISOString().split("T")[0];

            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;

            // Ajouter les événements correspondants
            if (events[dateString]) {
                events[dateString].forEach(event => {
                    const eventElement = document.createElement("div");
                    eventElement.classList.add("event");
                    eventElement.textContent = event;
                    dayElement.appendChild(eventElement);
                });
            }

            calendar.appendChild(dayElement);
        }
    }

    // Générer le calendrier pour le mois actuel
    const today = new Date();
    createCalendar(today.getFullYear(), today.getMonth());
});

