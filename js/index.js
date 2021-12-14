import ARTICLES from "/js/articles.js";

const trendingWrapper = document.getElementById("trending-topic");
const raccoonsWrapper = document.getElementById("raccoons-topic");
const hotspotsWrapper = document.getElementById("hotspots-topic");
const tourismWrapper = document.getElementById("tourism-topic");
const foodWrapper = document.getElementById("food-topic");

function createArticle(article) {
    const newElement = document.createElement("div");
    newElement.className = "article";
    newElement.onclick = () => location.href = article.url;

    const innerDiv = document.createElement("div");
    newElement.appendChild(innerDiv);

    const img = document.createElement("img");
    img.src = article.imageUrl;
    innerDiv.appendChild(img);

    const dateParagraph = document.createElement("p");
    dateParagraph.className = "article-date";
    dateParagraph.innerText = article.date;
    innerDiv.appendChild(dateParagraph);

    const titleParagraph = document.createElement("p");
    titleParagraph.className = "article-title";
    titleParagraph.innerText = article.name;
    innerDiv.appendChild(titleParagraph);

    return newElement;
}

function getTopicWrapper(topic) {
    switch (topic) {
        case "Raccoons":
            return raccoonsWrapper;
        case "Hot spots":
            return hotspotsWrapper;
        case "Tourism":
            return tourismWrapper;
        case "Food":
            return foodWrapper;
    }
}

function populatePage() {
    ARTICLES.forEach(article => {
        trendingWrapper.appendChild(createArticle(article));
        const topicWrapper = getTopicWrapper(article.topic);
        topicWrapper?.appendChild(createArticle(article));
    });
}

populatePage();