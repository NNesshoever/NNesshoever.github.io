window.addEventListener("resize", HideDropdown)
window.onload = HideDropdown


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