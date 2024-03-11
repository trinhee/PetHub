// Get all the card elements
const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the is-flipped class on the clicked card
        card.querySelector('.card__inner').classList.toggle('is-flipped');
    });
});