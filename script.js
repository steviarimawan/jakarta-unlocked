function recommendTour(){

    let choice = document.getElementById("interest").value;
    let result = "";

    if(choice == "food"){
        result = "🍜 We recommend the Jakarta Street Food Tour!";
    }
    else if(choice == "history"){
        result = "🏛 We recommend the Heritage Walking Tour!";
    }
    else if(choice == "night"){
        result = "🌃 We recommend the Jakarta Night Experience!";
    }
    else if(choice == "coffee"){
        result = "☕ We recommend the Creative Jakarta Tour!";
    }
    else{
        result = "Please choose an option first.";
    }

    document.getElementById("result").innerHTML = result;

}