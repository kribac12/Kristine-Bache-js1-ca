const url = "https://rickandmortyapi.com/api/character";
const factsContainer = document.querySelector(".container");

//Make a call to your API URL.
async function getCharacter() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results.data);

    const characterFacts = results.results;

    factsContainer.classList.remove("loader");

    for (let i = 0; i < characterFacts.length; i++) {
      if (i === 12) {
        break;
      }

      factsContainer.innerHTML += `<a href="details.html?id?=${characterFacts.id}" class="characterCard">
     <h4>Name: ${characterFacts[i].name}</h4>
     <h5>Status: ${characterFacts[i].status}</h5>
     <img src = "${characterFacts[i].image}"</img>
     <p> View more </p>
     </div>`;
    }
  } catch (error) {
    console.log(error);
    factsContainer.innerHTML = alert("Error, try again or contact customer service.");
  }
}

getCharacter();

//Loop through the results and create HTML for each result.

//You will need to link each result to a details.html page and to pass a parameter in the query string to that page.

//If you are going to fetch the individual result on the details page by its id, then pass an id in the query string.

//You will fetch this parameter from the query string in the details page code.

//Catch any errors and display a message on the page if an error occurs.*/
