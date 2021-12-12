// array to store list of images that are used
let imageList = [
	"assets/images/rest5.jpg",
	"assets/images/rest4.jpg",
	"assets/images/rest2.png",
];

// on click of image in the body, open gallery mode
$(".main-body figure").click(function () {
	let imgSrc = $(this).find("img").attr("src");
	$(".full-body .main-img img").attr("src", imgSrc);
	$(".full-body").removeClass("hide");
	$("body").css("overflow", "hidden");  //hide scrollbar in gallery view
});

// gallery mode left arrow click
$(".full-body .navigate.left").click(function () {
	let currentImg = $(".full-body .main-img img").attr("src");
	let imgIndex = imageList.indexOf(currentImg);
	let newImgIndex;
	if (imgIndex == 0) newImgIndex = imageList.length - 1; //if at the first image from the array, move to the last image
	else newImgIndex = imgIndex - 1;
	$(".full-body .main-img img").attr("src", imageList[newImgIndex]);
});

// gallery mode right arrow click
$(".full-body .navigate.right").click(function () {
	let currentImg = $(".full-body .main-img img").attr("src");
	let imgIndex = imageList.indexOf(currentImg);
	let newImgIndex;
	if (imgIndex == imageList.length - 1) newImgIndex = 0; //if at last image from the array, move to the first image
	else newImgIndex = imgIndex + 1;
	$(".full-body .main-img img").attr("src", imageList[newImgIndex]);
});

// exit gallery mode
$(".close-img-view").click(() => {
	$(".full-body").addClass("hide");
	$("body").css("overflow", "auto");
});
