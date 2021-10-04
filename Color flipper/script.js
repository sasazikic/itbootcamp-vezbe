const colors = ["green", "red", "blue", "yellow", "black",  "grey", "purple", "pink"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    //get random number between 0 - 3 colors[0]
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}