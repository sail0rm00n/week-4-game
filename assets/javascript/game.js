$(document).ready(function(){
    var random = Math.floor(Math.random()*101+19)
    
    $("#randomNumber").text(random);
    
    var num1 = Math.floor(Math.random()*11+1)
    var num2 = Math.floor(Math.random()*11+1)
    var num3 = Math.floor(Math.random()*11+1)
    var num4 = Math.floor(Math.random()*11+1)

    //Declares variables for wins/losses
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random()*101+19);
        console.log(random);
        $("#randomNumber").text(random);
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
        }

    function win() {
        alert("You win!");
        wins++;
        $("#numberWins").text(wins);
        reset();
        }
        
    function loss() {
        alert("You lose...");
        losses++;
        $("#numberLosses").text(losses);
        reset();
        }

    $("#one").on ("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal); 
            if (userTotal == random){
            win();
            }
            else if (userTotal > random){
            loss();
            }   
        })  
    
    $("#two").on ("click", function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal); 
            if (userTotal == random){
            win();
            }
            else if (userTotal > random){
            loss();
            } 
        })  
        
        $("#three").on ("click", function(){
            userTotal = userTotal + num3;
            console.log("New userTotal= " + userTotal);
            $("#finalTotal").text(userTotal);
                if (userTotal == random){
                win();
                }
                else if (userTotal > random){
                loss();
                } 
        })  
        
        $("#four").on ("click", function(){
            userTotal = userTotal + num4;
            console.log("New userTotal = " + userTotal);
            $("#finalTotal").text(userTotal); 
                if (userTotal == random){
                win();
                }
                else if (userTotal > random){
                loss();
            }
        });   
});