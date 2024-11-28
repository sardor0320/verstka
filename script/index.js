const toggleButton = document.getElementById('toggleButton');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'dark';
}
// Toggle function
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Dark ';
        localStorage.removeItem('theme');
    }
});