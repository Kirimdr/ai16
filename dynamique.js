document.addEventListener('DOMContentLoaded', function() {
    var btnConnexion = document.querySelector('.btn-connexion');

    // Ajout d'un écouteur d'événement pour le clic sur le bouton "Connexion" sur index.html
    btnConnexion.addEventListener('click', function() {
        // Redirection vers la page de connexion
        window.location.href = 'connexion.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var btnLeft = document.querySelector('.btn-left');

    // Ajout d'un écouteur d'événement pour le clic sur le bouton "S'inscrire" sur connexion.html
    btnLeft.addEventListener('click', function(event) {
        // Empêcher la redirection par défaut vers la page d'inscription
        event.preventDefault();
        
        // Redirection vers la page d'inscription
        window.location.href = 'inscrire.html';
    });
});
