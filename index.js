function rollDice(){
    const numberOfDice = document.getElementById("numberOfDice").value ;
    const quayLuon = document.getElementById("quayLuon");
    const resultDice = document.getElementById("resultDice");
    const resultImages = document.getElementById("resultImages");
    
    const values = [];
    const images = [];
    let numberOfRandom;

    for(let i=0; i < numberOfDice; i++){
         numberOfRandom = Math.floor(Math.random() * 6 + 1);
         values.push(numberOfRandom);
         images.push(`<img src="dice_images/${numberOfRandom}.png" alt="">`)
    }
    resultDice.textContent = "Xúc xắc ra: " + values.join(", ");
    resultImages.innerHTML = images.join("");
}


