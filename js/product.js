var filterInput = document.getElementById("searchProducts");
/////////////


filterInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        // Key code 13 is the "Enter" key
        filterProducts();
    }
});

/////////////////
function filterProducts() {


    var filterValue = filterInput.value.toUpperCase().trim();
    console.log(filterValue);
    var item = document.querySelectorAll(".productsPageDiv");
    for (var i = 0; i < item.length; i++) {
        /////////////////
        var titleDiv = item[i].querySelector(".divTitle");
        var pricePara = item[i].querySelector(".paraPrice");
        var paraCategory = item[i].querySelector(".paraCategory");
        //////////////////
        if (titleDiv.innerHTML.toUpperCase().indexOf(filterValue) > -1 ||
            pricePara.innerHTML.indexOf(filterValue) > -1 ||
            paraCategory.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            item[i].style.display = "initial";
        } else {
            item[i].style.display = "none";
        }
    }
}

//////////////////////////////////
////////////////////////// filter api from nav bar
function filterByNavBar() {

    var clothesNavBar = document.getElementById("clothesNavBar");
    var electronicsNavBar = document.getElementById("electronicsNavBar");
    var shoesNavBar = document.getElementById("shoesNavBar");
    var OthersNavBar = document.getElementById("OthersNavBar");
    var FurnituresNavBar = document.getElementById("FurnituresNavBar");
    //////////////////

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


////////////////////////////////////////
///////////////filter by category
function filterByRadioButton() {
    var newRadioButtons = document.querySelectorAll('input[name=category]');
    var Clothes = document.getElementById("1");
    var electronics = document.getElementById("3");
    var Others = document.getElementById("5");
    var Furnitures = document.getElementById("4");
    var Shoes = document.getElementById("2");
    var clear = document.getElementById("6");
    //////////////////////
    for (var newRadio of newRadioButtons) {
        newRadio.addEventListener('change', showMe);
        //////////////////////
        function showMe() {
            var item = document.querySelectorAll(".productsPageDiv");
            for (var i = 0; i < item.length; i++) {
                var paraCategory = item[i].querySelector(".paraCategory");
                //////////////////////
                if (Clothes.checked) {
                    console.log("Clothes");
                    if (paraCategory.textContent === "clothes") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } /////////////////
                } else if (electronics.checked) {
                    console.log("electronics");
                    if (paraCategory.textContent === "electronics") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } /////////////////
                } else if (Others.checked) {
                    console.log("others");
                    if (paraCategory.textContent === "others") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } /////////////////
                } else if (Furnitures.checked) {
                    console.log("furnitures");
                    if (paraCategory.textContent === "furnitures") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } /////////////////
                } else if (Shoes.checked) {
                    console.log("shoes");
                    if (paraCategory.textContent === "shoes") {
                        item[i].style.display = "initial";
                    } else {
                        item[i].style.display = "none";
                    } /////////////////
                } else if (clear.checked) {
                    console.log("clear");
                    item[i].style.display = "initial";
                } else {} /////////////////
            }
        }
    }
}
filterByRadioButton();
//////////////////////////////////////
////////////////////////////to get products from apiby xhml 
var myXhmlRequest = new XMLHttpRequest();
myXhmlRequest.open("GET", "test.json");
myXhmlRequest.send();
///////////////////
myXhmlRequest.onreadystatechange = function () {
    if (myXhmlRequest.readyState === 4 && myXhmlRequest.status === 200) {
        var jsonData = JSON.parse(myXhmlRequest.responseText);
        ///////////////////////
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