function Click(){
    document.getElementById("hands").style.display = "inline";
    setTimeout(function(){document.getElementById("word").value = "";}, 5000);
    var question = ["ні","так","ні в якому разі","так, звісно","можливо", "тільки у твоїх мріях","хто сказав?","і не надійся","Пхах, ти реально так вважаєш?","Стовідсотково","будь впевнен(ий/а)","Цілком ймовірно", "50/50","..."];
    var rand = Math.floor(Math.random() * question.length);
    var word = question[rand];
    setTimeout(function(){
    document.getElementById("text").style.display = "inline";
    document.getElementById("text").innerHTML = word;}, 5000);
}
function Click1(){
    document.getElementById("hands").style.display = "none";
    document.getElementById("text").style.display = "none";
}
