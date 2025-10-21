const facts = [
  "I love photography.",
  "My favorite sport is skiing.",
  "I enjoy photographing planes and other things."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});
