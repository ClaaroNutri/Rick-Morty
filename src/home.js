import { getCharacters } from "./services/getData.js";

// Tomamos el main container de nuestro Home y el loader
const container = document.querySelector('.presentacion');

const charactersList = async (page = 1) => { // por defecto le pasamos el page 1 por si no lo recibe
    
   
    const { results } = await getCharacters(page);
    
    results.forEach(character => { // por cada personaje creamos un article con sus datos
    const article = document.createElement('article');
    article.setAttribute('class', 'character');
    article.innerHTML = `
    <img class="img_cartoon" src="${character.image}" alt="">
    <div class="info">
    <h2>${character.name}</h2>
    <p>${character.species}</p>
    <p>${character.status.toLowerCase()}</p>
    <a href="/#/${character.id}">Cónoce más
    </a>
    </div>
    `;
    container.appendChild(article);
    });
    }
    charactersList();

    window.addEventListener('hashchange', () => {
        // Si el enlace lleva a /#/3, id toma el valor 3 que es el ID del personaje
        const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
        localStorage.setItem('charID', id);
        window.location.replace('/character.html');
        });