function calculate() {

    let value1 = document.querySelector("#value 1").value;
    let value2 = document.querySelector("#value 2").value;
    let value3 = document.querySelector("#value 3").value;
    let value4 = document.querySelector("#value 4").value;
    let value5 = document.querySelector("#value 5").value;
    let value6 = document.querySelector("#value 6").value;
    let value7 = document.querySelector("#value 7").value;
    let value8 = document.querySelector("#value 8").value;
    let value9 = document.querySelector("#value 9").value;
    let value10 = document.querySelector("#value 10").value;

    let sum = value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10 ;
    let average = sum / 10 ;

    document.querySelector("#Average").innerHTML = `you have got ${average}`;
}