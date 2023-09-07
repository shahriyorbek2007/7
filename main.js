let accardion_h1 = document.querySelectorAll("h1");
let rotate90 = document.querySelectorAll(".plus");
accardion_h1.forEach((element) => {
    element.addEventListener("click", ()=>{
        element.nextElementSibling.classList.toggle("click");
    }
    )
});


















