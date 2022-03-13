const searchBox = document.getElementById("search-box");
const searchCount = document.getElementById("search-count");
//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  //add an event listener here
  searchBox.addEventListener("keyup", onSearchKeyUp);
}

function makePageForEpisodes(episodeList) {
  const episodeContainer = document.getElementById("episode-list");
  episodeContainer.innerHTML = "";

  function formatSeriesAndEpisode(season, number) {
    function padTheNumber(num) {
      return num.toString().padStart(2, "0");
    }
    return `S${padTheNumber(season)}E${padTheNumber(number)}`;
  }
  episodeList.forEach((e) => {
    const episode = document.createElement("div");
    const heading = document.createElement("h3");
    const eImage = document.createElement("img");
    const summary = document.createElement("p");
    eImage.src = e.image.medium;
    // episodesImage.classList.add("img")
    heading.innerText = `${e.name}-${formatSeriesAndEpisode(
    e.season,
    e.number
  )}`;

    summary.innerHTML = e.summary;

    episode.className = "episode";

    episode.appendChild(heading);
    episode.appendChild(eImage);
    episode.appendChild(summary);
    episodeContainer.appendChild(episode);
  })
}

function onSearchKeyUp(event) {
  const searchTerm = event.target.value.toLowerCase();
  const allEpisodes = getAllEpisodes();

  const filteredEpisodes = allEpisodes.filter((e) => {
    return e.name.toLowerCase().includes(searchTerm);
  });
  const filteredCount = filteredEpisodes.length;
  const allCount = allEpisodes.length;

  const countString = `Displaying ${filteredCount}/ ${allCount}`;
  searchCount.innerText = countString;
  makePageForEpisodes(filteredEpisodes)
}
window.onload = setup;