let myImagesArray = ["images/upcoming_images/upcoming_cover.jpg","images/upcoming_images/garden.jpg","images/upcoming_images/twer.jpg"];
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

    document.getElementById('').src = myImagesArray[ImageNumber];
}