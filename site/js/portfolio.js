const myAvatar = document.querySelector(".avatar-bis");

myAvatar.addEventListener("click", function(){
    myAvatar.src = ("./image/logo-wcs.png");
})
const myButton = document.querySelector(".button1");
let myName = document.querySelector("#name"); 
  myButton.addEventListener("click", () =>{
      let myPrompt = prompt ("Enter your name");
      myName.innerText = myPrompt;
  });

  

  
  

// const val = prompt ("Enter your name");
// const myName = document.getElementById ("#name");
// myName.

