const euTimeButton = document.getElementById('eu-time');
const usTimeButton = document.getElementById('us-time');
euTimeButton.addEventListener('click', () => {
    euTimeButton.classList.add('active');
    usTimeButton.classList.remove('active');
});

usTimeButton.addEventListener('click', () => {
    euTimeButton.classList.remove('active');
    usTimeButton.classList.add('active');
});

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

function checkDay() {
    let date = new Date();
    let today = date.getDay();
    let daySmall = document.getElementById('day-small');

    const sun = document.getElementById('sunday');
    const mon = document.getElementById('monday');
    const tue = document.getElementById('tuesday');
    const thu = document.getElementById('thursday');
    const wed = document.getElementById('wednesday');
    const fri = document.getElementById('friday');
    const sat = document.getElementById('saturday');
    
    if(today === 0) {
        sun.classList.add('active');
        daySmall.textContent = 'sunday';
    }else if (today === 1){
        mon.classList.add('active');
        daySmall.textContent = 'monday';
    }else if (today === 2){
        tue.classList.add('active');
        daySmall.textContent = 'tuesday';
    }else if (today === 3){
        wed.classList.add('active');
        daySmall.textContent = 'wednesday';
    }else if (today === 4){
        thu.classList.add('active');
        daySmall.textContent = 'thursday';
    }else if (today === 5){
        fri.classList.add('active');
        daySmall.textContent = 'friday';
    }else if (today === 6){
        sat.classList.add('active');
        daySmall.textContent = 'saturday';
    }
}
checkDay();

function startTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    let time = document.getElementById('time');

    if(euTimeButton.classList.contains('active')){
        time.innerHTML = `
        <h1 class="hours active">${h}:${m}:${s}</h1>
        `;
    }else{
        let suffix = h >= 12 ? "PM":"AM";
        let hours = ((h + 11) % 12 + 1);
        time.innerHTML = `
        <h1 class="hours active">${hours}:${m}:${s} ${suffix}</h1>
        `;
    }

    t = setTimeout(function() {
      startTime()
    }, 500);
}

startTime();



