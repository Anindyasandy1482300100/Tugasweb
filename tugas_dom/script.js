document.addEventListener('DOMContentLoaded', () => {
    // Change Description
    document.getElementById('description').textContent = "Saya sangat menyukai berbagai jenis permainan dan aktif dalam komunitas gaming!";

    // Change Background Color of About Me Card
    document.getElementById('aboutCard').style.backgroundColor = '#e9ecef'; // Light grey color for the card

    // Change Heading Size
    document.getElementById('profileHeading').style.fontSize = '2.5rem'; // Increase the font size

    // Change Bio
    document.getElementById('bio').textContent = "Saya adalah seorang pengembang web yang berfokus pada pengalaman pengguna dan inovasi dalam permainan!";
});

const toggleButton = document.getElementById('toggleButton');
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    toggleButton.textContent = isDarkMode ? 'Ubah ke Mode Terang' : 'Ubah ke Mode Gelap';
});
