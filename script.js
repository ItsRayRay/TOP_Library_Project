const searchButton = document.querySelector("#search__btn");
let SavedBooksArr = [];
let addToReadList = []

searchButton.addEventListener("click", function (e) {
  //search button
  e.preventDefault();

  const cardLayout = document.querySelector(".cards");

  //change innerHTML of cardLayout
  cardLayout.innerHTML = `<div class="loadingcontainer"><h1 class="loading">Loading... </h1><div class="spinner"></div> </div>`;
  let searchInput = document.querySelector("input").value; // get the value of the input

  //fetch the data from the API
  async function getBooks() {
    const response = await fetch(
      "http://openlibrary.org/search.json?q=" + searchInput
    );

    
    const data = await response.json();

  
    cardLayout.innerHTML = ``;

    //loop through the data and create cards
    for (let i = 0; i < 20 ; i++) {
      cardLayout.innerHTML += `    <div class="card">
<img src="" alt="" class="card__image">
<div class="card__content">
    <h3 class="card__title">${data.docs[i].title_suggest}</h3>
    <p class="card__text">Author: ${data.docs[i].author_name}</p>
    <p class="card__text">Genre: ${data.docs[i].subject[0]}</p>
    <div>Pages: ${data.docs[i].number_of_pages_median}</div>
</div>
<div class="card__info">
    <div onclick="addReadlist(${data.docs[i].isbn[0]})" class="add__readlist">+ Add to Readlist</div>
</div>
</div>`;


      savedBookObj = {
        title: data.docs[i].title_suggest,
        Author: data.docs[i].author_name,
        Genre: data.docs[i].subject[0],
        Pages: data.docs[i].number_of_pages_median,
        isbn: data.docs[i].isbn[0],
      };

        SavedBooksArr.push(savedBookObj);

    }



  }
  getBooks().catch((err) => console.log(err));
});

//add to readlist
function addReadlist(isbn) {
// change ISBN Number to String
  let isbnTostring = isbn.toString();


// finds the specific book that has been pressed to add to readlist by matching the ISBN number with button Number 
 const findBook = function (myBook, title) {
    const index = myBook.findIndex(function(item, index  ) {
      return item.isbn === isbnTostring;
    })
    return myBook[index];
 }
 // result from the function above
let pickedBook = findBook(SavedBooksArr, isbnTostring);


console.log(pickedBook)
// pushes the book to the addToReadList array


let savedBookSerialized = JSON.stringify (pickedBook);
localStorage.setItem(isbn, savedBookSerialized);
}


//sources

//https://www.youtube.com/watch?v=US63Q6AL0GI