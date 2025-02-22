// https://www.p5js.org
// this code comes from this tutorial
// command(osx)console(win) / is the commet command in any language

var schmoDiv = document.getElementById("schmo marie");

//document.getElementById("schmo marie").innerHTML("found it!");
// schmoDiv.hidden = true;
if(schmoDiv === null){
    // do something;
}
console.log(schmoDiv);

// ----------------------------------------------
// https://www.w3schools.com/tutorial/onclicked

function ourDivWasClicked(){
    if(schmoDiv.innerHTML === "Hello"){
        schmoDiv.innerHTML = "Howdy!";
    }else{
        schmoDiv.innerHTML = "Hello";
    }
}

schmoDiv.onclick = ourDivWasClicked;
// end tutorial code
// ----------------------------------------------

