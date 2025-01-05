async function getData2() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json()
    console.log(coctail);
    console.log(coctail);
}
getData2()

async function getData() {
    const result = await fetch('https://randomuser.me/api?results=3');
    const character = await result.json();
    const result2 = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result2.json()
    console.log(character);
    const profesionArr = ["ux fundamental","Modern HTML & CSS","Bootstrap 5"]
    const numbersArr = ["1", "2", "3"]
    character.results.forEach((element, id) => {
   
            const box = document.createRange().createContextualFragment(`
                
                <div class="flexbox-1">
                 <img src="/images/course-${numbersArr[id]}.jpg" alt="">
                    <img src="${element.picture.large}" class="user rounded-circle" alt="">
                    <div class="flexbox-1 test flex">
                        <h4>${element.name.first} ${element.name.last}</h4>
                    </div>
                    <h2 class="display">${profesionArr[id]}</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem dolore voluptas cupiditate alias nobis. Esse veritatis consequuntur tenetur adipisci.</p>
                </div>
                
                `)
                const courses_flex = document.querySelector('.courses-flex');
                courses_flex.append(box)
        
    });

}
getData()










