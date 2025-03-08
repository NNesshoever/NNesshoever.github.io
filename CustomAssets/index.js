window.addEventListener("resize", HideDropdown)
window.onload = HideDropdown
window.onload = Type

let words = "Hi, i am Niclas Neßhöver Developer"
let speed = 75;
let FirstSentence = document.getElementById("StartSentence")
let JobTitle = document.getElementById("JobTitle")
let MyName = document.getElementById("MyName")
let i = 0


function HideDropdown(){
    let width = window.innerWidth
    DropdownHamburger = document.getElementById("DropdownHamburger")
    if(width < 576){
        DropdownHamburger.style.display = 'block'
    }
    else{
        DropdownHamburger.style.display = 'none'
    }
}

function Type(){
    FirstSentence.innerHTML = JobTitle.innerHTML = MyName.innerHTML = "";
    typeWriter()
}

function typeWriter() {
    if(i < words.length) {
        if(i <= 8){
            FirstSentence.innerHTML += words.charAt(i)
        }
        else if(i > 8 && i<=24){
            MyName.innerHTML += words.charAt(i)
        }
        else{
            JobTitle.innerHTML += words.charAt(i)
        }
      i++;
      setTimeout(typeWriter, speed);
    }
  }