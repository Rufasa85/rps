//collect and store user input
// possible choices include R, P, or S,
var choicesArr = ["r", "p", "s"];
var keepPlaying = true;
//track wins, losses and ties
var wins = 0;
var losses = 0;
var ties = 0;

while (keepPlaying) {
  // EDGE CASE: what happens if they use a lowercase lette
  //use popup window to allow user to pick R,P, or S
  //store result in a variable called userChoice
  var userChoice = prompt("make your choice: r,p, or s").toLowerCase();
  //TODO: EDGE CASE: what happens if the user picks another letter?
  while (!choicesArr.includes(userChoice)) {
    alert("invalid entry, please select r,p, or s");
    userChoice = prompt("make your choice: r,p, or s").toLowerCase();
  }
  //randomly select computer choice, store in variable
  //store in variable called compChoice
  var randomIdx = Math.floor(Math.random() * choicesArr.length);
  var compChoice = choicesArr[randomIdx];

  alert("your opponent selected " + compChoice);

  // compare user and computer choice
  // display results of game
  //  if user = rock and comp = rock or user = scissors and comp = scissors or user = paper and comp = paper, tie
  if (userChoice === compChoice) {
    ties++;
    alert("tied!");
    //  if user = rock and comp = scissors or user = scissors and comp = paper or user = paper and comp = rock, user wins
  } else if (
    (userChoice === "r" && compChoice === "s") ||
    (userChoice === "s" && compChoice === "p") ||
    (userChoice === "p" && compChoice === "r")
  ) {
    wins++;
    alert("win");
    //  if user = rock and comp = paper or user = scissors and comp = roce or user = paper and comp = scissors, comp wins
  } else {
    losses++;
    alert("loss");
  }
  //display stats
  // display all three in one screen
  //   alert("wins: " + wins + "\nlosses: " + losses + "\nties: " +ties)
  alert(`wins: ${wins}
  losses: ${losses}
  ties: ${ties}`);
  // ask user if they want to play again
  //if they say yes, restart whole game
  //if they say no, stop doing anything
  keepPlaying = confirm("Do you want to keep playing?");
}
