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

const Popup = document.querySelector(".popup")
const BurgerBtn = document.querySelector(".burger")
BurgerBtn.addEventListener("click", function() {
	Popup.classList.add("visible-popup")
})
