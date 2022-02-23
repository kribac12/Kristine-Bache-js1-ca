const url = "https://api-football-standings.azharimm.site/leagues";
const factsContainer = document.querySelector(".container");

//Make a call to your API URL.
async function getLeagues() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results.data);

    const leagueFacts = results.data;

    factsContainer.classList.remove("loader");

    for (let i = 0; i < leagueFacts.length; i++) {
      factsContainer.innerHTML += `<div class="container"><h4>League: ${leagueFacts[i].name}</h4>
     <p>Abbreviation: ${leagueFacts[i].abbr}</p>
     <p>Id: ${leagueFacts[i].id}</p>
     <p>Slug: ${leagueFacts[i].slug}</p></div>`;
    }
  } catch (error) {
    console.log(error);
    factsContainer.innerHTML = alert("Error, try again or contact customer service.");
  }
}

getLeagues();

//Loop through the results and create HTML for each result.

//You will need to link each result to a details.html page and to pass a parameter in the query string to that page.

//If you are going to fetch the individual result on the details page by its id, then pass an id in the query string.

//You will fetch this parameter from the query string in the details page code.

//Catch any errors and display a message on the page if an error occurs.*/
