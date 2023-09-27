
// functions
function getdateall() {
    const date = new Date();
    return date;
}

function getLocalTime() {
    const localTime = getdateall().toLocaleTimeString()
    const box = document.getElementById('clock_time')
    box.innerText = localTime;
    return localTime;
}

function getUniversalTime() {
    const UniversalTime = getdateall().toTimeString();
    // console.log(UniversalTime)
    document.querySelector('#clock_time').innerText = UniversalTime;
    return UniversalTime;
}

function getUsTime(){
    const ustime = getdateall().toLocaleString('en-US',{ timeZone:"America/New_York" })
    document.querySelector('#clock_time').innerText = ustime;
    // console.log(ustime);
}

function getDate() {
    const date = getdateall().toDateString()
    document.querySelector('#clock_date').innerText = date;
    return date;
}

// function execution
getDate();
getLocalTime();

//set intervel
setInterval(() => {
   
//change time type in box
const select = document.querySelector('#time_types').value
    switch (select) {
        case "localTime":

            getLocalTime()
            // console.log("local print")
            break;
        case "universalTime":
            getUniversalTime()
            // console.log("universal print")

            break;
        case "us-time":
            // console.log("us print")
            getUsTime();
            
            break;
        default:
            break;
    }
}, 1000);



