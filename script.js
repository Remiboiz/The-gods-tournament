/* 
The Gods Tournament Interactive Story
lowkey a game where you train with gods and try to win the tournament

flow:
zeus -> athena -> hermes -> review clues -> final tournament -> password

player has to figure out the message from the clues
*/

let p1 = document.getElementById("paragraph1");
let p2 = document.getElementById("paragraph2");
let p3 = document.getElementById("paragraph3");

let zeusButton = document.getElementById("zeusButton");
let athenaButton = document.getElementById("athenaButton");
let hermesButton = document.getElementById("hermesButton");

let zeusChallengeButton = document.getElementById("zeusChallengeButton");
let athenaChallengeButton = document.getElementById("athenaChallengeButton");
let hermesChallengeButton = document.getElementById("hermesChallengeButton");

let reviewButton = document.getElementById("reviewButton");
let finalTournamentButton = document.getElementById("finalTournamentButton");

let answerInput = document.getElementById("answerInput");
let submitAnswer = document.getElementById("submitAnswer");

let image = document.getElementById("story-image");


// stats (not super important but makes it feel like a game)
let strength = 0;
let strategy = 0;
let speed = 0;

// store clues here
let clues = [];


// START STORY
function startStory(){

    p1.textContent = "You finish soccer practice when the stadium lights suddenly go out.";
    p2.textContent = "Three gods appear in front of you: Zeus, Athena, and Hermes.";
    p3.textContent = "Zeus steps forward and offers to train you first.";

    image.src = "stadium.jpg";

}

startStory();


// helper function for changing image
function changeImage(file){
    image.src = file;
}


//  ZEUS 

function trainZeus(){

    strength++;

    clues.push("Zeus said: Strength is important, but nobody wins alone.");

    p1.textContent = "Zeus trains you with lightning strength.";
    p2.textContent = "You lift massive stones and feel powerful.";
    p3.textContent = "Before leaving, Zeus whispers a strange clue.";

    changeImage("zeus.jpg");

    zeusButton.style.display = "none";
    zeusChallengeButton.style.display = "block";

}


// ZEUS CHALLENGE

function zeusChallenge(){

    p1.textContent = "Zeus challenges you to lift the Lightning Boulder.";
    p2.textContent = "You push with everything you have.";
    p3.textContent = "You barely lift it, but Zeus smiles.";

    zeusChallengeButton.style.display = "none";

    // next god unlocked
    p3.textContent = "Next, Athena offers to train you.";

    athenaButton.style.display = "block";

}



//  ATHENA 

function trainAthena(){

    strategy++;

    clues.push("Athena said: Even the strongest warrior needs the right people around them.");

    p1.textContent = "Athena teaches you strategy and patience.";
    p2.textContent = "You study tactics and learn to read opponents.";
    p3.textContent = "She leaves you with another clue.";

    changeImage("athena.jpg");

    athenaButton.style.display = "none";
    athenaChallengeButton.style.display = "block";

}


// ATHENA CHALLENGE

function athenaChallenge(){

    p1.textContent = "Athena gives you a difficult strategy puzzle.";
    p2.textContent = "You think through every possible move.";
    p3.textContent = "Athena nods approvingly.";

    athenaChallengeButton.style.display = "none";

    p3.textContent = "Finally, Hermes appears and offers speed training.";

    hermesButton.style.display = "block";

}



//  HERMES 

function trainHermes(){

    speed++;

    clues.push("Hermes said: Fast players still rely on their teammates.");

    p1.textContent = "Hermes pushes you through impossible races.";
    p2.textContent = "You run faster than the wind.";
    p3.textContent = "Before leaving, he gives you one last clue.";

    changeImage("hermes.jpg");

    hermesButton.style.display = "none";
    hermesChallengeButton.style.display = "block";

}


// HERMES CHALLENGE

function hermesChallenge(){

    p1.textContent = "Hermes starts a race against the wind spirits.";
    p2.textContent = "You sprint faster than ever before.";
    p3.textContent = "You almost catch them.";

    hermesChallengeButton.style.display = "none";

    reviewButton.style.display = "block";

}



//  REVIEW CLUES 

function reviewClues(){

    p1.textContent = "You remember everything the gods told you.";
    p2.textContent = "";
    p3.textContent = "What message are they trying to tell you?";

    // loop through clues
    for(let i = 0; i < clues.length; i++){
        p2.textContent += clues[i] + " ";
    }

    finalTournamentButton.style.display = "block";

}



//  FINAL TOURNAMENT 

function finalTournament(){

    p1.textContent = "The final tournament begins.";
    p2.textContent = "Athletes chosen by the gods fill the arena.";
    p3.textContent = "Use the clues to figure out the gods message.";

    changeImage("stadium.jpg");

    answerInput.style.display = "block";
    submitAnswer.style.display = "block";

}



//  CHECK ANSWER 

function checkAnswer(){

    let answer = answerInput.value.toLowerCase();

    // ending 1 (perfect ending)
    if(answer === "teamwork"){

        p1.textContent = "You understood the message.";
        p2.textContent = "Strength, strategy, and speed all matter.";
        p3.textContent = "But the real secret is teamwork. You win the Gods Tournament.";

        changeImage("win.jpg");

        return;
    }

    // ending 2 (almost got it)
    if(answer === "strength"){

        p1.textContent = "You relied too much on power.";
        p2.textContent = "The gods shake their heads.";
        p3.textContent = "Strength alone is not enough.";

        changeImage("powerEnding.jpg");

        return;
    }

    // ending 3 (fail ending)
    else{

        p1.textContent = "The gods look disappointed.";
        p2.textContent = "You misunderstood their message.";
        p3.textContent = "You lose the tournament.";

        changeImage("lose.jpg");

    }

}



// EVENT LISTENERS

zeusButton.addEventListener("click", trainZeus);
athenaButton.addEventListener("click", trainAthena);
hermesButton.addEventListener("click", trainHermes);

zeusChallengeButton.addEventListener("click", zeusChallenge);
athenaChallengeButton.addEventListener("click", athenaChallenge);
hermesChallengeButton.addEventListener("click", hermesChallenge);

reviewButton.addEventListener("click", reviewClues);

finalTournamentButton.addEventListener("click", finalTournament);

submitAnswer.addEventListener("click", checkAnswer);


// keyboard shortcuts (extra listeners for rubric)

document.addEventListener("keydown", function(event){

    if(event.key === "z"){
        trainZeus();
    }

    if(event.key === "a"){
        trainAthena();
    }

    if(event.key === "h"){
        trainHermes();
    }

});


// secret message if you double click image 
image.addEventListener("dblclick", function(){

    p1.textContent = "The gods whisper: Nobody wins alone...";

});



// hide stuff at start

athenaButton.style.display = "none";
hermesButton.style.display = "none";

zeusChallengeButton.style.display = "none";
athenaChallengeButton.style.display = "none";
hermesChallengeButton.style.display = "none";

reviewButton.style.display = "none";
finalTournamentButton.style.display = "none";

answerInput.style.display = "none";
submitAnswer.style.display = "none";