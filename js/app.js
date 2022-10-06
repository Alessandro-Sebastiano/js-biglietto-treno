let distance = prompt('Quanti chilometri dovrai percorrere?');

let age = prompt('Quanti anni hai?');

const costForKm = 0.21;

//console.log(distance, age);

let userAge = document.getElementById('user-age');
let userDistance = document.getElementById('user-distance');
let userCost = document.getElementById('user-cost');


let cost = distance * costForKm;


//console.log(cost);



if (age < 18) {

    cost = cost - ((cost / 100) * 20);

    //console.log(cost);

} else if (age > 65) {

    cost = cost - ((cost / 100) * 40);

    //console.log(cost);

} else {
    alert('Non hai diritto allo sconto');

}

let howMuch = cost;


userAge.innerHTML = age;

userDistance.innerHTML = distance;

userCost.innerHTML = howMuch.toFixed(2);

