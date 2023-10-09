////////////////////////// filter api from nav bar //////////////////////////////////
function filterByNavBar() {

    var clothesNavBar = document.getElementById("clothesNavBar");
    var electronicsNavBar = document.getElementById("electronicsNavBar");
    var shoesNavBar = document.getElementById("shoesNavBar");
    var OthersNavBar = document.getElementById("OthersNavBar");
    var FurnituresNavBar = document.getElementById("FurnituresNavBar");

    clothesNavBar.addEventListener('click', function () {
        filterProductsByCategory("clothes");
    });
    electronicsNavBar.addEventListener('click', function () {
        filterProductsByCategory("electronics");
    });
    shoesNavBar.addEventListener('click', function () {
        filterProductsByCategory("shoes");
    });
    FurnituresNavBar.addEventListener('click', function () {
        filterProductsByCategory("furnitures");
    });
    OthersNavBar.addEventListener('click', function () {
        filterProductsByCategory("others");
    });


    function filterProductsByCategory(category) {
        var item = document.querySelectorAll(".productsPageDiv");
        for (var i = 0; i < item.length; i++) {
            var paraCategory = item[i].querySelector(".paraCategory");
            if (paraCategory.textContent === category) {
                item[i].style.display = "initial";
            } else {
                item[i].style.display = "none";
            }
        }
    }
}



///////////////////////////  filter by category ////////////////////////////////////////
function filterByRadioButton() {
    var newRadioButtons = document.querySelectorAll('input[name=category]');
    var Clothes = document.getElementById("1");
    var electronics = document.getElementById("3");
    var Others = document.getElementById("5");
    var Furnitures = document.getElementById("4");
    var Shoes = document.getElementById("2");
    var clear = document.getElementById("6");
    
    for (var newRadio of newRadioButtons) {
        newRadio.addEventListener('change', showMe);
        
        function showMe() {
            var item = document.querySelectorAll(".productsPageDiv");
            for (var i = 0; i < item.length; i++) {
                var paraCategory = item[i].querySelector(".paraCategory");
                
                if (Clothes.checked) {
                    console.log("Clothes");
                    if (paraCategory.textContent === "clothes") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } 
                }else if (electronics.checked) {
                    console.log("electronics");
                    if (paraCategory.textContent === "electronics") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } 
                }else if (Others.checked) {
                    console.log("others");
                    if (paraCategory.textContent === "others") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } 
                } else if (Furnitures.checked) {
                    console.log("furnitures");
                    if (paraCategory.textContent === "furnitures") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } 
                } else if (Shoes.checked) {
                    console.log("shoes");
                    if (paraCategory.textContent === "shoes") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } 
                } else if (clear.checked) {
                    console.log("clear");
                    item[i].style.display = "initial";
                } else {}
            }
        }
    }
}
filterByRadioButton();

////////////////////////////to get products from apiby xhml //////////////////////////////////////

var myXhmlRequest = new XMLHttpRequest();
myXhmlRequest.open("GET", "test.json");
myXhmlRequest.send();

myXhmlRequest.onreadystatechange = function () {
    if (myXhmlRequest.readyState === 4 && myXhmlRequest.status === 200) {
        var jsonData = JSON.parse(myXhmlRequest.responseText);
        showProductsPage(jsonData);
        showHomePage(jsonData);


    }
};

// product image ************************
function showProductsPage(jsonData) {
    var productsPage = document.querySelector(".productsPage");
    if (!productsPage) {
        return;
    }

    for (var i = 0; i < jsonData.length; i++) {

        var productsPageDiv = document.createElement("div");
        productsPageDiv.classList.add("productsPageDiv");
        productsPage.appendChild(productsPageDiv);

        var img = document.createElement("img");
        img.src = jsonData[i].image;
        img.setAttribute("data-index", i)
        productsPageDiv.appendChild(img);

        var div = document.createElement("div");
        div.classList.add("divTitle");
        div.textContent = jsonData[i].title;
        productsPageDiv.appendChild(div);

        var para = document.createElement("p");
        para.classList.add("paraPrice");
        para.textContent = "Price: " + jsonData[i].price + " LE,";
        productsPageDiv.appendChild(para);

        var paraCategory = document.createElement("p");
        paraCategory.textContent = jsonData[i].category.name;
        paraCategory.classList.add("paraCategory");
        productsPageDiv.appendChild(paraCategory);

        // go to single product page when click on image
        img.addEventListener("click", function() {
        var itemIndex = parseInt(this.getAttribute('data-index'));
        var singlePageItem = [];
        singlePageItem.push(jsonData[itemIndex])
        var singleJson = JSON.stringify(singlePageItem)
        localStorage.setItem("singleProduct", singleJson)
       
        window.open("./singleProduct.html", "") 
        
      })
    }
}


function showHomePage(jsonData) {

    var menimghome = document.querySelector(".menimghome");
    var womenimghome = document.querySelector(".womenimghome");
    var kidsimghome = document.querySelector(".kidsimghome");
    var cart = [];
    var cartContainer = document.getElementById('cart');

    // **************************** clothes part*************************** //
    // get clothes item from api 
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].category.name === "clothes") {

            var img = document.createElement("img");
            var imgAddContainer = document.createElement("div")
            var addDiv = document.createElement("div")
            img.setAttribute("data-index", i)
            addDiv.setAttribute("class", "addToCartImg")
            addDiv.setAttribute("data-index", i)
            imgAddContainer.setAttribute("class", "imgAddContainer")
            addDiv.innerHTML = "Add To Cart";

            img.src = jsonData[i].image;

            imgAddContainer.appendChild(img);
            imgAddContainer.appendChild(addDiv);
            menimghome.appendChild(imgAddContainer);

            // when click on item go to single product page
            img.addEventListener("click", function(){
                var itemIndex = parseInt(this.getAttribute('data-index'));
                var singlePageItem = [];
                singlePageItem.push(jsonData[itemIndex])
                var singleJson = JSON.stringify(singlePageItem)
                localStorage.setItem("singleProduct", singleJson)

                window.open("./singleProduct.html", "")
            })

            if(addDiv){
                addDiv.addEventListener('click', function() {
                  var addIndex = parseInt(this.getAttribute('data-index'));
                  cart.push(jsonData[addIndex]);
                  updateCart();
                });
              }

            var arrowIconRight1 = document.querySelector(".right1")
            var arrowIconLeft1 = document.querySelector(".left1")
            var main1 = document.querySelector(".xDiv1")

            arrowIconRight1.addEventListener("click", ()=>{
                main1.scrollLeft += 30;
            })
            arrowIconLeft1.addEventListener("click", ()=>{
                main1.scrollLeft += -30;
            })

            var arrowIconRight2 = document.querySelector(".right2")
            var arrowIconLeft2 = document.querySelector(".left2")
            var main2 = document.querySelector(".xDiv2")

            arrowIconRight2.addEventListener("click", ()=>{
                main2.scrollLeft += 30;
            })
            arrowIconLeft2.addEventListener("click", ()=>{
                main2.scrollLeft += -30;
            })

            var arrowIconRight3 = document.querySelector(".right3")
            var arrowIconLeft3 = document.querySelector(".left3")
            var main3 = document.querySelector(".xDiv3")

            arrowIconRight3.addEventListener("click", ()=>{
                main3.scrollLeft += 30;
            })
            arrowIconLeft3.addEventListener("click", ()=>{
                main3.scrollLeft += -30;
            })
        }
    }

    // ******************************** shoes category ************************************* //
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].category.name === "shoes") {
            var img = document.createElement("img");
            var imgAddContainer = document.createElement("div")
            var addDiv = document.createElement("div")
            img.setAttribute("data-index", i)
            addDiv.setAttribute("class", "addToCartImg")
            addDiv.setAttribute("data-index", i)

            imgAddContainer.setAttribute("class", "imgAddContainer")
            addDiv.innerHTML = "Add To Cart";

            img.src = jsonData[i].image;

            imgAddContainer.appendChild(img);
            imgAddContainer.appendChild(addDiv);
            womenimghome.appendChild(imgAddContainer);

            // when click on item go to single product page
            img.addEventListener("click", function(){
                var itemIndex = parseInt(this.getAttribute('data-index'));
                var singlePageItem = [];
                singlePageItem.push(jsonData[itemIndex])
                var singleJson = JSON.stringify(singlePageItem)
                localStorage.setItem("singleProduct", singleJson)

                window.open("./singleProduct.html", "")
            })

            // add to cart button
            if(addDiv){
                addDiv.addEventListener('click', function() {
                  var addIndex = parseInt(this.getAttribute('data-index'));
                  cart.push(jsonData[addIndex]);
                  updateCart();
                });
              }
        }
    }

    // **************************************** kids category ***************************** //
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].category.name === "electronics") {
            var img = document.createElement("img");
            var imgAddContainer = document.createElement("div")
            var addDiv = document.createElement("div")
            img.setAttribute("data-index", i)
            addDiv.setAttribute("class", "addToCartImg")
            addDiv.setAttribute("data-index", i)

            imgAddContainer.setAttribute("class", "imgAddContainer")
            addDiv.innerHTML = "Add To Cart";

            img.src = jsonData[i].image;

            imgAddContainer.appendChild(img);
            imgAddContainer.appendChild(addDiv);
            kidsimghome.appendChild(imgAddContainer);

            // when click on item go to single product page
            img.addEventListener("click", function(){
                var itemIndex = parseInt(this.getAttribute('data-index'));
                var singlePageItem = [];
                singlePageItem.push(jsonData[itemIndex])
                var singleJson = JSON.stringify(singlePageItem)
                localStorage.setItem("singleProduct", singleJson)

                window.open("./singleProduct.html", "")
            })

            // add to cart button
            if(addDiv){
                addDiv.addEventListener('click', function() {
                  var addIndex = parseInt(this.getAttribute('data-index'));
                  cart.push(jsonData[addIndex]);
                  updateCart();
                });
              }
        }
    }

    var cartIcon = document.getElementById('cartIcon');
    var cartFoot = document.getElementById('cart-cont');
    var closeCart = document.getElementById('closeCart');

    function cartOpenClose(){
        cartFoot.classList.toggle("cartToggle")
    }
    if(cartIcon || closeCart){
    cartIcon.addEventListener("click", cartOpenClose)
    closeCart.addEventListener("click", cartOpenClose)
    }

    function updateCart() {
        cartContainer.innerHTML = '';
        var totalPriceDiv = document.createElement("p");
        totalPrice = 0;
        if(totalPriceDiv){
          totalPriceDiv.setAttribute("id", "totalPrice");
        }
  
      for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        totalPrice += parseFloat(item.price)
        totalPriceSpan.innerHTML = totalPrice
  
        var title = document.createElement('h3');
        title.textContent = item.title;
  
        var price = document.createElement('p');
        price.textContent = "Price: "+item.price;
  
        var image = document.createElement('img');
        image.src = item.image;
  
        var titPriCont = document.createElement('div');
        if(titPriCont){
          titPriCont.setAttribute("id", "titPriCont")
          titPriCont.appendChild(title);
          titPriCont.appendChild(price);
        }
          
  
        var removeFromCartButton = document.createElement('button');
        if(removeFromCartButton){
          removeFromCartButton.textContent = '-';
          removeFromCartButton.setAttribute('data-index', i);
          removeFromCartButton.addEventListener('click', function() {
            var absIndex = parseInt(this.getAttribute('data-index'));
            cart.splice(absIndex, 1);
            totalPrice -= item.price
            updateCart();
          });
        }
          
          
        var cartItem = document.createElement('div');
        if(cartItem){
        cartItem.appendChild(image);
        cartItem.appendChild(titPriCont);
        cartItem.appendChild(removeFromCartButton);
        cartContainer.appendChild(cartItem);
        }
  
  
        }
      }

}

// **************************************************************** 
// when click on login icon go to login page and  log out


// get the name of user 
var userNameLog = localStorage.getItem("userName");
var uName = document.getElementById("userNameLogIn")
uName.innerHTML = userNameLog;


// select the ul to put the li log-in and log-out
var ulLog = document.getElementById("ulLog")
if(uName.innerHTML !== "login"){
    var li = document.createElement("li")
    li.innerHTML = "log Out";
    li.setAttribute("id", "logOut")
    ulLog.appendChild(li)
}else{
    var li = document.createElement("li")
    li.innerHTML = "login";
    li.setAttribute("id", "logIn")
    ulLog.appendChild(li)
    
}
var logIn = document.getElementById("logIn")
var logOut = document.getElementById("logOut")

// go to log-in page if clicked on log-in li
if(logIn){
    logIn.addEventListener("click", ()=>{
        var res = confirm("want to login")
        if(res){
            open("../registration.html", "_self")
        }
    })
}

// make log out if clicked log-ou li and clean the cart
if(logOut){
    logOut.addEventListener("click", ()=>{
        open("../index.html", "_self")
        localStorage.setItem("userName", "login");
        userNameLog = localStorage.getItem("userName")
        uName.innerHTML = userNameLog;
        cart = []
    })
}


    
