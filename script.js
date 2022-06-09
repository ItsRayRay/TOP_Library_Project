const searchButton = document.querySelector("#search__btn")




searchButton.addEventListener("click", function(e) { 
     //search button
    e.preventDefault()
 
    let searchInput = document.querySelector("input").value  // get the value of the input




async function getBooks() {
    const response = await fetch ("http://openlibrary.org/search.json?q="+searchInput)
    const data = await response.json()

    console.log(data.docs)


const cardLayout = document.querySelector(".cards")


cardLayout.innerHTML = ``



for (let i = 0; i < 10 ; i++) {


cardLayout.innerHTML += `    <div class="card">
<img src="http://covers.openlibary.org/b/isbn/`+data.docs[i].isbn[0]+`-M.jpg" alt="" class="card__image">
<div class="card__content">
    <h3 class="card__title">${data.docs[i].title_suggest}</h3>
    <p class="card__text">Author: ${data.docs[i].author_name}</p>
</div>
<div class="card__info">
    <div>+ Add to Readlist</div>
    <div>Pages: ${data.docs[i].number_of_pages_median}</div>
</div>
</div>`



}









}
getBooks() 
.catch(err => console.log(err))





})



