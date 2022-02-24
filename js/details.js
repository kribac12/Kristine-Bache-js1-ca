const resultsContainer = document.querySelector(".resultsContainer");
const characterInfo = document.querySelector(".characterInfo");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const characterId = params.get("id");

const characterIdURL = "https://rickandmortyapi.com/api/character/" + characterId;

async function fetchCharacter() {
  try {
    const response = await fetch(characterIdURL);
    const characterDetails = await response.json();

    resultsContainer.classList.remove("loader");

    showCharacter(characterDetails);
  } catch (error) {
    resultsContainer.innerHTML = alert("Error with the API.");
  }
}

fetchCharacter();

function showCharacter(characterDetails) {
  try {
    document.title = "";
    document.title = `${characterDetails.name}`;
    resultsContainer.innerHTML = `<div class="characterInfo">
        <h2>${characterDetails.name}</h2>
        <h4>Status: ${characterDetails.status}</h4>
        <img src = "${characterDetails.image}"</img>
        <p>Species: ${characterDetails.species}</p>
        <p>Gender: ${characterDetails.gender}</p>
        <p>Location: ${characterDetails.location.name}</p>
        <p>Origin: ${characterDetails.origin.name}</p></div>`;
  } catch (error) {
    resultsContainer.innerHTML = alert("Error, try again or contact customer service.");
  }
}
