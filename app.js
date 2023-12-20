document.addEventListener('DOMContentLoaded',function(){

console.log('contentLoaded')
let busTag = document.getElementById('bus-tab');
let busTagP= busTag.parentElement;
let cargoTag = document.getElementById('cargo-tab');
let cargoTagP = cargoTag.parentElement;
let busHireTag =document.getElementById('bus-hire-tab')
let busHireTagP = busHireTag.parentElement;

let destination= document.getElementById('destination')
let startingPoint = document.getElementById('starting-point')
destination.addEventListener('input',()=>{
    destination.setAttribute('value',destination.value);
})
startingPoint.addEventListener('input',()=>{
    startingPoint.setAttribute('value',startingPoint);
})

function swapCityFunc(container){
        let fromCity = container.querySelector('.fromcity')
        let toCity = container.querySelector('.tocity')
        let temp =fromCity.value;
        fromCity.value = toCity.value;
        toCity.value =temp;
}



busTag.addEventListener('click',(e)=>{
    if(busTag.checked === true){
        busHireTag.checked = false;
        cargoTag.checked = false;
        busTag.previousElementSibling.classList.remove('fa-plus');
        busTag.previousElementSibling.classList.add('fa-minus');
        busTagP.nextElementSibling.classList.add('display');
        cargoTagP.nextElementSibling.classList.remove('display');
        busHireTagP.nextElementSibling.classList.remove('display');
        cargoTag.previousElementSibling.classList.remove('fa-minus');
        cargoTag.previousElementSibling.classList.add('fa-plus');
        busHireTag.previousElementSibling.classList.remove('fa-minus');
        busHireTag.previousElementSibling.classList.add('fa-plus');
    }

    let busTab = document.querySelector('.bus-tab');
    let swapCity = document.querySelector('.swap-city');
    console.log(swapCity)
    swapCity.addEventListener('click',()=>{
        console.log('inside')
        swapCityFunc(busTab);
    })
})
cargoTag.addEventListener('click',(e)=>{
    if(cargoTag.checked === true){
        busHireTag.checked=false;
        busTag.checked=false;
        cargoTag.previousElementSibling.classList.remove('fa-plus');
        cargoTag.previousElementSibling.classList.add('fa-minus');
        cargoTagP.nextElementSibling.classList.add('display');
        busTagP.nextElementSibling.classList.remove('display');
        busHireTagP.nextElementSibling.classList.remove('display');
        busTag.previousElementSibling.classList.remove('fa-minus');
        busTag.previousElementSibling.classList.add('fa-plus');
        busHireTag.previousElementSibling.classList.remove('fa-minus');
        busHireTag.previousElementSibling.classList.add('fa-plus');
    }
    let cargoTab = document.querySelector('.cargo-tab');
    let swapCity = cargoTab.querySelector('.swap-city');
    swapCity.addEventListener('click',(event)=>{
        event.stopPropagation();
        console.log('inside')
        swapCityFunc(cargoTab);
    })
})
busHireTag.addEventListener('click',(e)=>{
    if(busHireTag.checked === true){
        cargoTag.checked=false;
        busTag.checked=false;
        busHireTag.previousElementSibling.classList.remove('fa-plus');
        busHireTag.previousElementSibling.classList.add('fa-minus');
        busHireTagP.nextElementSibling.classList.add('display');
        busTagP.nextElementSibling.classList.remove('display');
        cargoTagP.nextElementSibling.classList.remove('display');
        busTag.previousElementSibling.classList.remove('fa-minus');
        busTag.previousElementSibling.classList.add('fa-plus');
        cargoTag.previousElementSibling.classList.remove('fa-minus');
        cargoTag.previousElementSibling.classList.add('fa-plus');

    }
    let busHireTab = document.querySelector('.bus-hire-tab');
    console.log(busHireTab)
    let swapCity = busHireTab.querySelector('.swap-city');
    console.log(swapCity)
    swapCity.addEventListener('click',()=>{
        console.log('in')
        swapCityFunc(busHireTab);
    })
})

});