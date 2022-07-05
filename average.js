function calculate() {

    let value1 = document.querySelector("#value1").value;
    let value2 = document.querySelector("#value2").value;
    let value3 = document.querySelector("#value3").value;
    let value4 = document.querySelector("#value4").value;
    let value5 = document.querySelector("#value5").value;
    let value6 = document.querySelector("#value6").value;
    let value7 = document.querySelector("#value7").value;
    let value8 = document.querySelector("#value8").value;
    let value9 = document.querySelector("#value9").value;
    let value10 = document.querySelector("#value10").value;

    value1 = Number(value1)
    value2 = Number(value2)
    value3 = Number(value3)
    value4 = Number(value4)
    value5 = Number(value5)
    value6 = Number(value6)
    value7 = Number(value7)
    value8 = Number(value8)
    value9 = Number(value9)
    value10 = Number(value10)

    let sum = value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10 ;
    let average = sum / 10 ;

    document.querySelector("#Average").innerHTML = `you have got ${average}`;
}