function myFunction(){
    function deterNum(){
    return Math.floor((Math.random() * 2) + 1);
    }
    
    var result = deterNum();

    switch(result){
    case 1:
        text = "Heads";
        break;
    case 2:
        text = "Tails"
        break;;
    }

    document.getElementById("coin").innerHTML = text;
}
