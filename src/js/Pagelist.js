const showMore = document.getElementById('show-more')
const choosePlatform = document.getElementById('platform')
const showmoreDOM = document.querySelector("#show-more");

let page = 1

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");
    const displayResults = (articles) => {
      console.log(articles)
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
            <a href="#pagedetail/${article.id}">
              <div class="game--details" id="${article.id}"><img src="${article.background_image}" style="width: 90%; max-height: 250px"></div>
              <h2>${article.name}</h2>
              <div class="game-platforms"></div>
            </a>
        </article>`
      ));
      const resultsContainer = document.querySelector(".page-list .articles");
      resultsContainer.innerHTML += resultsContent.join("\n");
      articles.forEach((e) => {
        let gameId = document.getElementById(e.id)
        mouseEnter(e, gameId)
        mouseLeave(e, gameId)
        GamePlatforms(e,gameId.nextElementSibling.nextElementSibling)
      })
    };

    const fetchList = (url, argument, pagenumber) => {
      const finalURL = argument ? `${url}&search=${argument}&page=${pagenumber}` : `${url}&page=${pagenumber}&dates=2021-06-01,2022-12-01&ordering=-added`;
      console.log(finalURL)
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList("https://api.rawg.io/api/games?key=774be2a6817d4369bef88bd479e5ab73&page_size=9", cleanedArgument, page);

    showMore.addEventListener('click', () => {
      if (page < 2) {
        page += 1
        fetchList("https://api.rawg.io/api/games?key=774be2a6817d4369bef88bd479e5ab73&page_size=9", cleanedArgument, page);
      } else {
        fetchList("https://api.rawg.io/api/games?key=774be2a6817d4369bef88bd479e5ab73&page_size=9", cleanedArgument, page);
        showmoreDOM.remove();
      }
    });
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles"></div>
      </section>
    `;

    preparePage();
  };

  render();
};

///////////////////// AUTO PLATFORM DROPDOWN /////////////////////////

const Platforms = () => {
  let platformDropdown = document.querySelector("#platform")
  fetch('https://api.rawg.io/api/platforms/lists/parents?key=774be2a6817d4369bef88bd479e5ab73')
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach(element => {
        platformDropdown.innerHTML +=`
      <option value="${element.id}">${element.name}</option>
      `
    });
  });
}
Platforms()

////////////////////// GET SUB NODE INFOS //////////////////

function GamePlatforms(game,container) {
  const gamePlatformsContent = game.parent_platforms.map((e) => (
    `<i class="fab fa-${e.platform.slug}"></i>`
  ));
  container.innerHTML += gamePlatformsContent.join("\n");
}

function GameTags(game) {
  arrPlatforms = []
  game.tags.forEach((e) => {
   e.language == "eng" ? arrPlatforms.push(e.name) : null
  });
  return arrPlatforms.slice(0, 9);
}

/////////////// MOUSE EVENTS ///////////////////

function mouseEnter(game,placeholder) {
  placeholder.addEventListener('mouseenter', () => {
    placeholder.innerHTML = `
    <p>${game.released}</p>
    <p>${game.rating}/5 - ${game.ratings_count} votes</p>
    <p class="game--tags">${GameTags(game)}</p>
    `
  });
}

function mouseLeave(game,placeholder) {
  placeholder.addEventListener('mouseleave', () => {
  placeholder.innerHTML = `
  <img src="${game.background_image}" style="width: 90% ; max-height: 250px">
  `
  });
}

////////////// SEARCH MODULE /////////////////

let submitButton = document.getElementById("search-button")
let searchContent = document.getElementById("site-search")

submitButton.addEventListener('click', () => {
  searchContent.value == "" ? null : changeUrl(searchContent.value)
});
searchContent.addEventListener('keypress', e => e.key === 'Enter' ? changeUrl(searchContent.value) : null)


function changeUrl (value) {
var queryParams = "http://localhost:1234/#pagelist/"
let newUrl = queryParams.concat(value);
window.location.href = newUrl
}

////////////// FILTER MODULE /////////////////
function filterUrl (value) {
  var queryParams = "http://localhost:1234/#pagelist/"
  let newUrl = queryParams.concat("platforms=" + value + "&ordering=-added");
  window.location.href = newUrl
}