document.getElementById('culturalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const culture = document.getElementById('culture').value;

    const response = document.getElementById('response');
    response.textContent = `Terima kasih, ${name}. Anda telah mengirimkan informasi tentang budaya: ${culture}.`;
    
    // Reset form
    this.reset();
});