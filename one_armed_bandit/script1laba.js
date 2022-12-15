let nameofuser = prompt("Enter name");
let names = document.getElementById("username");
names.textContent = nameofuser;

let case1 = document.getElementById("case1");
let case2 = document.getElementById("case2");
let case3 = document.getElementById("case3");
let case4 = document.getElementById("case4");
let case5 = document.getElementById("case5");
let case6 = document.getElementById("case6");
let case7 = document.getElementById("case7");
let case8 = document.getElementById("case8");
let case9 = document.getElementById("case9");

let three = document.getElementById("three");
let aut = ["кристалл.png","вишня.png","сердце.png","лимон.png","подкова.png","7.png"];
let thr = 0;

function onClick(){
    let a = Math.floor(Math.random() * aut.length);
    let b = Math.floor(Math.random() * aut.length);
    let c = Math.floor(Math.random() * aut.length);

    let d = Math.floor(Math.random() * aut.length);
    let e = Math.floor(Math.random() * aut.length);
    let f = Math.floor(Math.random() * aut.length);

    let g = Math.floor(Math.random() * aut.length);
    let h = Math.floor(Math.random() * aut.length);
    let i = Math.floor(Math.random() * aut.length);
    setTimeout(function(){
        case1.dataset.index = a;
        case1.src = aut[a];
        case2.dataset.index = b;
        case2.src = aut[b];
        case3.dataset.index = c;
        case3.src = aut[c];
        case4.dataset.index = d;
        case4.src = aut[d];
        case5.dataset.index = e;
        case5.src = aut[e];
        case6.dataset.index = f;
        case6.src = aut[f];
        case7.dataset.index = g;
        case7.src = aut[g];
        case8.dataset.index = h;
        case8.src = aut[h];
        case9.dataset.index = i;
        case9.src = aut[i];
    }, 500);

    thr++;
    
    if(case4.dataset.index == 5 && (case5.dataset.index == 5) && (case6.dataset.index == 5)){
        alert("You won!!!!!!!!!!");
        setTimeout(function(){thr = 0;},1000);
    }
    else if(case4.dataset.index == 0 && (case5.dataset.index == 0) && (case6.dataset.index == 0)){
        alert("You won");
        setTimeout(function(){thr = 0;},1000);
    }
    else if(case4.dataset.index == 1 && (case5.dataset.index == 1) && (case6.dataset.index == 1)){
        alert("You won");
        setTimeout(function(){thr = 0;},1000);
    }
    else if(case4.dataset.index == 2 && (case5.dataset.index == 2) && (case6.dataset.index == 2)){
        alert("You won");
        setTimeout(function(){thr = 0;},1000);
    }
    else if(case4.dataset.index == 3 && (case5.dataset.index == 3) && (case6.dataset.index == 3)){
        alert("You won");
        setTimeout(function(){thr = 0;},1000);
    }
    else if(case4.dataset.index == 4 && (case5.dataset.index == 4) && (case6.dataset.index == 4)){
        alert("You won");
        setTimeout(function(){thr = 0;},1000);
    }else{
        if(thr == 3){
            setTimeout(function(){
                thr = 0;
                alert("You lose");}, 1000);
        }
    }
    three.textContent=String(thr);
}
