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



for (let i = 0; i < arrayOfKeysToNumber.length; i++) {
  const localStorageItem = JSON.parse(localStorage.getItem(arrayOfKeysToNumber[i]))

  SavedBooksArr.push(localStorageItem)

  cardList.innerHTML +=  `   <div class="card">
<img src="" alt="" class="card__image">
<div class="card__content">
 <h3 class="card__title">${ SavedBooksArr[i].title} </h3>
    <p class="card__text">${ SavedBooksArr[i].Author}</p>
    <p class="card__text">Genre:  ${SavedBooksArr[i].Genre}</p>
   <div>Pages:   ${SavedBooksArr[i].Pages}</div>
 
</div>

<div class="card__info">
 <div onclick="deleteBook(${SavedBooksArr[i].isbn})":  id="deleteBtn">Delete</div> 
</div>
</div>
`

}


function deleteBook(isbn) {
  localStorage.removeItem(isbn)
  location.reload()
}



function readBook(isbn) {
  localStorage.removeItem(isbn)
  location.reload()
}


