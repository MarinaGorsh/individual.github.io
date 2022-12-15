let nameofuser = prompt("Enter name");
let names = document.getElementById("username");
names.textContent = nameofuser;

let firstpoint = document.getElementById("firstpoint");
let secondpoint = document.getElementById("secondpoint");

let case1 = document.getElementById("case1");
let case2 = document.getElementById("case2");
let user = document.getElementById("cub1");
let three = document.getElementById("three");
let computer = document.getElementById("cub2");
let kards = ["6 черва.png","6 бубна.png","6 пика.png","6 трефа.png","7 черва.png","7 бубна.png","7 пика.png", "7 трефа.png","8 черва.png","8 бубна.png", "8 пика.png","8 трефа.png","9 черва.png","9 бубна.png", "9 пика.png","9 трефа.png", "10 черва.png","10 бубна.png", "10 пика.png","10 трефа.png", "валет черва.png","валет бубна.png", "валет пика.png","валет трефа.png", "дама черва.png","дама бубна.png","дама пика.png","дама трефа.png","король черва.png","король бубна.png","король пика.png", "король трефа.png","туз черва.png","туз бубна.png", "туз пика.png","туз трефа.png"];

let score1 = 0;
let score2 = 0;
let thr = 0;

function onClick(){
    thr++;
    three.textContent=String(thr);
    case1.style.display = "inline";
    case2.style.display = "inline";
    let i = Math.floor(Math.random() * kards.length);
    let j = Math.floor(Math.random() * kards.length);

    setTimeout(function(){
        user.dataset.index = i;
        user.src = kards[i];
        computer.dataset.index = j;
        computer.src = kards[j];
    }, 500);
    

    setTimeout(function(){
        document.getElementById("case1").style.display = "none";
        document.getElementById("case2").style.display = "none";

        //По іншому воно не працювало, якщо я намагалася зробити (   ||   ||   ||   ), воно не процювало
        // тому так, хоч його і багато, але воно працює
        if(user.dataset.index == 0){
            score1 = score1 + 6;
        }
        else if(user.dataset.index == 1){
            score1 = score1 + 6;
        }
        else if(user.dataset.index == 2){
            score1 = score1 + 6;
        }
        else if(user.dataset.index == 3){
            score1 = score1 + 6;
        }
        else if(user.dataset.index == 4){
            score1 = score1 + 7;
        }
        else if(user.dataset.index == 5){
            score1 = score1 + 7;
        }
        else if(user.dataset.index == 6){
            score1 = score1 + 7;
        }
        else if(user.dataset.index == 7){
            score1 = score1 + 7;
        }
        else if(user.dataset.index == 8){
            score1 = score1 + 8;
        }
        else if(user.dataset.index == 9){
            score1 = score1 + 8;
        }
        else if(user.dataset.index == 10){
            score1 = score1 + 8;
        }
        else if(user.dataset.index == 11){
            score1 = score1 + 8;
        }
        else if(user.dataset.index == 12){
            score1 = score1 + 9;
        }
        else if(user.dataset.index == 13){
            score1 = score1 + 9;
        }
        else if(user.dataset.index == 14){
            score1 = score1 + 9;
        }
        else if(user.dataset.index == 15){
            score1 = score1 + 9;
        }
        else if(user.dataset.index == 16){
            score1 = score1 + 10;
        }
        else if(user.dataset.index == 17){
            score1 = score1 + 10;
        }
        else if(user.dataset.index == 18){
            score1 = score1 + 10;
        }
        else if(user.dataset.index == 19){
            score1 = score1 + 10;
        }
        else if(user.dataset.index == 20){
            score1 = score1 + 2;
        }
        else if(user.dataset.index == 21){
            score1 = score1 + 2;
        }
        else if(user.dataset.index == 22){
            score1 = score1 + 2;
        }
        else if(user.dataset.index == 23){
            score1 = score1 + 2;
        }
        else if(user.dataset.index == 24){
            score1 = score1 + 3;
        }
        else if(user.dataset.index == 25){
            score1 = score1 + 3;
        }
        else if(user.dataset.index == 26){
            score1 = score1 + 3;
        }
        else if(user.dataset.index == 27){
            score1 = score1 + 3;
        }
        else if(user.dataset.index == 28){
            score1 = score1 + 4;
        }
        else if(user.dataset.index == 29){
            score1 = score1 + 4;
        }
        else if(user.dataset.index == 30){
            score1 = score1 + 4;
        }
        else if(user.dataset.index == 31){
            score1 = score1 + 4;
        }
        else if(user.dataset.index == 32){
            score1 = score1 + 11;
        }
        else if(user.dataset.index == 33){
            score1 = score1 + 11;
        }
        else if(user.dataset.index == 34){
            score1 = score1 + 11;
        }
        else if(user.dataset.index == 35){
            score1 = score1 + 11;
        }
        //його навіть не багато, а дуже багато...
        if(computer.dataset.index == 0){
            score2 = score2 + 6;
        }
        else if(computer.dataset.index == 1){
            score2 = score2 + 6;
        }
        else if(computer.dataset.index == 2){
            score2 = score2 + 6;
        }
        else if(computer.dataset.index == 3){
            score2 = score2 + 6;
        }
        else if(computer.dataset.index == 4){
            score2 = score2 + 7;
        }
        else if(computer.dataset.index == 5){
            score2 = score2 + 7;
        }
        else if(computer.dataset.index == 6){
            score2 = score2 + 7;
        }
        else if(computer.dataset.index == 7){
            score2 = score2 + 7;
        }
        else if(computer.dataset.index == 8){
            score2 = score2 + 8;
        }
        else if(computer.dataset.index == 9){
            score2 = score2 + 8;
        }
        else if(computer.dataset.index == 10){
            score2 = score2 + 8;
        }
        else if(computer.dataset.index == 11){
            score2 = score2 + 8;
        }
        else if(computer.dataset.index == 12){
            score2 = score2 + 9;
        }
        else if(computer.dataset.index == 13){
            score2 = score2 + 9;
        }
        else if(computer.dataset.index == 14){
            score2 = score2 + 9;
        }
        else if(computer.dataset.index == 15){
            score2 = score2 + 9;
        }
        else if(computer.dataset.index == 16){
            score2 = score2 + 10;
        }
        else if(computer.dataset.index == 17){
            score2 = score2 + 10;
        }
        else if(computer.dataset.index == 18){
            score2 = score2 + 10;
        }
        else if(computer.dataset.index == 19){
            score2 = score2 + 10;
        }
        else if(computer.dataset.index == 20){
            score2 = score2 + 2;
        }
        else if(computer.dataset.index == 21){
            score2 = score2 + 2;
        }
        else if(computer.dataset.index == 22){
            score2 = score2 + 2;
        }
        else if(computer.dataset.index == 23){
            score2 = score2 + 2;
        }
        else if(computer.dataset.index == 24){
            score2 = score2 + 3;
        }
        else if(computer.dataset.index == 25){
            score2 = score2 + 3;
        }
        else if(computer.dataset.index == 26){
            score2 = score2 + 3;
        }
        else if(computer.dataset.index == 27){
            score2 = score2 + 3;
        }
        else if(computer.dataset.index == 28){
            score2 = score2 + 4;
        }
        else if(computer.dataset.index == 29){
            score2 = score2 + 4;
        }
        else if(computer.dataset.index == 30){
            score2 = score2 + 4;
        }
        else if(computer.dataset.index == 31){
            score2 = score2 + 4;
        }
        else if(computer.dataset.index == 32){
            score2 = score2 + 11;
        }
        else if(computer.dataset.index == 33){
            score2 = score2 + 11;
        }
        else if(computer.dataset.index == 34){
            score2 = score2 + 11;
        }
        else if(computer.dataset.index == 35){
            score2 = score2 + 11;
        }
        firstpoint.textContent=String(score1);
        secondpoint.textContent=String(score2);

        if(thr == 3){
            thr = 0;
            if(score1 > score2){
                setTimeout(function(){
                    score1 = 0;
                    score2 = 0;
                    firstpoint.textContent = "0";
                    secondpoint.textContent = "0";
                    alert("You won");},1000);
            }
            else if(score1 < score2){
                setTimeout(function(){
                    score1 = 0;
                    score2 = 0;
                    firstpoint.textContent = "0";
                    secondpoint.textContent = "0";
                    alert("You lose");},1000);
            }
            else if(score1 = score2){
                setTimeout(function(){
                    score1 = 0;
                    score2 = 0;
                    firstpoint.textContent = "0";
                    secondpoint.textContent = "0";
                    alert("Dead heat");},1000);
            }
        }
    }, 1500);
}
