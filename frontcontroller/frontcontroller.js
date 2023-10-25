let relativePath = window.location.pathname.split("/").pop()
switch(relativePath){
    case 'test':
        console.log("Test");
        break;
    
    default:
        window.localStorage.href = "nnesshoever.github.io"
}