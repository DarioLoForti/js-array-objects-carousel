const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// Milestone 1: Aggiungiamo un contatore per tenere traccia dell'immagine attuale
let currentIndex = 0;

// Aggiungiamo l'ascoltatore degli eventi ai pulsanti next e prev
document.querySelector('.next').addEventListener('click', showNext);
document.querySelector('.prev').addEventListener('click', showPrev);

// Funzione per mostrare l'immagine successiva
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Funzione per mostrare l'immagine precedente
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Funzione per aggiornare il carosello
function updateCarousel() {
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

for(let key in images){
    let img = images[key];
   
}
for(i=0; i<images.length; i++){

    let div = document.querySelectorAll('.item.active');
    
    let image = `<img src=./${images[i].image} alt="${images[i].title}">`;
    div.innerHTML = image;
    console.log(div);

    let description = document.querySelectorAll('position-absolute');

    let title = `<h2>${images[i].title}</h2>`;
    let text = `<h5>${images[i].text}</h5>`;

    description.innerHTML = title + text;

    console.log(description);
    


}