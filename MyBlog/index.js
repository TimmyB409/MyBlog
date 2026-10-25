const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const submit = document.getElementById("submit");
const noChoice = document.getElementById("no-choice");
const badChoice = document.getElementById("bad-choice");
const goodChoice = document.getElementById("good-choice");

submit.addEventListener("click", async() => {
    noChoice.style.visibility = "hidden"
    goodChoice.style.visibility = "hidden";
    badChoice.style.visibility = "hidden";
    if(noButton.checked){
        badChoice.style.visibility = "visible";
    }else if(yesButton.checked){
        goodChoice.style.visibility = "visible";
    }else{
        noChoice.style.visibility = "visible";
    }
})