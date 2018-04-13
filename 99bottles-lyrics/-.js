var v = 99;

var x =  `<br> ${v} bottles of beer on the wall, ${v} bottles of beer. <br>`;

for(i=v-1;i>=0;i--){
    
    if (i==0){
        var j = "no more";
    }else{
        j=i
    }
    
    var s = "s"
    
    if(i==1){s = ""}

    x += `Take one down and pass it around, ${j} bottle${s} of beer on the wall.<br><br> ${j} bottle${s} on the wall, ${j} bottle${s} of beer.<br>`;

}

x +=  `Go to the store and buy some more, ${v} bottles of beer on the wall.<br>`

document.getElementById('mylyrics').innerHTML = x;