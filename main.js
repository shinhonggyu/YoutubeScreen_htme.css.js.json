const like = document.querySelector(".info__actions .like");
const unlike = document.querySelector(".info__actions .unlike");
const moreBtn = document.querySelector(
  ".info .info__matadata .videoTitleAndBtn .moreBtn"
);
const title = document.querySelector(
  ".info .info__matadata .videoTitleAndBtn .title"
);

like.addEventListener("click", () => {
  like.classList.toggle("action");
});

unlike.addEventListener("click", () => {
  unlike.classList.toggle("action");
});

moreBtn.addEventListener("click", () => {
  title.classList.toggle("clamp");
  moreBtn.classList.toggle("animation");
});

// main
loadItems()
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);

// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item));
}

function createHTMLString(item) {
  return `
    <li class="item">
      <div class="img"><img src=${item.image} alt="" /></div>
      <div class="itemInfo">
        <span class="itemInfo__title">
          프론트엔드 강의, 프론트엔드 개발자가 되고 싶다면? 웹개발
          입문자편 강의를 시작합니다 ⭐️ (HTML, CSS, Javascript + 실전
          프로젝트)
        </span>
        <span class="itemInfo__user">
          ${item.user}
        </span>
        <span class="itemInfo__views">
          ${item.views}
        </span>
      </div>
      <button class="moreBtn"><i class="fas fa-ellipsis-v"></i></button>
    </li>
  `;
}
