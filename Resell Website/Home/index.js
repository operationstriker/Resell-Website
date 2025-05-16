
const Question1 = document.getElementById("Question1");
const Answer1 = document.getElementById("Answer1")


Question1.addEventListener("click", () => {
    if (Answer1.style.display == "none") {
        Answer1.style.display = "block"
    } else {
        Answer1.style.display = "none"
    }
})



