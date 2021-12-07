let myImagesArray = ["images/beef-noodle.png","images/chicken-teriyaki.png","images/mustard-chicken.png","images/pasta.png"];
let ImageNumber = 0;
let difference = myImagesArray.length -1;
let delay = 500;

setInterval("ChangeImages(-1)", delay);

function ChangeImages(direction){

    ImageNumber = ImageNumber + direction;

    if(ImageNumber > difference)
    {
        ImageNumber = 0;
    }

    if(ImageNumber < 0)
    {
        ImageNumber = difference;
    }

    document.getElementById('slideshow').src = myImagesArray[ImageNumber];
}