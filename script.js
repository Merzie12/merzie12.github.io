let gfx = document.querySelector(".gfx");
let goBackGFX = document.querySelector(".goBack");
let web = document.querySelector(".web")
let goBackWEB = document.querySelector(".goBack");
let logo = document.querySelector(".logo");

// Przesunięcie strony GFX, wyłączenie strony WEB, przesunięcie loga, włączenie przycisku goBack

gfx.addEventListener("click", () => {
    document.querySelector(".gfx").classList.add("active"); //Powiekszenie GFX
    document.querySelector(".web").classList.add("none"); //Ukrycie WEB
    logo.classList.remove("logo"); //Usunięcie podstawowej klasy logo
    logo.classList.add("moveLogo"); //Dodanie nowej klasy logo
    document.querySelector(".goBack").classList.add("show"); //Pokazanie przycisku powrotu
    gfx.classList.add("mobileFullHeight"); //Dodanie klasy powiększającej strone na urządzeniach moblinych

// Wyłączenie HOVER po rozszerzeniu strony

    if(gfx.classList.value.includes("active")){
        gfx.classList.remove("hover");
    }

});

// Przycisk WRÓĆ na stronie GFX

goBackGFX.addEventListener("click", () => {document.querySelector(".gfx").classList.remove("active"); document.querySelector(".web").classList.remove("none");logo.classList.add("logo"); logo.classList.remove("moveLogo"); document.querySelector(".goBack").classList.remove("show");gfx.classList.add("hover");gfx.classList.remove("mobileFullHeight")
})

// Przesunięcie strony WEB, wyłączenie strony GFX, przesunięcie loga, włączenie przycisku goBack

web.addEventListener("click", () => {
    document.querySelector(".web").classList.add("active"); //powiekszenie WEB
    document.querySelector(".gfx").classList.add("none"); //ukrycie GFX
    logo.classList.remove("logo"); //Usunięcie podstawowej klasy logo
    logo.classList.add("moveLogo"); //Dodanie nowej klasy logo
    document.querySelector(".goBack").classList.add("show"); //Pokazanie przycisku powrotu
    web.classList.add("mobileFullHeight"); //Dodanie klasy powiększającej strone na urządzeniach moblinych

// Wyłączenie HOVER po rozszerzeniu strony

if(web.classList.value.includes("active")){
    web.classList.remove("hover");
}


});

// Przycisk WRÓĆ na stronie WEB

goBackWEB.addEventListener("click", () => {document.querySelector(".web").classList.remove("active"); document.querySelector(".gfx").classList.remove("none");logo.classList.remove("none"); document.querySelector(".goBack").classList.remove("show");web.classList.add("hover");web.classList.remove("mobileFullHeight");});


