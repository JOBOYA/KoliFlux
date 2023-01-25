
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
    }
};



function showLoader() {
    document.querySelector('.loader-wrapper').style.display = 'block';
  }
  
  function hideLoader() {
    document.querySelector('.loader-wrapper').style.display = 'none';
  }

const searchBtn = document.getElementById('btn');
searchBtn.addEventListener('click', () => {
    const searchValue = document.getElementById('search').value;
    const departement = searchValue;
    // Effacement des résultats précédents avant de charger les nouveaux
    const card = document.querySelector('.card');
    card.innerHTML = '';
    showLoader();
    fetch(`https://immobilier-leboncoin.p.rapidapi.com/api/v1/annonces?departement=${departement}`, options)
        .then(response => response.json())
        .then(response => {
            const importantProperties = response.ads;
            const card = document.querySelector('.card');
            card.innerHTML = '';
            importantProperties.forEach(property => {
                const propertyCard = `<div class="box">
                
               
                <img src="${property.original_ad.images.urls[0]}"/> 
                <h2 class="info2">${property.original_ad.subject}</h2>
                <p><strong>Prix</strong> :${property.original_ad.price[0]}€</p>
                <p><strong>Publication</strong> : ${property.original_ad.first_publication_date}</p> 
					<p>${property.zipcode}</p>
					<p><strong>Ville</strong> : ${property.city}</p>
					<p><strong>Type</strong> :${property.category}</p>
					<p>${property.type}</p>
                    <p><strong>Description :</strong></p>
					<p>${property.original_ad.body}</p>
                    
                    
				</div>
                `;
                card.innerHTML += propertyCard;
            });
        })
        .catch(err => {
            hideLoader();
            console.error(err);
        });
});