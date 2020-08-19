const like = document.querySelector(".info__actions .like");
const unlike = document.querySelector(".info__actions .unlike");

like.addEventListener("click", () => {
  like.classList.toggle("action");
});

unlike.addEventListener("click", () => {
  unlike.classList.toggle("action");
});
