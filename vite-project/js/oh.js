
async function getData() {
    let res = await fetch(
        "https://api.nookipedia.com/villagers?&api_key=cdaec8de-8006-4747-9dec-088bf32c815c"
    );
    let villagers = await res.json();

    villagers.forEach((villager) => console.log(villager.name, villager.species, villager.phrase));
}
getData();