let a_hour = window.prompt("Enter alarm time: ");
let a_minute = window.prompt("Enter Minutes: ");
let a_second = window.prompt("Enter seconds: ");

document.querySelector(".alarm").innerHTML = a_hour;


function current_date(){
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes;
    let seconds = d.getSeconds();

    if(hours>a_hour){
        setInterval(nextDay,1000);
    }
    else if(hours<a_hour){
       
            console.log(`Alarm has been set to ${a_hour-hours} time from now`);
    }
    else{
        console.log(`Alarm set to now`);
    }
    
};


