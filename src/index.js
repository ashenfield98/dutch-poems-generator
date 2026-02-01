function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 85,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt");

  let context =
    "You are an expert is Dutch poems and will give a short poem, maximal 4 lines in basic HTML without showing HTML in the text. It is important you include the users prompt in the poem. Sign the poem at the bottom with Ashley Enfield and use strong element";
  let prompt = `Give me a poem about ${promptInput.value}`;
  let apiKey = "7b8fb87030c4beo42b4207t4f1d8b27a";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
