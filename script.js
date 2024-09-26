// Function to highlight bold words
function highlight() {
    const boldWords = document.querySelectorAll('.bold'); // Select all strong elements
    boldWords.forEach(word => {
        word.classList.add('highlight'); // Add highlight class to change color
    });
}

// Function to revert the highlight
function return_normal() {
    const boldWords = document.querySelectorAll('.bold'); // Select all strong elements
    boldWords.forEach(word => {
        word.classList.remove('highlight'); // Remove highlight class to revert color
    });
}

// Event listeners for mouseover and mouseout
const link = document.getElementById('highlightLink');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);