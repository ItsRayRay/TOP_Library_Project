const modal = document.getElementById("modal")
const modalBtn = document.getElementById("modalBtn")
const closeBtn = document.querySelector(".close")
const cardList = document.querySelector(".cards")  
let inputValue = document.querySelector("#pagenumbervalue")
let savedBooksArr = []
const submitBtn = document.querySelector("#submitBtn")



modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}


for (let i = 0; i < localStorage.length; i++) {

    let savedBooks = JSON.parse(localStorage.getItem(localStorage.key(i)));


    savedBooksArr.push(savedBooks);

}


for (let i = 0; i < savedBooksArr.length; i++) {
    cardList.innerHTML +=  `   <div class="card">
<img src="" alt="" class="card__image">
<div class="card__content">
    <h3 class="card__title">${savedBooksArr[i].title} </h3>
    <p class="card__text">${savedBooksArr[i].Author} </p>
    <p class="card__text">Genre:  ${savedBooksArr[i].Genre}</p>
    <div>Pages:  ${savedBooksArr[i].Pages}</div>
   
    <div>
    <form>
  
</form>
    </div>
   
</div>

<div class="card__info">
<div id="deleteBtn">Read</div>  <div onclick="deleteBtn(${i})" id="deleteBtn">Delete</div>     
</div>
</div>`

;
}




function deleteBtn(i) {
    localStorage.removeItem(localStorage.key(i));
}




submitBtn.addEventListener("click", function(e) {
e.preventDefault();



let titleBook = document.querySelector("#title").value;
let authorBook =  document.querySelector("#author").value;
let genreBook =  document.querySelector("#genre").value;
let pagesBook = document.querySelector("#pages").value;


let savedBookObj = {
    title: titleBook,
    Author: authorBook,
    Genre: genreBook,
    Pages: pagesBook,
    isbn: "",
}


// saves book in object that will be pushed into the array of savedBooksArr change this to local storage and set key to ISBN number


savedBooksArr.push(savedBookObj);

cardList.innerHTML += ""


for (let i = 0; i < savedBooksArr.length; i++) {
    cardList.innerHTML +=  `   <div class="card">
<img src="" alt="" class="card__image">
<div class="card__content">
    <h3 class="card__title">${savedBooksArr[i].title} </h3>
    <p class="card__text">${savedBooksArr[i].Author} </p>
    <p class="card__text">Genre:  ${savedBooksArr[i].Genre}</p>
    <div>Pages:  ${savedBooksArr[i].Pages}</div>
   
    <div>
    <form>
  
</form>
    </div>
   
</div>

<div class="card__info">
<div id="deleteBtn">Read</div>  <div onclick="deleteBtn(${i})" id="deleteBtn">Delete</div>     
</div>
</div>`

}



})
    