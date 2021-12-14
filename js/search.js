import ARTICLES from "./js/articles.js";

const resultsDiv = document.getElementById("search-results");

function createElement(article) {
    const newElement = document.createElement("div");
    newElement.className = "search-result";
    newElement.onclick = () => location.href = article.url;

    const img = document.createElement("img");
    img.src = article.imageUrl;
    newElement.appendChild(img);

    const descDiv = document.createElement("div");
    newElement.appendChild(descDiv);

    const nameParagraph = document.createElement("h3");
    nameParagraph.innerText = article.name;
    descDiv.appendChild(nameParagraph);

    const contentsParagraph = document.createElement("p");
    contentsParagraph.innerText = article.contents.split(".")[0];
    descDiv.appendChild(contentsParagraph);

    return newElement;
}

function updateList() {
    // Immitating backend query handling
    const currentUrl = new URL(window.location.href);
    const searchQuery = currentUrl.searchParams.get("q");
    document.getElementById("search").value = searchQuery;
    let fittingArticles = [];
    ARTICLES.forEach(article => {
        if (article.name.toLowerCase().includes(searchQuery) || article.contents.toLowerCase().includes(searchQuery)) {
            fittingArticles.push(article);
        }
    });
    // Processing the result
    fittingArticles.forEach(article => resultsDiv.appendChild(createElement(article)));
}

updateList();