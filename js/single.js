// contact page
// number of order to add to cart in single product page
var incBtn = document.getElementById("inc");
var decBtn = document.getElementById("dec");
var noOfOrd = document.getElementById("numOfOrder");
var numOfOrder = 0;
noOfOrd.innerHTML = numOfOrder;

incBtn.addEventListener("click", () => {
    numOfOrder++
    noOfOrd.innerHTML = numOfOrder;
})
decBtn.addEventListener("click", () => {
    if(numOfOrder > 0){
        numOfOrder--
        noOfOrd.innerHTML = numOfOrder;
    }
})

var singleJson = localStorage.getItem("singleProduct")
var singleJs = JSON.parse(singleJson)
var singleImg = document.getElementById("singleImg")//Description
var singleDescription = document.getElementById("Description")
var singleTitle = document.getElementById("title")
var singlePrice = document.getElementById("price")

singleImg.src = singleJs[0].image;
singleTitle.innerHTML = "NAME: "+singleJs[0].title;
singleDescription.innerHTML = singleJs[0].description;
singlePrice.innerHTML = "PRICE: "+singleJs[0].price +"$";
// console.log(singleImg.src = singlePageItem[0].image);