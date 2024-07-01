let prc = document.querySelector(".products");
let prc2 = document.getElementById("Sec");

let blogPage = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let abt = document.querySelector(".about");
let cont = document.querySelector(".contact");
let crt = document.querySelector(".cart");
let acc = document.querySelector(".account-page");

function homes(){
    mainPage.style.display="flex";
    blogPage.style.display="block";
    prc.style.display="block";
    prc2.style.display="block";
    abt.style.display="none";
    cont.style.display="none";
    acc.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("home").style.color="rgb(6, 147, 147)";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("account").style.color="black";
}

function shops(){
    mainPage.style.display="none";
    blogPage.style.display="none";
    prc.style.display="block";
    prc2.style.display="block";
    abt.style.display="none";
    cont.style.display="none";
    acc.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("shop").style.color="rgb(6, 147, 147)";
    document.getElementById("home").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("account").style.color="black";
}

function blogs(){
    mainPage.style.display="none";
    prc.style.display="none";
    prc2.style.display="none";
    blogPage.style.display="block";
    abt.style.display="none";
    cont.style.display="none";
    acc.style.display="none";

    document.getElementById("blog").style.color="rgb(6, 147, 147)";
    document.getElementById("shop").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("account").style.color="black";
}

function abouts(){
    mainPage.style.display="none";
    prc.style.display="none";
    prc2.style.display="none";
    blogPage.style.display="none";
    abt.style.display="block";
    cont.style.display="none";
    acc.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("about").style.color="rgb(6, 147, 147)";
    document.getElementById("contact").style.color="black";
    document.getElementById("account").style.color="black";
}

function contacts(){
    mainPage.style.display="none";
    prc.style.display="none";
    prc2.style.display="none";
    blogPage.style.display="none";
    abt.style.display="none";
    cont.style.display="block";
    acc.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="rgb(6, 147, 147)";
    document.getElementById("account").style.color="black";
}

function accounts(){
    mainPage.style.display="none";
    prc.style.display="none";
    prc2.style.display="none";
    blogPage.style.display="none";
    abt.style.display="none";
    cont.style.display="none";
    acc.style.display="block";

    document.getElementById("blog").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("account").style.color="rgb(6, 147, 147)";
}

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src = img.src;

    mainPage.style.display="none";
    prc.style.display="none";
    prc2.style.display="none";
   blogPage.style.display="none";
   abt.style.display="none";
   cont.style.display="none"
    document.querySelector(".cart").style.display="flex";
}

function addCart(){
    alert("Added To Cart");
    location.reload()
}

var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indi = document.getElementById("indicator");

function register(){
    regForm.style.transform="translateX(0px)";
    loginForm.style.transform="translateX(0px)";
    indi.style.transform="translateX(100px)";
}

function login(){
    regForm.style.transform="translateX(300px)";
    loginForm.style.transform="translateX(300px)";
    indi.style.transform="translateX(0px)";
}

 




