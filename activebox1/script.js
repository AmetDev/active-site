/* popup */

const BtnRed = document.getElementById("btn-red");
const Overlay = document.querySelector(".modal-overlay");
const BtnModalHeader = document.getElementById("BtnModal")

BtnRed.addEventListener("click", function() {
   Overlay.classList.add("modal-overlay--visible");
   document.querySelector(".modal").classList.add("modal--visible");
})

Overlay.addEventListener("click", function(e) {
    if (e.target == Overlay) {
        Overlay.classList.remove("modal-overlay--visible");
        document.querySelector(".modal").classList.remove("modal--visible");
    };
});

BtnModalHeader.addEventListener("click", function() {
    Overlay.classList.remove("modal-overlay--visible");
    document.querySelector(".modal").classList.remove("modal--visible");
})



/* BURGER */

const Popup = document.querySelector(".popup");
const BurgerBtn = document.querySelector(".burger");
const BurgerItem = document.querySelectorAll(".burger__item");
const Nav = document.querySelector('.nav').cloneNode(1)
const popupInner = document.querySelector(".popup_inner")

BurgerBtn.addEventListener("click", function() {
	Popup.classList.toggle("visible-popup");

    BurgerItem.forEach((item) => {
       item.classList.toggle("burger__item--active_items")
    });
    Nav.classList.toggle("active")
    popupInner.appendChild(Nav)
})

