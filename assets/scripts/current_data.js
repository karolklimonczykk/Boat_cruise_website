function time(){
    var current = new Date();
    var day = current.getDate();
    var month = current.getMonth()+1;
    var year = current.getFullYear();
    var hour = current.getHours();
    var min = current.getMinutes();
    var sec = current.getSeconds();
    if(day<10)
        day = "0"+day;
    if(month<10)
        month = "0"+month;
    if(hour<10)
        hour = "0"+hour;
    if(min<10)
        min = "0"+min;
    if(sec<10)
        sec = "0"+sec;

    document.getElementById("current_date").innerHTML=day+"."+month+"."+year+"   "+hour+":"+min+":"+sec;
}
setInterval(time,1000);



function holidays() {
                    var now = new Date();
                    var date = now.toLocaleDateString();
                    var time = now.toLocaleTimeString();
                    var holidays = new Date("June 26, 2021");
                    var now = new Date();
                    var left = holidays.getTime() - now.getTime();
                    var days = Math.floor(left / (1000 * 60 * 60 * 24));
                    document.getElementById("wakacje").innerHTML = days + " dni";
            }
holidays();