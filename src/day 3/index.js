function parseDate(dateStr) {
    let dateFormats = [
        { regex: /\d{2} \d{2} \d{4} \d{2}:\d{2}/, parse: (parts) => new Date(parts[2], parts[1] - 1, parts[0], parts[3], parts[4]) }, // DD MM YYYY HH:mm
        { regex: /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/, parse: (parts) => new Date(parts[2], parts[1] - 1, parts[0], parts[3], parts[4]) }, // DD-MM-YYYY HH:mm
        { regex: /\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}/, parse: (parts) => new Date(parts[2], parts[1] - 1, parts[0], parts[3], parts[4]) }, // DD.MM.YYYY HH:mm
        { regex: /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/, parse: (parts) => new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]) }, // YYYY-MM-DDTHH:mm:ss
        { regex: /\d{2} \d{2} \d{4}/, parse: (parts) => new Date(parts[2], parts[1] - 1, parts[0]) },
        { regex: /\d{2}-\d{2}-\d{4}/, parse: (parts) => new Date(parts[2], parts[1] - 1, parts[0]) }, 
        { regex: /\d{2}\.\d{2}\.\d{4}/, parse: (parts) => new Date(parts[2], parts[1] - 1, parts[0]) } 
    ];

    for (let format of dateFormats) {
        if (format.regex.test(dateStr)) {
            let parts = dateStr.match(/\d+/g);
            return format.parse(parts);
        }
    }

    return new Date(dateStr); 
}
function calculateDateDifference(startDate, endDate) {
    let start = parseDate(startDate);
    let end = parseDate(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        let previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function calculateHeartbeats(date, heartRate = 70) {
    let currentDate = new Date();
    let difference = calculateDateDifference(date, currentDate);

    let totalDays = (difference.years * 365) + (difference.months * 30) + difference.days;
    let totalHours = (totalDays * 24) + difference.hours;
    let totalMinutes = (totalHours * 60) + difference.minutes;
    let totalSeconds = (totalMinutes * 60) + difference.seconds;

    let heartbeats = totalSeconds * heartRate / 60;

    return heartbeats;
}

let startDate = prompt("Enter a date to start (e.g., 12 02 2022 12:55 or 12-02-2022 12:55 or 12.02.2022 12.55)");
let endDate = new Date(); 

let difference = calculateDateDifference(startDate, endDate);
console.log(`Years: ${difference.years}`);
console.log(`Months: ${difference.months}`);
console.log(`Days: ${difference.days}`);
console.log(`Hours: ${difference.hours}`);
console.log(`Minutes: ${difference.minutes}`);
console.log(`Seconds: ${difference.seconds}`);

let heartbeats = calculateHeartbeats(startDate);
console.log(`Heartbeats: ${heartbeats}`);
