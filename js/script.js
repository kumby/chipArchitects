function openPage(){
    var x = document.getElementById("search").value;

    if (x==="contact"){
        window.open("./contact.html",("_self"));
    }

    else if (x==="address"){
        window.open("./contact.html",("_self"));
    }
    else if (x==="home"){
        window.open("./index.html",("_self"));  
    }
    else if (x==="what we do"){
        window.open("./about.html",("_self"));   
    }
    else if (x==="services"){
        window.open("./about.html",("_self"));   
    }
    else {
    alert("result not found")    
    }
}