let relativePath = window.location.pathname.split("/").pop()
let anchor = document.getElementById("html")
let test = true;
if(test){

}else{
    switch(relativePath){
        case 'test':
            console.log("Test");
            break;
        case 'businessCard':
            filePath = "../businessCard.html"
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", filePath, false)
            xmlhttp.send()
            let html = xmlhttp.responseText
            anchor.innerHTML = html
            break
    
        default:
            window.localStorage.href = "nnesshoever.github.io"
    }
}

