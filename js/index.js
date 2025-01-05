async function getData() {
    const result = await fetch('https://randomuser.me/api?results=3');
    const character = await result.json();
    console.log(character);
    console.log(character);

}
getData()

async function getData2() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json()
    console.log(coctail);
    console.log(coctail);
}
getData2()



