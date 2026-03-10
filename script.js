let p1 = document.getElementById("paragraph1");
let p2 = document.getElementById("paragraph2");
let p3 = document.getElementById("paragraph3");

let zeusButton = document.getElementById("zeusButton");
let hermesButton = document.getElementById("hermesButton");
let athenaButton = document.getElementById("athenaButton");

let reviewButton = document.getElementById("reviewButton");
let answerInput = document.getElementById("answerInput");

let submitAnswer = document.getElementById("submitAnswer");

let image = document.getElementById("story-image");

let strength = 0;
let speed = 0;
let strategy = 0;

let clues = [];

function startStory(){
    p1.textContent = "You finish soccer practice when the stadium lights suddenly go out";
    p2.textContent = "Three gods appear: Zeus, Hermes, and Athena.";
    p3.textContent = "Each offers to train you for the legendary gods Tournament.";
}

startStory();

function changeImage(file){
    image.src = file;
}

function trainZeus(){
    strength = strength + 1;
    clues.push("Zeus said: Power alone cannot win the tournament.");

    p1.textContent = "Zeus trains you with lightning strength";
    p2.textContent = "You feel stronger than ever";
    p3.tectContent = "But Zeus whipers a weird clue";

    changeImage("zeus.jpg");
}

function trainHermes(){
    speed = speed + 1;
    clues.push("Hermes said: The fastest athlete still needs a plan.");

    p1.textContent = "Hermes challenges you to impossible speed races";
    p2.textContent = "You become crazy fast";
    p3.tectContent = "But Hermes leaves you with a mysterious hint";

    changeImage("hermes.jpg");
}

function trainAthena(){
    speed = speed + 1;
    clues.push("Athena said: Victory belongs to the smartest player.");

    p1.textContent = "Athena teaches you patience and strategy.";
    p2.textContent = "You begin to understand the rules and the idea of the tournament.";
    p3.tectContent = "She leaves you with an important clue.";

    changeImage("athena.jpg");
}

function reviewClues(){
    p1.textContent = "Clues you found:";
    p2.textContent = "";
    p3.textContent = "";

    for(let i=0; i < clues.length; i++){
        p2.textContent.Content += clues [i] + " "};
}

function checkAnswer(){

    try{
        if(answerInput.value === "balance"){
            p1.textContent = "You understood the gods message.";
            p2.textContent = "Strength, speed, and strategy must be balanced.";
            p3.textContent = "You win the Gods Tournament(You owe me $20 for playing my game btw)";
        }

        else{
            p1.textContent = "The gods shakes thier heads."
            p2.textContent = "You misuncertood the lesson"
            p3.textContent = "You lose the tournament (You will now be tortured for eternity (P.s. worst than atlas)"
        }

    }
    catch(error){
        console.log("Error happened")
    }

}

zeusButton.addEventListener("click", trainZeus);
hermesButton.addEventListener("click", trainHermes);
athenaButton.addEventListener("click", trainAthena);

reviewButton.addEventListener("click", reviewClues);

submitAnswer.addEventListener("clcik", checkAnswer);


