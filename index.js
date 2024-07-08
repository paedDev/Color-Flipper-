const colors = ["green", "red","rgba(133,122,200), ", "#f15025" , "black", "pink", "#FFFFFF"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const h1 = document.querySelector(".h1");


btn.addEventListener("click",()=>{

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
    h1.style.color = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}