let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColur=getRandomColour();
    h3.innerText=randomColur;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColur;
    console.log("Colour updated");
});
function getRandomColour(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let colour=`rgb(${red},${green},${blue})`;
    return colour;
}