const modal = document.getElementById("modal")
const modalBtn = document.getElementById("modalBtn")
const closeBtn = document.querySelector(".close")
const cardList = document.querySelector(".cards")  



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


cardList.innerHTML +=  `   <div class="card">
<img src="" alt="" class="card__image">
<div class="card__content">
    <h3 class="card__title">${savedBooks.title} </h3>
    <p class="card__text">${savedBooks.Author} </p>
    <p class="card__text">Genre:  ${savedBooks.Genre}</p>
    <div>Pages:  ${savedBooks.Pages}</div>
    <div class="on__page">On page: 0</div>
   
</div>
<div class="page__number"><form action=""><input id="pagenumbervalue" placeholder= "Pagenumber "type="text"></form></div>


<div class="card__info">
    <div id="readBtn">Read</div> <div id="deleteBtn">Delete</div> 
</div>
</div>

`

}