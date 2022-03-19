let second = document.querySelector('.s');
let minute = document.querySelector('.m');
let hour = document.querySelector('.h');
let showhour = document.querySelector('.hours');
let showMinute = document.querySelector('.minutes');




const tabItems = document.querySelectorAll('.tabsItem');
const tabContentItems = document.querySelectorAll('.tabsContentItem');
 
for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].addEventListener("click", function() {
         for (let j = 0; j < tabItems.length; j++) {
            tabItems[j].classList.remove("active");
            tabContentItems[j].classList.remove("active");
        }
        tabItems[i].classList.add("active")
        tabContentItems[i].classList.add("active")
    })
}

function clock() {
    const time = new Date();
    const seconds = time.getSeconds() * 6;
    const minutes = time.getMinutes() * 6;
    const hours = time.getHours() * 30;
     
    
    second.style = `transform: rotate(${seconds}deg)`
    minute.style = `transform: rotate(${minutes}deg)`
    hour.style = `transform: rotate(${hours}deg)`
    
    showhour.innerText = time.getHours() < 10 ? "0" + time.getHours() : time.getHours(); 
    showMinute.innerText = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    
    setTimeout(() => {
        clock();
    }, 1000);
}

clock();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const stopwatchBtn = document.querySelector('.stopwatch__btn');
const stopwatchBtnSeconds = document.querySelector('.stopwatch__seconds');
const stopwatchBtnMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchBtnHours = document.querySelector('.stopwatch__hours');
const stopwtachIndikator = document.querySelector('.tabsLink__span');

stopwatchBtn.addEventListener('click',  function (){
    if (this.innerText == 'START') {
        this.innerText = 'STOP'
        stopwtachIndikator.classList.add('active');
        let i = 0;
        stopwatch(this, i)
    }else if(this.innerText == "STOP"){
        this.innerText = 'CLEAR';
        stopwtachIndikator.classList.remove('active');
        stopwtachIndikator.classList.add('active_clear');
    }else if (this.innerText == 'CLEAR'){
        this.innerText = 'START';
        stopwtachIndikator.classList.remove('active_clear');
        stopwatchBtnSeconds.innerText = 0;
        stopwatchBtnMinutes.innerText = 0;
        stopwatchBtnHours.innerText = 0;
    }
    
})
function stopwatch(el, counter) {
    if (el.innerText == 'STOP') {
        
    if (counter == 59) {
        counter = 0;
        stopwatchBtnSeconds.innerText = counter;
        stopwatchBtnMinutes.innerText++;
        if (stopwatchBtnMinutes == 59) {
            stopwatchBtnMinutes.innerText = 0;
            stopwatchBtnHours.innerText++;
        }
    }else{
        counter++
        stopwatchBtnSeconds.innerText = counter;
    }
    setTimeout(() => {
        stopwatch(el, counter);
    }, 1000);    
}
    
    
}