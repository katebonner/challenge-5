// COLLECT THE CURRENT TIME EVERY SECOND
function getTheDate() {
    var currentdate = new Date(); 
    var datetime = {
        year: currentdate.getFullYear(),
        month: (currentdate.getMonth()+1),
        day: currentdate.getDate(),
        hour: currentdate.getHours(),
        minute: currentdate.getMinutes(),
        second: currentdate.getSeconds()
    }
    return datetime
}

// GENERATE THE CLOCK
function clock() {
    var date = $(".date");
    setInterval( function() {
        var datetime = getTheDate();
        var clockString = datetime.day + "/"
                        + datetime.month + "/"
                        + datetime.year + " @ "
                        + datetime.hour + ":"
                        + datetime.minute + ":"
                        + datetime.second;
        date.text(clockString);
    }, 1000
    )
}
clock();

// CHECK IF THE CURRENT TIME BLOCK IS IN THE PAST, PRESENT OR FUTURE
var timeCheck = getTheDate();

// DYNAMICALLY BUILD HTML
for (i = 9 ; i < 18 ; i++){
    var block = "<div class='row'><div class='hour col-md-2 col-4'>" + i +":00</div><input class='time-block col-md-9 col-6' id='" + i + "'></input><button class='saveBtn col-md-1 col-2'><img type='image' src='icons/save.png' alt='save-icon' class='icon'></button>";
    $(".container").append(block);
}

// IF PAST HOUR MAKE COLOR LIGHTER
for (i = 9 ; i < 18 ; i++){
    if (timeCheck.hour > (i)) {
        console.log(timeCheck.hour + " > " + i)
        var timeBlock9 = $("#" + i);
        timeBlock9.css("background-color", "#a46efc")
    }
}

// IF PRESENT HOUR KEEP BASE COLOR 
for (i = 9 ; i < 18 ; i++){
    if (timeCheck.hour == i) {
        console.log(timeCheck.hour + " === " + i)
        var timeBlock9 = $("#" + i);
        timeBlock9.css("background-color", "#762cee")
    }
}

// IF FUTURE HOUR MAKE COLOR DARKER
for (i = 9 ; i < 18 ; i++){
    if (timeCheck.hour < (i)) {
        console.log(timeCheck.hour + " < " + i)
        var timeBlock9 = $("#" + i);
        timeBlock9.css("background-color", "#4200ad")
    }
}

// COLLECT EVENT AND STORE LOCALLY
 $(".saveBtn").click(function() {
    for (i = 9 ; i < 18 ; i++){
        var eventElement = $("#" + i).val();
        localStorage.setItem("eventData" + i, eventElement);
        console.log(eventElement);
    }
 });

// POPULATE TEXT CONTENT WITH LOCALLY SAVED EVENTS
for (i = 9 ; i < 18 ; i++){
    var locallyStoredEvents = localStorage.getItem("eventData"+i);
    $("#"+i).val(locallyStoredEvents);
}   
