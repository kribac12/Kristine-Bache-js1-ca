const characterDetails = document.querySelector(".characterDetails");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const characterId = params.get("id");

const characterIdURL = "https://rickandmortyapi.com/api/character" + characterId;

async function fetchCharacter() {
  try {
    const response = await fetch(characterIdURL);
    const characterFacts = await response.json();

    showCharacter(characterFacts);
  } catch (error) {
    characterDetails.innerHTML = alert("Error, try again or contact customer service.");
  }
}

fetchCharacter();

function showCharacter(characterFacts) {
  try {
    document.title = "";
    document.title = `${characterFacts[i].name}`;
    characterDetails.innerHTML = `div class="characterInfo">
        <h1>${characterFacts[i].name}</h1></div>`;
  } catch (error) {
    characterDetails.innerHTML = alert("Error, try again or contact customer service.");
  }
}
