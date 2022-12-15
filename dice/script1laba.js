let nameofuser = prompt("Enter name");
let names = document.getElementById("username");
names.textContent = nameofuser;

let firstpoint = document.getElementById("firstpoint");
let secondpoint = document.getElementById("secondpoint");

let case1 = document.getElementById("case1");
let case2 = document.getElementById("case2");
let user = document.getElementById("cub1");
let computer = document.getElementById("cub2");
let imgs = ["1.png", "2.png","3.png","4.png", "5.png", "6.png"];
let score1 = 0;
let score2 = 0;

function onClick(){
    case1.style.display = "inline";
    case2.style.display = "inline";
    let i = Math.floor(Math.random() * imgs.length);
    let j = Math.floor(Math.random() * imgs.length);

    setTimeout(function(){
        user.dataset.index = i;
        user.src = imgs[i];
        computer.dataset.index = j;
        computer.src = imgs[j];
    }, 500);

    setTimeout(function(){
        document.getElementById("case1").style.display = "none";
        document.getElementById("case2").style.display = "none";
        
            if(i>j){ 
                score1 = score1 + 1;
                firstpoint.textContent=String(score1);
                if(score1 === 3){
                    setTimeout(function(){score1 = 0;
                    score2 = 0;
                    firstpoint.textContent = "0";
                    secondpoint.textContent = "0";
                    alert("You won");},1000);
                }
            }
            else if(i<j){
                score2 = score2 + 1;
                secondpoint.textContent=String(score2);
                if(score2 === 3){
                    setTimeout(function(){score1 = 0;
                    score2 = 0;
                    firstpoint.textContent = "0";
                    secondpoint.textContent = "0";
                    alert("You lose");},1000);
                }
            }
        }, 1500);
}
