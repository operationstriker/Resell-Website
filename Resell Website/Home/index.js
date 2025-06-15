
const Question1 = document.getElementById("Question1")
const Answer1 = document.getElementById("Answer1")

Question1.addEventListener("click", event => {
     if(Answer1.style.display === "none"){
        Answer1.style.display = "block"
     } else {
        Answer1.style.display = "none"
     }
})


const Question2 = document.getElementById("Question2")
const Answer2 = document.getElementById("Answer2")

Question2.addEventListener("click", event => {
     if(Answer2.style.display === "none"){
        Answer2.style.display = "block"
     } else {
        Answer2.style.display = "none"
     }
})



const Question3 = document.getElementById("Question3")
const Answer3 = document.getElementById("Answer3")


Question3.addEventListener("click", event => {
     if(Answer3.style.display === "none"){
        Answer3.style.display = "block"
     } else {
        Answer3.style.display = "none"
     }
})

const Question4 = document.getElementById("Question4")
const Answer4 = document.getElementById("Answer4")

function Open4() {
     Answer4.style.display = "block"

    if(Answer4.style.display == "block") {
        Answer4.style.display = "none"
    }
}

const Question5 = document.getElementById("Question5")
const Answer5 = document.getElementById("Answer5")

function Open5() {
   Answer5.style.display = "block"

    if(Answer5.style.display = "block") {
        Answer5.style.display == "none"
    }
}




function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
