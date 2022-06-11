const modal = document.getElementById("modal")
const modalBtn = document.getElementById("modalBtn")
const closeBtn = document.querySelector(".close")
const cardList = document.querySelector(".cards")  
SavedBooksArr = []


modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}


//const items = { ...localStorage }; // get the items from localStorage

// get all keys from index and store it in an array
const keys = Object.keys(localStorage);
for (let key of keys) {
   // console.log(`${key}: ${localStorage.getItem(key)}`);
}

// convert array into numbers
let arrayOfKeysToNumber = keys.map(Number)
console.log(arrayOfKeysToNumber)

for ( let i = 0; i < arrayOfKeysToNumber.length; i++) { 
    let savedBooks = JSON.parse(localStorage.getItem(arrayOfKeysToNumber[i]));

    SavedBooksArr.push(savedBooks);
   
}
console.log(SavedBooksArr)



//for (let i = 0; i < localStorage.length; i++) {

//let savedBooks = JSON.parse(localStorage.getItem(localStorage.length));



//cardList.innerHTML +=  `   <div class="card">
//<img src="" alt="" class="card__image">
//<div class="card__content">
  //  <h3 class="card__title">${savedBooks.title} </h3>
    //<p class="card__text">${savedBooks.Author} </p>
   // <p class="card__text">Genre:  ${savedBooks.Genre}</p>
   // <div>Pages:  ${savedBooks.Pages}</div>
 
   
//</div>

//<div class="card__info">
  //  <div onclick="readBook(${savedBooks.isbn} id="readBtn">Read</div> <div onclick="deleteBook(${savedBooks.isbn})":  id="deleteBtn">Delete</div> 
//</div>
//</div>
//`


//}



