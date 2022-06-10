const searchButton = document.querySelector("#search__btn")

searchButton.addEventListener("click", function(e) { 
     //search button
    e.preventDefault()
    const cardLayout = document.querySelector(".cards")
    cardLayout.innerHTML = `<div class="loadingcontainer"><h1 class="loading">Loading... </h1><div class="spinner"></div> </div>`
    let searchInput = document.querySelector("input").value  // get the value of the input

async function getBooks() {
    const response = await fetch ("http://openlibrary.org/search.json?q="+searchInput)
    const data = await response.json()



cardLayout.innerHTML = ``

for (let i = 0; i < 50 ; i++) {

cardLayout.innerHTML += `    <div class="card">
<img src="" alt="" class="card__image">
<div class="card__content">
    <h3 class="card__title">${data.docs[i].title_suggest}</h3>
    <p class="card__text">Author: ${data.docs[i].author_name}</p>
    <p class="card__text">Genre: ${data.docs[i].subject[0]}</p>
    <div>Pages: ${data.docs[i].number_of_pages_median}</div>
</div>
<div class="card__info">
    <div class="add__readlist">+ Add to Readlist</div>
</div>
</div>`
}
}
getBooks() 
.catch(err => console.log(err))
})