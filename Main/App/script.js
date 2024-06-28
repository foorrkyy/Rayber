const theme_link = document.getElementById("theme-link");
const mn = document.getElementsByClassName("main")[0];
let itm = document.querySelectorAll(".leftbar .item");
let span = document.querySelectorAll(".item span");
var mot = undefined;
var mlt = undefined;
let theme_bttn = document.getElementById("theme-bttn");

for(e of itm){   
    e.addEventListener("mouseover", () =>{
        mot = setTimeout(() => {
            mn.classList.add("active");
            span.forEach((a) =>  a.classList.add("ac-span"));
        }, 1000);
        clearTimeout(mlt);
    });
    e.addEventListener("mouseleave", () => {
        mlt = setTimeout(() => {
            mn.classList.remove("active");
            span.forEach((a) => a.classList.remove("ac-span"));
    }, 1000);
    clearTimeout(mot);
    });
};

if (typeof localStorage.getItem("theme") == "string"){
    console.log("ok")
    var theme = localStorage.getItem("theme");
    theme_link.href = `themes/${theme}.css`;
    if(localStorage.getItem("theme") == "black"){
        theme_bttn.children[0].name = "flash-outline";
    }else{
        theme_bttn.children[0].name = "flash";
    }
}
theme_bttn.addEventListener("click", () =>{
    if(theme_link.href.includes("themes/white.css")){
        theme_link.href = "themes/black.css";
        theme_bttn.children[0].name = "flash-outline";
        localStorage.setItem("theme", "black");
        return;
    }
    theme_link.href = "themes/white.css";
    theme_bttn.children[0].name = "flash";
    localStorage.setItem("theme", "white");
});