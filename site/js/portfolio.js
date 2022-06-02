const myAvatar = document.querySelector(".avatar-bis");

myAvatar.addEventListener("click", function(){
    myAvatar.src = ("./image/logo-wcs.png");
})

const myButton1 = document.querySelector(".button1");
let myColor = document.querySelector(".description");
myButton1.addEventListener("click", () =>{
  let myPrompt1 = prompt ("Enter a new color");
  myColor.style.backgroundColor = myPrompt1;
})

const myButton = document.querySelector(".button1");
let myName = document.querySelector("#name"); 
  myButton.addEventListener("click", () =>{
      let myPrompt = prompt ("Enter your name");
      myName.innerText = myPrompt;
  });


