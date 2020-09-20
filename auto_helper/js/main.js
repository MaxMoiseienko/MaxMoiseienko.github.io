//тот же скрипт для логина, только предназначен для главной страницы

const close = document.querySelector(".close");
const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const userName =  document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        loop: true,
        navClass: ["slider__nav-left" , "slider__nav-right"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
});
let login = localStorage.getItem("gloDelivery");

function toggleModalAuth(){
  modalAuth.classList.toggle("is-open");
}

function authorized(){


  function logOut(){
    login = null;
    localStorage.removeItem("gloDelivery");
    buttonAuth.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";
    buttonOut.removeEventListener("click", logOut);
    checkAuth();
  }


  console.log("Авторизован");

  userName.textContent = login;

  buttonAuth.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "block";

  buttonOut.addEventListener("click", logOut);
}

function notAuthorized(){
  console.log("Не авторизован");

  function logIn(event){
    event.preventDefault();
    login = loginInput.value;

    localStorage.setItem("gloDelivery", login);

    // toggleModalAuth(); закоментировал в связи с тем, что поместил эту функцию в checkLog()
    checkLog();
    buttonAuth.removeEventListener("click", toggleModalAuth);
    buttonAuth.removeEventListener("click", checkLog);
    closeAuth.removeEventListener("click", toggleModalAuth);
    logInForm.removeEventListener("submit", logIn);
    logInForm.reset();
    checkAuth();
    
  }

  buttonAuth.addEventListener("click", toggleModalAuth);
  closeAuth.addEventListener("click", toggleModalAuth);
  logInForm.addEventListener("submit", logIn);
}

function checkAuth(){
if (login){
  authorized();
} else {
  notAuthorized();
}
  }

function checkLog(){
  if (login == null || login == ""){
   alert("Вы не ввели логин и пароль");
  }else{
    toggleModalAuth();
  }
}



checkAuth();