import { getCharater } from "./services/getData.js";

    const container = document.querySelector('#character');
   
    const getID = localStorage.getItem('charID');

    const loadCharacter = async (id) => {
        
        const data = await getCharater(id);
       
        const article = document.createElement('article');
        article.setAttribute('class', 'character');
        article.innerHTML = `<div class="personaje">
        <img src="${data.image}" alt="">
        <h2>${data.name}</h2>
        <p class="data"><span>Origen:</span> ${data.origin.name}</p>
        <p class="data"><span>Locación Actual:</span> ${data.location.name}</p>
        <p class="data"><span>Especie:</span> ${data.species}</p>
        <p class="${data.status.toLowerCase()}"></p>
        </div>
        `;
        container.appendChild(article);
        }
        loadCharacter(getID);

        