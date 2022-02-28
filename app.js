var alfaElem = document.getElementById("alfa");
var oldalElem = document.getElementById("oldal");
var szamitgombElem = document.getElementById("szamitgomb");
var sugarElem = document.getElementById("sugar");

szamitgombElem.addEventListener("click", function(){
    var alfa = Number(alfaElem.value);
    var oldal= Number(oldalElem.value);
    var sugar =  (1/2) * oldal * Math.sin(alfa);
    console.log(typeof sugar);
    sugarElem.value = (sugar.toFixed(2));

});