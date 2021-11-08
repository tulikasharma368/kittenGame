let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let input = document.getElementById('userInput');

btn.addEventListener('click', function(e) {
    let input = document.getElementById('userInput').value;
    e.preventDefault(); 
    if(input == 7) {
       window.onload = win();
    } else {
        window.onload = loose();
    }
}) 

function win() {
    const winStar = `<div class="rating">
    <img class="trophy" src="../assets/trophy.svg">
    <img class="star_img yellow_star" src="../assets/yellow_star.png">
    <img class="star" src="../assets/blackstar.png">
    <img class="star" src="../assets/blackstar.png">
    <img class="star" src="../assets/blackstar.png">
    <img class="star" src="../assets/blackstar.png">
    <input 
        class="rating-1" 
        max="5" 
        type="text" 
        value="1">
    </div>
    <img class="win" src="../assets/star.svg">
    <p class="win_text">Very Nice</p>`
    input.value="";
    document.querySelector('#outputtext').innerHTML = winStar;
    
}

function loose() {
    const looseStar = `<img class="loose" src="../assets/star1.svg">
    <p class="loose_text">Oops Try again</p>`
    input.value="";
    document.querySelector('#outputtext').innerHTML = looseStar;
    
}