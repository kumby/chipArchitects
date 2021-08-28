function openPage(){
    var x = document.getElementById("search").value;

    if (x==="contact" || x==="Contact" ){
        window.open("./contact.html",("_self"));
    }

    else if (x==="address" || x==="Address"){
        window.open("./contact.html",("_self"));
    }
    else if (x==="home" || x==="Home"){
        window.open("./index.html",("_self"));  
    }
    else if (x==="What we do"){
        window.open("./about.html",("_self"));   
    }
    else if (x==="services" || x==="Services"){
        window.open("./about.html",("_self"));   
    }
    else if (x==="Portifolio" || x==="portifolio"){
        window.open("./about.html",("_self")); }
    else {
    alert("result not found")    
    }
}