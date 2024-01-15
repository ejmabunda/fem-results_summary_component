import data from "/data.json" assert { type: "json" };

document.getElementById("body").onload = function () {
  let categories = document.getElementsByClassName("category");
  let final_score = 0;
  for (let i = 0; i < categories.length; i++) {
    categories[i].querySelector("img").src = data[i].icon;
    categories[i].querySelector("h3").innerHTML = data[i].category;
    categories[i].querySelector(".category-score-score").innerHTML =
      data[i].score;
    final_score += data[i].score;
  }
  document
    .getElementsByClassName("result")[0]
    .querySelector(".user-score").innerHTML = Math.round(final_score / 4);
};
