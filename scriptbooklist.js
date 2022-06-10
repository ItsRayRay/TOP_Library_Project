const modal = document.getElementById("modal")
const modalBtn = document.getElementById("modalBtn")
const closeBtn = document.querySelector(".close")
const cardList = document.querySelector(".cards")  
let inputValue = document.querySelector("#pagenumbervalue")
let savedBooksArr = []


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
    <div class="on__page">On page: ${savedBooksArr[i].onpage}</div>
   
</div>
<div class="page__number"><form>
<input id="#search__input" type="text" placeholder="   Search a Movie">
<button type="submit" onclick="submitPage(${i})" id="search__btn">🔎</button>
</form></div>


<div class="card__info">
    <div id="readBtn">Read</div> <div id="deleteBtn">Delete</div> 
</div>
</div>`

;
}



function submitPage(itemNumber) {

console.log(itemNumber)

 }


