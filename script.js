/* The Gods Tournament Interactive Story
Pleyer chooses which god to train with.
Choices affect the story and clues collected.
The player must discover the correct message from the gods to win/
*/


let p1 = document.getElementById("paragraph1");
let p2 = document.getElementById("paragraph2");
let p3 = document.getElementById("paragraph3");

let zeusButton = document.getElementById("zeusButton");
let hermesButton = document.getElementById("hermesButton");
let athenaButton = document.getElementById("athenaButton");

let zeusChallengeButton = document.getElementById("zeusChallengeButton");
let hermesChallengeButton = document.getElementById("hermesChallengeButton");
let athenaChallengeButton = document.getElementById("athenaChallengeButton");

let finalTournamentButton = document.getElementById("finalTournamentButton");

let reviewButton = document.getElementById("reviewButton");
let answerInput = document.getElementById("answerInput");

let submitAnswer = document.getElementById("submitAnswer");

let image = document.getElementById("story-image");

let strength = 0;
let speed = 0;
let strategy = 0;
let trainings = 0;

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
    trainings++;
    
    strength = strength + 1;
    clues.push("Zeus said: Power alone cannot win the tournament.");

    p1.textContent = "Zeus trains you with lightning strength";
    p2.textContent = "You feel stronger than ever";
    p3.textContent = "But Zeus whispers a weird clue";

    changeImage("zeus.jpg");

    zeusChallengeButton.style.display = "block";

    zeusButton.style.display = "none";
}

function trainHermes(){
    speed = speed + 1;
    clues.push("Hermes said: The fastest athlete still needs a plan.");

    p1.textContent = "Hermes challenges you to impossible speed races";
    p2.textContent = "You become crazy fast";
    p3.textContent = "But Hermes leaves you with a mysterious hint";

    changeImage("hermes.jpg");

    hermesChallengeButton.style.display = "block";
}

function trainAthena(){
    strategy = strategy + 1;
    clues.push("Athena said: Victory belongs to the smartest player.");

    p1.textContent = "Athena teaches you patience and strategy.";
    p2.textContent = "You begin to understand the rules and the idea of the tournament.";
    p3.textContent = "She leaves you with an important clue.";

    changeImage("athena.jpg");

    athenaChallengeButton.style.display = "block";
}

function reviewClues(){
    p1.textContent = "Clues you found:";
    p2.textContent = "";
    p3.textContent = "";

    for(let i=0; i < clues.length; i++){
        p2.textContent += clues [i] + " ";}
        finalTournamentButton.style.display = "block";
    }


function zeusChallenge(){
    p1.textContent = "Zeus challenge you to lift the lightning Boulder.";
    p2.textContent = "The ground shakes as you gather your strength.";
    p3.textContent = "You barely lift it, but Zeus smiles."; 

    zeusChallengeButton.style.display = "none";

    if(trainings == 1) {
        p3.textContent = "Choose another god to train with.";
    }

    if(trainings == 2) {
        reviewButton.style.display = "block";
    }
    

}

function hermesChallenge(){
    p1.textContent = "Hermes starts a race against the wind spirits.";
    p2.textContent = "You sprint faster than ever before.";
    p3.textContent = "You almost catch the spirits.";

    hermesChallengeButton.style.display = "none";

    if(trainings == 1){
        p3.textContent = "Choose another god to train with.";
    }
    if(trainings == 2) {
        reviewButton.style.display = "block";
    }
    
}

function athenaChallenge(){
    p1.textContent = "Athena gives you a strategy puzzle.";
    p2.textContent = "You carefully think through every move.";
    p3.textContent = "Athena nods approvingly .";

    athenaChallengeButton.style.display = "none";

    if(trainings == 1){
        p3.textContent = "Choose another god to train with.";
    }
    if(trainings == 2) {
        reviewButton.style.display = "block";
    }
}

function finalTournament(){

    p1.textContent = "The final tournament begins.";
    p2.textContent = "Athletes chose by the gods gather in the arena.";
    p3.textContent = "Use the clues you learned to win.";

    changeImage("stadium.jpg");

    answerInput.style.display = "block";
    submitAnswer.style.display = "block";
}

function checkAnswer(){

    try{
        if(answerInput.value === "balance"){
            p1.textContent = "You understood the gods message.";
            p2.textContent = "Strength, speed, and strategy must be balanced.";
            p3.textContent = "You win the Gods Tournament(You owe me $20 for playing my game btw)";
            changeImage("win.jpg");
        }

        else{
            p1.textContent = "The gods shakes thier heads."
            p2.textContent = "You misuncertood the lesson"
            p3.textContent = "You lose the tournament (You will now be tortured for eternity (P.s. worst than atlas, annnd you owe me $50)"
            changeImage("lose.jpg");
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

submitAnswer.addEventListener("click", checkAnswer);

zeusChallengeButton.addEventListener("click", zeusChallenge)
hermesChallengeButton.addEventListener("click", hermesChallenge)
athenaChallengeButton.addEventListener("click", athenaChallenge)

finalTournamentButton = document.getElementById("finalTournamentButton")

zeusChallengeButton.style.display = "none";
hermesChallengeButton.style.display = "none";
athenaChallengeButton.style.display = "none";

  finalTournamentButton.style.display = "none";

  zeusChallengeButton.style.display = "none";
    hermesChallengeButton.style.display = "none";
      athenaChallengeButton.style.display = "none";

      reviewButton.style.display = "none";
        finalTournamentButton.style.display = "none";
        answerInput.style.display="none";
        submitAnswer.style.display= "none";