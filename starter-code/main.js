const loginContainer = document.querySelector(".logContainer");
const inputCont = document.querySelector(".classlistInput")

const input = document.getElementById("emailInput");
const accessBtn = document.getElementById("requestAccessBtn");
const failAlert = document.getElementById("error");
const successAlert = document.getElementById("success");


accessBtn.addEventListener("click", () =>{
    if(input.value){
        failAlert.classList.add("hidden");
        successAlert.classList.remove("hidden");
    } else {
        failAlert.classList.remove("hidden");
        successAlert.classList.add("hidden");
    }
})

