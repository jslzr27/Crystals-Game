// Create a function that fires up when the document is ready 

$(document).ready(function (){

    var randomNumber = 0
    var userScore = 0
    var redCrystal = 0
    var blueCrystal = 0
    var yellowCrystal = 0
    var greenCrystal = 0
    var wins = 0
    var losses = 0

    // Create a function that generates random numbers

    var gameStart = function() {
        redCrystal = Math.floor((Math.random() * 12) + 1);
        blueCrystal = Math.floor((Math.random() * 12) + 1);
        greenCrystal = Math.floor((Math.random() * 12) + 1);
        yellowCrystal = Math.floor((Math.random() * 12) + 1);

        randomNumber = Math.floor(Math.random() * ((120-19)+ 1) +19);
        $("#randomnumber").text(' ' + randomNumber);
        
        userScore = 0
        $("#yourscore").text(userScore);

        console.log(redCrystal, blueCrystal, greenCrystal, yellowCrystal, randomNumber);

    };

    gameStart();

    //Create functions so every time a user clicks a crystal it adds the score to the user score

    $("#redcrystal").click(function(){
        userScore = userScore + redCrystal;
        $("#yourscore").text(" " + userScore);    
        result();
    });    

    $("#bluecrystal").click(function(){
        userScore = userScore + blueCrystal;
        $("#yourscore").text(" " + userScore);    
        result();
    });  

    $("#yellowcrystal").click(function(){
        userScore = userScore + yellowCrystal;
        $("#yourscore").text(" " + userScore);    
        result();
    });  

    $("#greencrystal").click(function(){
        userScore = userScore + greenCrystal;
        $("#yourscore").text(" " + userScore);
        result();    
    });  

    // Create a function that determines wins and losses

    var result = function() {
        if(userScore > randomNumber){
            alert("YOU LOSE");
            losses = losses + 1
            $("#totlosses").text(' ' + losses);
            gameStart();
        }
        else if(userScore === randomNumber){
            alert("YOU WIN!!!")
            wins = wins + 1
            $("#totwins").text(' ' + wins);
            gameStart();
        }
    }
});