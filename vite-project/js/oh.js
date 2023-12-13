import { DOMselectors } from "./idk.js";

async function getData() {
    let res = await fetch(
        "https://api.nookipedia.com/villagers?&api_key=cdaec8de-8006-4747-9dec-088bf32c815c"
    );
    let villagers = await res.json();
    /* villagers.forEach((villager) => console.log(villager.name)); */
    villagers.forEach((villager) =>
        DOMselectors.gallery.insertAdjacentHTML(
            "beforeend",
            `<div class="gall">
                   <h2 class="Name">${villager.name}</h2>
                   <img src="${villager.image_url}" alt="Villager Image" class="img"/>
                   <h3 class="Species">${villager.species}</h3>
                   <h3 class="StarSign">${villager.sign}</h3>
               </div>`
        )
    );
}
getData();


