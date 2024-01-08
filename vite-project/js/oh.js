import { DOMselectors } from "./idk";
const API = `https://api.nookipedia.com/villagers?&api_key=cdaec8de-8006-4747-9dec-088bf32c815c`
async function getData(API) {
    try {
        const res = await fetch(API);
        console.log(res);
        if (res.status != 200) {
            throw new Error(res.statusText);
        }

        const villagers = await res.json();

        console.log(villagers);


        function ello(arr) {
            arr.forEach((villager) =>
                DOMselectors.gallery.insertAdjacentHTML(
                    "beforeend",
                    `<div class="gall">
           <h2 class="Name">${villager.name}</h2>
           <img src="${villager.image_url}" alt="Villager Image" class="img"/>
           <h3 class="Species">${villager.species}</h3>
           <h3 class="StarSign">${villager.sign}</h3>
       </div>` )
            );

        }
        ello(villagers);

        function pello() {
            DOMselectors.enter.addEventListener("click", function (event) {
                DOMselectors.gallery.innerHTML = ""
                let vname = DOMselectors.search.value
                let found = villagers.filter((villager) => villager.name.includes([vname]))
                ello(found);
                event.preventDefault();
            }
            )
        }
        pello();
    } catch (error) {
        console.log(error)
    }
}
getData(API);

/* function roop {
    DOMselectors.Thing.addEventListener("click", function () {
        async function getData() {
            let value = DOMselectors.Thing.value
            let API = `https://api.nookipedia.com/villagers?name=${value}&api_key=cdaec8de-8006-4747-9dec-088bf32c815c`
            try {
                let res = await fetch(API);
                if (!response.good) {
                    throw new Error('slut you have an error');
                }
                let villagers = await res.json();
                POOOP(villagers);

            } catch (error) {
                console.error('zzz', error);
            }
            function POOOP() {
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
        }
    })
};
 */

// roop();
// getData(); 
/* async function getData() {
        /* villagers.forEach((villager) => console.log(villager.name)); 
        let res = await fetch("https://api.nookipedia.com/villagers?&api_key=cdaec8de-8006-4747-9dec-088bf32c815c");
        let villagers = await res.json();
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



getData();*/
