document.addEventListener('DOMContentLoaded', function() {
  const animeInfoContainer = document.getElementById('animeInfo');

  // Fetching information about the anime "Naruto" from the Jikan API
  fetch('https://api.jikan.moe/v4/anime?q=naruto')
    .then(response => response.json())
    .then(data => {
      // Displaying selected information about the anime
      const animeInformation = [
        { label: 'Title', value: data.titles.en || 'Not available' },
        { label: 'Synopsis', value: data.synopsis || 'Not available' },
        { label: 'Type', value: data.type || 'Not available' },
        { label: 'Episodes', value: data.episodes || 'Not available' },
        { label: 'Score', value: data.score || 'Not available' }
      ];

      animeInformation.forEach(info => {
        const infoElement = document.createElement('div');
        infoElement.classList.add('anime-info');
        infoElement.innerHTML = `<strong>${info.label}:</strong> ${info.value}`;
        animeInfoContainer.appendChild(infoElement);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      animeInfoContainer.textContent = 'Failed to fetch anime information.';
    });
});



