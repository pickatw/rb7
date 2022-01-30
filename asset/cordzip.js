/*CreatedBy IIan/Pickatwu*/
/*073984 w e b  i s  p i c k a t w u . g i t h u b . i o*/
/*073984 w e b  i s  p i c k a t w u . g i t h u b . i o*/
/*073984 w e b  i s  p i c k a t w u . g i t h u b . i o*/
/*073984 w e b  i s  p i c k a t w u . g i t h u b . i o*/
/*073984 w e b  i s  p i c k a t w u . g i t h u b . i o*/
/*073984 w e b  i s  p i c k a t w u . g i t h u b . i o*/
/*Spacing*/
 
/* Import assets and needs Automatically */

document.write(
    "<link rel='stylesheet' href='asset/cordzip.css'>",
    "<link rel='shortcut icon' href='asset/icon.png'>"
    );

/*Console*/
var greeting = ("Welcome to Cordzip");

    var reads = ("Please Ignore this warning Errors");
    var read2 = ("Error was Send(reason: 5page not yet added)");
    
console.log(greeting);
console.log(reads);
console.log(read2, "adding 5pages is not required");

/*Menu*/
function menu() {
    /*One click opens menu, Second Click closes the menu*/
    document.getElementById("menu").classList.toggle("hide");
}

/*Menu auto close*/
function aclosemenu() {
    /*this is only for closing*/
    document.getElementById("menu").classList.add("hide");
}
    


/*page1*/

function page1() {
   
    document.getElementById("page1").classList.remove("hide");

    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
    document.getElementById("page5").classList.add("hide");


}


/*page2*/

function page2() {
    document.getElementById("page2").classList.remove("hide");

    
    document.getElementById("page1").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
    document.getElementById("page5").classList.add("hide");


}


/*page3*/

function page3() {
    document.getElementById("page3").classList.remove("hide");

    
    document.getElementById("page1").classList.add("hide");
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
    document.getElementById("page5").classList.add("hide");

    

}


/*page4*/

function page4() {
    document.getElementById("page4").classList.remove("hide");

    document.getElementById("menu").classList.toggle("hide");
    document.getElementById("page1").classList.add("hide");
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page5").classList.add("hide");
}


/*page5*/

function page5() {
    document.getElementById("page5").classList.remove("hide");

    document.getElementById("menu").classList.toggle("hide");
    document.getElementById("page1").classList.add("hide");
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
}

/*errors the js*/
/*var console_comment = document.scripts("console")
var functions = ("/:function");
  if ("/:function") functions.match = (console); {
    var log_comment = ("function",
    "Uncaught TypeError: Cannot read properties of null (reading 'classList')",
    "  /:file  at HTMLAnchorElement.onclick"
    )};*/

/*Get Data from a - g*/
function getdata() {
    localStorage.setItem("a", document.getElementById("a").value);
    localStorage.setItem("b", document.getElementById("b").value);
    localStorage.setItem("a", document.getElementById("c").value);
    localStorage.setItem("a", document.getElementById("d").value);
    localStorage.setItem("a", document.getElementById("e").value);
    localStorage.setItem("a", document.getElementById("f").value);
    localStorage.setItem("a", document.getElementById("g").value);
}

/*Show Data a - g to resul page*/
function showdata() {
    document.getElementById("a").innerText =  localStorage.getItem("a");
    document.getElementById("b").innerText =  localStorage.getItem("b");
    document.getElementById("c").innerText =  localStorage.getItem("c");
    document.getElementById("d").innerText =  localStorage.getItem("d");
    document.getElementById("e").innerText =  localStorage.getItem("e");
    document.getElementById("f").innerText =  localStorage.getItem("f");
    document.getElementById("g").innerText =  localStorage.getItem("g");
    


}