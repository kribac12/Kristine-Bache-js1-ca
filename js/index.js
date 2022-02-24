const url = "https://rickandmortyapi.com/api/character";
const factsContainer = document.querySelector(".container");

async function getCharacter() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    const characterFacts = results.results;

    factsContainer.classList.remove("loader");

    for (let i = 0; i < characterFacts.length; i++) {
      if (i === 12) {
        break;
      }

      const characterDetails = characterFacts[i];

      factsContainer.innerHTML += `<a href="/details.html?id=${characterDetails.id}" class="characterCard">
     <h4>Name: ${characterDetails.name}</h4>
     <h5>Status: ${characterDetails.status}</h5>
     <img src = "${characterDetails.image}"</img>
     <p> View more </p>
     </a>`;
    }
  } catch (error) {
    console.log(error);
    factsContainer.innerHTML = alert("Error, try again or contact customer service.");
  }
}

getCharacter();
