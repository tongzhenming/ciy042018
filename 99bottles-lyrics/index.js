const TotalNoBottles = 100;
var screenprint;
var NoOfBottles = TotalNoBottles;

screenprint = "Hello World !<br>" 

    while(NoOfBottles>0){
        NoOfBottles--;
        
        if(NoOfBottles > 1){
            var newlyrics = `${NoOfBottles} bottles of beer on the wall, ${NoOfBottles} bottles of beer. Take one down and pass it around, ${NoOfBottles} bottles of beer on the wall.<br>`;
            screenprint = screenprint + newlyrics;
        }

        else if(NoOfBottles > 0){
            var newlyrics = `${NoOfBottles} bottle of beer on the wall, ${NoOfBottles} bottle of beer. Take one down and pass it around, no more bottle of beer on the wall <br>`;
            screenprint = screenprint + newlyrics;
        }

        else{
            screenprint = screenprint + "No more bottle of beer on the wall, no more bottle of beer. Go to the store and buy some more, "+ (TotalNoBottles-1)+" bottle of beer on the wall.";
        }
    }
document.getElementById('mylyrics') .innerHTML = screenprint;
