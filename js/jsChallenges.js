function challenge1(){
    if(document.getElementById("subscribe").checked == true)
    {
        console.log("This works");
        document.querySelector("#emailDiv").style.display = "block";
    }

    else{
        document.querySelector("#emailDiv").style.display = "none";
    }

}