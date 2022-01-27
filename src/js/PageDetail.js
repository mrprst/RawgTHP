

const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      const { background_image, website, name, rating, ratings_count, description, released, developers, platforms, publishers, genres, tags, stores, background_image_additional } = gameData;
      console.log(gameData)
      const headerDOM = document.querySelector(".heading--bottom");
      const dropdownDOM = document.querySelector(".games--dropdown");
      const heroDOM = document.querySelector(".page-hero");
      const articleDOM = document.querySelector(".page-detail .article");
      const buyDOM = document.querySelector(".page-detail .buy");
      const screenshotsDOM = document.querySelector(".page-detail .screenshots");
      const showmoreDOM = document.querySelector("#show-more");

      headerDOM.remove();
      dropdownDOM.remove();
      showmoreDOM.remove();
      heroDOM.innerHTML = `
      <img class="hero-image" src="${background_image}">
      <a href="${website}">
        <div class="check-website">
          <span>Check Website</span>
          <span>▶</span>
        </div>
      </a>
      `;
      articleDOM.querySelector(".article--top h1.title").innerHTML = name;
      articleDOM.querySelector(".article--top p.rating").innerHTML = `${rating}/5 - ${ratings_count} votes`;
      articleDOM.querySelector(".article--middle p.description").innerHTML = description;
      articleDOM.querySelector(".article--bottom p.released").innerHTML += released;
      articleDOM.querySelector(".article--bottom p.developers").innerHTML += nodeDetails(developers)
      articleDOM.querySelector(".article--bottom p.platforms").innerHTML += gamePlatforms(platforms).join(",&nbsp");
      articleDOM.querySelector(".article--bottom p.publishers").innerHTML += nodeDetails(publishers).join(",&nbsp");
      articleDOM.querySelector(".article--bottom p.genres").innerHTML += nodeDetails(genres).join(",&nbsp");
      articleDOM.querySelector(".article--bottom p.tags").innerHTML += nodeDetails(tags).join(",&nbsp");
      buyDOM.querySelector("div.buy-links").innerHTML = storesPlatforms(stores).join("");
      screenshotsDOM.querySelector("div.screenshots-links").innerHTML = `<img class="screenshots-img" src="${background_image}" /><img class="screenshots-img" src="${background_image_additional}" />`
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=774be2a6817d4369bef88bd479e5ab73`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-hero">
      </section>
      <section class="page-detail">
        <div class="article">
          <div class="article--top">
            <h1 class="title"></h1>
            <p class="rating"></p>
          </div>
          <div class="article--middle">
            <p class="description"></p>
          </div>
          <div class="article--bottom">
            <p class="released" style="width: 25%"><b>Release Date</b><br></p>
            <p class="developers" style="width: 25%"><b>Developer</b><br></p>
            <p class="platforms" style="width: 25%"><b>Platforms</b><br></p>
            <p class="publishers" style="width: 25%"><b>Publisher</b><br></p>
            <p class="genres" style="width: 50%"><b>Genre</b><br></p>
            <p class="tags" style="width: 50%"><b>Tags</b><br></p>
          </div>
        </div>
        <div class="buy">
          <h1>BUY</h1>
          <div class="buy-links"></div>
        </div>
        <div class="screenshots">
          <h1>SCREENSHOTS</h1>
          <div class="screenshots-links"></div>
        </div>
        <div class="similar">
          <h1>SIMILAR GAMES</h1>
        </div>
      </section>
    `;





    preparePage();
  };

  render();
};




function gamePlatforms(node) {
  arrPlatforms = []
  node.forEach((e) => {
   arrPlatforms.push(`${e.platform.name}`)
  });
  return arrPlatforms
}

function nodeDetails(node) {
  arrNode = []
  node.forEach((e) => {
    arrNode.push(`${e.name}`)
  });
  return arrNode
}

function storesPlatforms(node) {
  arrPlatforms = []
  node.forEach((e) => {
  arrPlatforms.push(`<a href="https://${e.store.domain}" target="_blank"><p class="store-links">${e.store.name}</p></a>`)
  });
  return arrPlatforms
}

