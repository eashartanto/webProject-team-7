let imageList = [
	"assets/images/rest5.jpg",
	"assets/images/rest4.jpg",
	"assets/images/rest2.png",
];

$(".main-body figure").click(function () {
	let imgSrc = $(this).find("img").attr("src");
	$(".full-body .main-img img").attr("src", imgSrc);
	$(".full-body").removeClass("hide");
	$("body").css("overflow", "hidden");
});

$(".full-body .navigate.left").click(function () {
	let currentImg = $(".full-body .main-img img").attr("src");
	let imgIndex = imageList.indexOf(currentImg);
	let newImgIndex;
	if (imgIndex == 0) newImgIndex = imageList.length - 1;
	else newImgIndex = imgIndex - 1;
	$(".full-body .main-img img").attr("src", imageList[newImgIndex]);
});

$(".full-body .navigate.right").click(function () {
	let currentImg = $(".full-body .main-img img").attr("src");
	let imgIndex = imageList.indexOf(currentImg);
	let newImgIndex;
	if (imgIndex == imageList.length - 1) newImgIndex = 0;
	else newImgIndex = imgIndex + 1;
	$(".full-body .main-img img").attr("src", imageList[newImgIndex]);
});

$(".close-img-view").click(() => {
	$(".full-body").addClass("hide");
	$("body").css("overflow", "auto");
});
