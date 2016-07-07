$(document).ready(function(){
    function RandomizeMultiplier(){
        var initRand1 = String(Math.floor(Math.random()*3));
        var initRand2 = String(Math.floor(Math.random()*10));
        $("#mult1").html(initRand1);
        $("#mult2").html(initRand2);
        return Number(initRand1)*Number(initRand2);
    }
    var answer = RandomizeMultiplier();
    var counter = 0;
    $("#respond").click(answerResponse);
    $(document).keydown(function(event) {
        if(event.which == 13)
            {
                answerResponse();
            }
    });
    function answerResponse() {
        if (answer == $("#answer").val())
           {
               counter++;
               $("h1").html("Correct! You have answered " + String(counter) + " questions in a row");
               answer = RandomizeMultiplier();
           }
        else
            {
                counter=0;
                $("h1").html("Bad luck! Try again!");
            }
    }
});
