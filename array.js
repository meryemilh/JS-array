const sange = ["Two of Us", "Dig a Pony", "Across the Universe", "I Me Mine", "Dig It", "Let it be", "Maggie Mae"];
const liste = document.querySelector("ul");

sange.forEach(lavSangeListe);

function lavSangeListe(sange) {
  liste.innerHTML += "<li>" + sange + "</li>";
}
