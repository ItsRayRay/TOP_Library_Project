const searchButton = document.querySelector("#search__btn")




searchButton.addEventListener("click", function(e) { 
     //search button
    e.preventDefault()
 
    let searchInput = document.querySelector("input").value  // get the value of the input
    
//    document.querySelector("main").innerHTML = "";
 //   fetch ("http://openlibrary.org/search.json?q="+searchInput)
 //   .then (res => res.json())
 //   .then (data => {  console.log(data) } )


async function getBooks() {
    const response = await fetch ("http://openlibrary.org/search.json?q="+searchInput)
    const data = await response.json()

    console.log(data.docs)


    





}
getBooks() 
.catch(err => console.log(err))








})



