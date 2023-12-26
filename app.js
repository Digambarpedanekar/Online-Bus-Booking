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

    let busTab = document.querySelector('.bus-tab');
    let swapCity = document.querySelector('.swap-city');
    swapCity.addEventListener('click',()=>{
        swapCityFunc(busTab);

    })

    flatpickr('.date-input',{
        defaultDate:'today',
        dateFormat: "l ,d-m-Y",
        minDate: 'today',
        onChange: function(selectedDates,dateStr, instance){
            instance.set('dateFormat','l,d-m-Y');
        }
    });



    function swapCityFunc(container){
        let fromCity = container.querySelector('.fromcity')
        let toCity = container.querySelector('.tocity')
        let temp =fromCity.value;
        fromCity.value = toCity.value;
        toCity.value = temp;
        console.log(temp)
        console.log('swap')
    }
    function closeTab(tag,tagP){
        tag.previousElementSibling.classList.remove('fa-minus');
        tag.previousElementSibling.classList.add('fa-plus');
        tagP.nextElementSibling.classList.add('hide');
        tag.checked =false;
    }
    function openTab(tag,tagP){
        tag.previousElementSibling.classList.remove('fa-plus');
        tag.previousElementSibling.classList.add('fa-minus');
        tagP.nextElementSibling.classList.remove('hide');
    }



    busTag.addEventListener('click',(e)=>{
        if(busTag.checked === true){
            openTab(busTag,busTagP);
            closeTab(busHireTag,busHireTagP);
            closeTab(cargoTag,cargoTagP);
        }

    })
    cargoTag.addEventListener('click',(e)=>{
        if(cargoTag.checked === true){
            openTab( cargoTag,cargoTagP);
            closeTab(busHireTag,busHireTagP);
            closeTab(busTag,busTagP);
        }
        let cargoTab = document.querySelector('.cargo-tab');
        let swapCity = cargoTab.querySelector('.swap-city');
        swapCity.addEventListener('click',(event)=>{
            event.stopPropagation();
            swapCityFunc(cargoTab);
        })
    })
    busHireTag.addEventListener('click',(e)=>{
        if(busHireTag.checked === true){
            openTab(  busHireTag,busHireTagP);
            closeTab(cargoTag,cargoTagP);
            closeTab(busTag,busTagP);
        }
        let busHireTab = document.querySelector('.bus-hire-tab');
        let swapCity = busHireTab.querySelector('.swap-city');
        swapCity.addEventListener('click',()=>{
            swapCityFunc(busHireTab);
        })
    })
    
    let userDropDown =document.querySelector('.user');
    userDropDown.addEventListener('click',(e)=>{
        userDropDown.lastElementChild.classList.remove('hide');
        e.stopPropagation(); //this is used to stop propogation of click event
        document.addEventListener('click',(event)=>{
            if(event.target != userDropDown.lastElementChild){
                console.log(event.target)
                userDropDown.lastElementChild.classList.add('hide');
            }
        })
        
        userDropDown.lastElementChild.addEventListener('click',(e)=>{
            let openLoginSection = document.getElementById('open-login-section')
            if(e.target === openLoginSection.firstChild ){
                document.getElementById('login-section').classList.remove('hide');
                userDropDown.lastElementChild.classList.add('hide');
                document.getElementsByClassName('navbar')[0].classList.add('disabled-events');
                document.querySelector('.search-outer-box').classList.add('disabled-events');
                console.log('change')
            }
        })
        
    })
    let close = document.querySelector('.close')
    close.addEventListener('click',(e)=>{
        document.getElementsByClassName('navbar')[0].classList.remove('disabled-events');
        document.querySelector('.search-outer-box').classList.remove('disabled-events');
        document.getElementById('login-section').classList.add('hide');
    })

    loginBtn=document.querySelector('.login-btn');
    console.log(loginBtn);
    async ()=>{
        loginBtn.addEventListener('click',()=>{
            let mobileNo = document.getElementById('mobile-no');
            const response =fetch('/send_otp',{
                method: 'POST',
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({mobileNo})
            });
            const result = response.JSON();
            console.log(result);
        })
    
    }
});
