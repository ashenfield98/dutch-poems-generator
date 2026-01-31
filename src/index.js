function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "here is your poem",
    autoStart: true,
    delay: 85,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
