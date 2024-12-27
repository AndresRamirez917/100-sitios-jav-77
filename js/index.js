async function getData() {
    const result = await fetch('https://randomuser.me/api?results=3');
    const character = await result.json();
    console.log(character);
}
getData()