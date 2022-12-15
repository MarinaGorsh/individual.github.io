let test = document.getElementById("test");
let word = document.getElementById("word");
let points = document.getElementById("points");
let summ = document.getElementById("summ");



let point = 0;
let sum = 0;

let kardeasy = ["вовк", "кінь", "риба", "яблуко", "банан", "вісім", "мило", "ручка", "п'ятниця", "школа"];
let kardmedium = ["ложка", "вилка", "ніж", "тінь", "мізг", "кричати", "чих", "журнал", "картинка", "качкодзьоб"];
let kardhard = ["олень", "ластівка", "качкодзьоб", "видра", "діючий", "зміст", "загадка", "зручний", "успіх", "турбувати"];

let anseasy = ["wolf", "horse", "fish", "apple", "banana", "eight", "soap", "pen", "friday", "school"];
let ansmedium = ["spoon", "fork", "knife", "shadow", "brain", "shout", "sneeze", "magazine", "image", "platypus"];
let anshard = ["deer", "swallow", "platypus", "otter", "acting", "content", "riddle", "comfortable", "success", "disturb"];



$("#hard").click(function(){
    point = 0;
    $("#ent").click(function(){
        if(anshard.includes(word.value) === true){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    summ.textContent = String(sum);
    points.textContent = String(point); 
});
    $("#nex").click(function(){
        let rand = Math.floor(Math.random() * kardhard.length);
        let randword = kardhard[rand];
        test.innerHTML = randword;
             
        $("#right").css("display", "none");
        $("#wrong").css("display", "none");
        sum++;
        
       if(sum == 10){
            if(point<3){
        alert("You don`t know english")
            }
            else if(point>3&&point<6){
        alert("You have an average level of English")
            }
            else if(point>6){
        alert("You have a high level of English")
            }  
            point = 0;
            sum = 0;
            test.innerHTML = "English test";
        }
        points.textContent = String(point);
        summ.textContent = String(sum);
        word.value = "";
    });
});

$("#medium").click(function(){
    point = 0;
    $("#ent").click(function(){ 
        if(ansmedium.includes(word.value) === true){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    summ.textContent = String(sum);
    points.textContent = String(point); 
});
    $("#nex").click(function(){
        let rand = Math.floor(Math.random() * kardmedium.length);
        let randword = kardmedium[rand];
        test.innerHTML = randword;

        $("#right").css("display", "none");
        $("#wrong").css("display", "none");
        sum++;
        
       if(sum == 10){
            if(point<3){
        alert("You don`t know english")
            }
            else if(point>3&&point<6){
        alert("You have an average level of English")
            }
            else if(point>6){
        alert("You have a high level of English")
            }  
            point = 0;
            sum = 0;
        }
        points.textContent = String(point);
        summ.textContent = String(sum);
        word.value = "";
    });
});

$("#easy").click(function(){
    point = 0;
    $("#ent").click(function(){
        if(anseasy.includes(word.value) === true){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    summ.textContent = String(sum);
    points.textContent = String(point); 
});
    $("#nex").click(function(){
        let rand = Math.floor(Math.random() * kardeasy.length);
        let randword = kardeasy[rand];
        test.innerHTML = randword;
        $("#right").css("display", "none");
        $("#wrong").css("display", "none");
        sum++;
        
       if(sum == 10){
            if(point<3){
        alert("You don`t know english")
            }
            else if(point>3&&point<6){
        alert("You have an average level of English")
            }
            else if(point>6){
        alert("You have a high level of English")
            }  
            point = 0;
            sum = 0;
        }
        points.textContent = String(point);
        summ.textContent = String(sum);
        word.value = "";
    });
});



