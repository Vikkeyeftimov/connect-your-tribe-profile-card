let hobbiesknop = document.querySelector(".hobbies-button")
let sectionhoob = document.querySelector("hobbies")

hobbiesknop.addEventListener("click", function() {
    hobbiesknop.classList.remove(".hobbies")
})

hobbiesknop,addEventListener("click". veranderen)
function veranderen(){
    if(this.innerHTML === "specialehobbies") {
        this.innerHTML = "hobbiesswitch"
    }
}