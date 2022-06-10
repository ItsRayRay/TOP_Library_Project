const modal = document.getElementById("modal")
const modalBtn = document.getElementById("modalBtn")
const closeBtn = document.querySelector(".close")



modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);


function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}