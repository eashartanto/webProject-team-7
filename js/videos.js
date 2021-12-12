//json to store data for the list of videos
let videoList = [
	{
		src: "https://www.youtube.com/embed/UtPprUWteeo",
		type: "Eat Me",
		title: "Baker Rae Cafe is Toronto's go-to spot for cinnamon buns",
	},
	{
		src: "https://www.youtube.com/embed/PNqcAycQ7bk",
		type: "Happenings",
		title: "Beyond Monet makes its world premiere in Toronto",
	},
	{
		src: "https://www.youtube.com/embed/mm1cEFAuLb4",
		type: "News",
		title:
			"This is how restaurants are keeping dine-in as safe as possible in Toronto",
	},
	{
		src: "https://www.youtube.com/embed/9HsGB5KKksQ",
		type: "Hot Spots",
		title:
			"TreaJah Isle is Toronto's world famous reggae record and convenience store",
	},
	{
		src: "https://www.youtube.com/embed/fShxDCzwwbc",
		type: "Hot Spots",
		title:
			"First Markham Place is one of the most iconic shopping plazas just outside Toronto",
	},
	{
		src: "https://www.youtube.com/embed/Em4rquCVq2Q",
		type: "Eat Me",
		title:
			"Yogurt House in Toronto serves up Balkan-style drinks and sandwiches",
	},
	{
		src: "https://www.youtube.com/embed/ZjsUYuuqvXA",
		type: "Hot Spots",
		title: "Little Canada in Toronto",
	},
	{
		src: "https://www.youtube.com/embed/wHKOaDvF2BA",
		type: "News",
		title: "Take a look inside the new Eglinton LRT vehiclesw",
	},
	{
		src: "https://www.youtube.com/embed/Sj_np7mrntk",
		type: "News",
		title: "Deanne Hupfield teaches Powwow dancing with her online classes",
	},
];

//called when value in dropdown changes
let filterVideos = (value) => {
	if (value == "all") {
		$(".card").show();
	} else {
		$(".card").each((i, card) => {
			let cardType = $(card).find("iframe").data("type"); //show card if video type matches the filter value else hide the card 
			if (value == cardType) $(card).show();
			else $(card).hide();
		});
	}
};

//used to render the cards
let displayVideoCards = (vList) => {
	videoCard = "";
	vList.forEach((val) => {
		videoCard += `<div class="card">
                    <iframe data-type="news" width="560" height="200" src="${val.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                    <article>
                        <span class="tag">${val.type}</span>
                        <h4 class="title">${val.title}</h3>
                    </article>
                </div>`;
	});
	$(".card-list").html(videoCard);
};

displayVideoCards(videoList);
