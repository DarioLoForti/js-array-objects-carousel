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
    let item = document.querySelector('.item');
    let image = `<img src=./${images[currentIndex].image} alt="${images[currentIndex].title}">`;
    
    let title = `<h2>${images[currentIndex].title}</h2>`;
    let text = `<h5>${images[currentIndex].text}</h5>`;
    
    
    item.innerHTML = image + title + text ;

}

// Funzione per aggiornare il carosello
// function updateCarousel() {
//     let item = document.querySelector('.item');
//     let image = `<img src=./${images[currentIndex].image} alt="${images[currentIndex].title}">`;
    
//     let descrition = document.createElement("div");
//     descrition.classList.add("position-absolute", "bottom-50", "text-right", "color-white", "padding-text");
    
//     item.innerHTML = image + descrition;

   
    
//     let title = `<h2>${images[currentIndex].title}</h2>`;
//     let text = `<h5>${images[currentIndex].text}</h5>`;
//     descrition.innerHTML = title + text;

// }

