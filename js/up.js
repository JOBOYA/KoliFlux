const topButton = document.querySelector('#top-button');

topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});



window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-button").style.display = "block";
        
        } else {
        document.getElementById("top-button").style.display = "none";
        
        }
        }
        
        /* Retourner en haut de la page lorsque le bouton est cliqué */
        document.getElementById("top-button").onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
        
     


