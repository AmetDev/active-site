const BtnRed = document.getElementById("btn-red")
const Overlay = document.querySelector(".modal-overlay")

BtnRed.addEventListener("click", function() {
   Overlay.classList.add("modal-overlay--visible")
   document.querySelector(".modal").classList.add("modal--visible")
})

Overlay.addEventListener("click", function(e) {
    if (e.target == Overlay) {
        Overlay.classList.remove("modal-overlay--visible")
        document.querySelector(".modal").classList.remove("modal--visible")
    }
    
})