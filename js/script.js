
// contact page
// number of order to add to cart in single product page
// var incBtn = document.getElementById("inc");
// var decBtn = document.getElementById("dec");
// var x = document.getElementById("numOfOrder");
// var numOfOrder = 0;
// x.innerHTML = numOfOrder;

// incBtn.addEventListener("click", () => {
//     numOfOrder++
//     noOfOrd.innerHTML = numOfOrder;
// })
// decBtn.addEventListener("click", () => {
//     if(numOfOrder > 0){
//         numOfOrder--
//         x.innerHTML = numOfOrder;
//     }
// })


// login page 
// to cancel creating new account
var cancelBtn = document.getElementById("cr-cancel");
var outerWinfow = document.getElementById("lg-newAccount");
cancelBtn.addEventListener("click", () => outerWinfow.style.display = "none");


// to open the form of creating account when click btn create new account
var createBtn = document.getElementById("createAccount");
var outerWinfow = document.getElementById("lg-newAccount");
createBtn.addEventListener("click", () => outerWinfow.style.display = "block");


// validation of new account information


var frName = document.getElementById("firstName")
var lsName = document.getElementById("lastName")
var userEmail = document.getElementById("cr-email")
var createBtn = document.getElementById("cr-btn-signUp")
var accountPass = document.getElementById("cr-password")
var confirmAccountPass = document.getElementById("cr-confirm-password")
var lsValue;
var frValue;;;
var newAccountPass;
var nameInvMess = document.getElementById("cr-p-name")
var passInvMess = document.getElementById("cr-p-pass")
var confPassInvMess = document.getElementById("cr-p-confirm-pass")

var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

var ifnoObj;
var arr = []
if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(arr));
}

createBtn.addEventListener('click',function(){
    // confirmAccountPass.addEventListener('keydown', function() {
        if(accountPass.value === confirmAccountPass.value){
            
            frValue = frName.value;
            lsValue = lsName.value;
            newAccountPass = accountPass.value;
            if(!usernameRegex.test(frValue) || !usernameRegex.test(lsValue)){
               nameInvMess.style.display = "block";
               passInvMess.style.display = "none";
               confPassInvMess.style.display = "none";
               confirmAccountPass.style.borderColor = "#cfcfcf";

            }
            else if( !passwordRegex.test(newAccountPass) ){
                passInvMess.style.display = "block";
                nameInvMess.style.display = "none";
                confPassInvMess.style.display = "none";
                confirmAccountPass.style.borderColor = "#cfcfcf";

            }else{
                addObject();
                outerWinfow.style.display = "none";
                confirmAccountPass.style.borderColor = "#cfcfcf";
                frName.value = "";
                lsName.value = "";
                userEmail.value = "";
                accountPass.value = "";
                confirmAccountPass.value = "";
            }
        }else {
            confirmAccountPass.style.borderColor = "red";
            confPassInvMess.style.display = "block";
            passInvMess.style.display = "none";
            nameInvMess.style.display = "none";
           
          }
    // })
    
})
function addObject(){
    
    arr = JSON.parse(localStorage.getItem("accounts"))   // get array information from local srorage;

    // collect information of new account
    var fullName = frValue + " " + lsValue
    var ifnoObj = {userName: "", userPassword: "", email: ""};

    ifnoObj.userName = fullName;
    ifnoObj.userPassword = accountPass.value;
    ifnoObj.email = userEmail.value;

    arr.push(ifnoObj)
    var arrToJson = JSON.stringify(arr);
    
    localStorage.setItem("accounts", arrToJson)   // set information in local storage as json
}


// function to check if the input value is exist in accounts log in 
var userName = document.getElementById("lg-userName")
var userPassword = document.getElementById("lg-userPassword")

function logInFunc(){    
    arr = JSON.parse(localStorage.getItem("accounts"))
    if(userName.value || userPassword.value){
        var foundUser = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].userName === userName.value && arr[i].userPassword === userPassword.value){
                foundUser = true;
                break;
            }
        }
        if (foundUser) {
            // window.location.href="../contact.html"
            alert("pass")
        } else {
            alert("invalid user name or invalid");
        }
    }else{
        alert("please enter all data")
    }
}

// login page

// to cancel creating new account
var cancelBtn = document.getElementById("cr-cancel")
var outerWinfow = document.getElementById("lg-newAccount")
cancelBtn.addEventListener("click", () => outerWinfow.style.display = "none")


// to open the form of creating account when click btn create new account
var createBtn = document.getElementById("createAccount")
var outerWinfow = document.getElementById("lg-newAccount")
createBtn.addEventListener("click", () => outerWinfow.style.display = "block")


// validation of new account information
{/* <input type="text" id="firstName"  placeholder="first name" required>
<input type="text" id="lastName" placeholder="last name" required></input>  */}

var frName = document.getElementById("firstName")
var lsName = document.getElementById("lastName")
var userEmail = document.getElementById("cr-email")
var createBtn = document.getElementById("cr-btn-signUp")
var accountPass = document.getElementById("cr-password")
var confirmAccountPass = document.getElementById("cr-confirm-password")
var lsValue;
var frValue;;;
var newAccountPass;
var nameInvMess = document.getElementById("cr-p-name")
var passInvMess = document.getElementById("cr-p-pass")
var confPassInvMess = document.getElementById("cr-p-confirm-pass")

var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

var ifnoObj;
var arr = []
if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(arr));
}

createBtn.addEventListener('click',function(){
    // confirmAccountPass.addEventListener('keydown', function() {
        if(accountPass.value === confirmAccountPass.value){
            
            frValue = frName.value;
            lsValue = lsName.value;
            newAccountPass = accountPass.value;
            if(!usernameRegex.test(frValue) || !usernameRegex.test(lsValue)){
               nameInvMess.style.display = "block";
               passInvMess.style.display = "none";
               confPassInvMess.style.display = "none";
               confirmAccountPass.style.borderColor = "#cfcfcf";

            }
            else if( !passwordRegex.test(newAccountPass) ){
                passInvMess.style.display = "block";
                nameInvMess.style.display = "none";
                confPassInvMess.style.display = "none";
                confirmAccountPass.style.borderColor = "#cfcfcf";

            }else{
                addObject();
                outerWinfow.style.display = "none";
                confirmAccountPass.style.borderColor = "#cfcfcf";
                frName.value = "";
                lsName.value = "";
                userEmail.value = "";
                accountPass.value = "";
                confirmAccountPass.value = "";
            }
        }else {
            confirmAccountPass.style.borderColor = "red";
            confPassInvMess.style.display = "block";
            passInvMess.style.display = "none";
            nameInvMess.style.display = "none";
           
          }
    // })
    
})
function addObject(){
    
    arr = JSON.parse(localStorage.getItem("accounts"))   // get array information from local srorage;

    // collect information of new account
    var fullName = frValue + " " + lsValue
    var ifnoObj = {userName: "", userPassword: "", email: ""};

    ifnoObj.userName = fullName;
    ifnoObj.userPassword = accountPass.value;
    ifnoObj.email = userEmail.value;

    arr.push(ifnoObj)
    var arrToJson = JSON.stringify(arr);
    
    localStorage.setItem("accounts", arrToJson)   // set information in local storage as json
}


// function to check if the input value is exist in accounts log in 
var userName = document.getElementById("lg-userName")
var userPassword = document.getElementById("lg-userPassword")

function logInFunc(){    
    arr = JSON.parse(localStorage.getItem("accounts"))
    if(userName.value || userPassword.value){
        var foundUser = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].userName === userName.value && arr[i].userPassword === userPassword.value){
                foundUser = true;
                break;
            }
        }
        if (foundUser) {
            window.open("./singleProduct.html", "_self")
        } else {
            alert("invalid user name or invalid");
        }
    }else{
        alert("please enter all data")
    }
}
    

var logInBnt = document.getElementById("lg-login");
logInBnt.addEventListener("click", logInFunc)

