// Variables
var searchHistory = [];
var APIRootUrl = "https://api.openweathermap.org";
var APIKey = "89f792a4f010fd3334329dc25fbc9c23";

// Variables for different elements
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var today = document.getElementById("today");
var forcastContainer = document.getElementById("forcast-container");
var searchHistoryContainer = document.getElementById("history");

// Timeszone plugins
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// Function to display the search history list
function searchHistoryList() {
  searchHistoryContainer.innerHTML = "";

  // Shows most recent search at the top
  for (var i = searchHistory.length - 1; i >= 0; i--) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-controls", "today forcast");
    btn.classList.add("history-btn", "btn-history");

    // 'data-search' allows access to city name when clicked
    btn.setAttribute("data-search", searchHistory[i]);
    btn.textContent = searchHistory[i];
    searchHistoryContainer.append(btn);
  }
}

// Function to update history in the local storage, then displays histry
function appendToHistory(search) {
  // If search failed return
  if (searchHistory.indexOf(search) !== -1) {
    return;
  }
  searchHistory.push(search);

  localStorage.setItem("search-history", JSON.stringify(searchHistory));
  renderSearchHistory();
}

// Get history from local storage.
function initSearchHistory() {
  var storedHistory = localStorage.getItem("history");
  if (storedHistory) {
    searchHistory = JSON.parse(storedHisory);
  }
  renderSearchHistory();
}
