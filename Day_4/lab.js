// var x = 0;
// var y = 0;
var z = 0;
    
function sum() {
    var x = Number(document.querySelector('#no1').value);
    var y = Number(document.querySelector('#no2').value);

     z = x + y;
}

    //document.querySelector('#wer').innerHTML = z;
     



function sub() {
    x =Number(document.querySelector('#no1').value);
    y = Number(document.querySelector('#no2').value);

   z = x - y;

   //document.querySelector('#no3').innerHTML = z;

}

function mul() {
    x =Number(document.querySelector('#no1').value);
    y = Number(document.querySelector('#no2').value);

   z = x * y;

  // document.querySelector('#no3').innerHTML = z;

}

function div() {
    x =Number(document.querySelector('#no1').value);
    y = Number(document.querySelector('#no2').value);

   z = x / y;

  // document.querySelector('#no3').innerHTML = z;

}

function cal() {
    
    document.querySelector("#no3").value = z; 

}
