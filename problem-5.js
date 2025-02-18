function  calculateSleepTime( times ) {
    if(!Array.isArray(times)){
        return "Invalid"  
    }
    let totalSecond = 0;
    for(const time of times){
        if(typeof time !== "number"){
            return "Invalid"
        }
        totalSecond += time;
    }
    const hour = Math.floor(totalSecond / 3600);
    const minute = Math.floor(totalSecond % 3600 / 60);
    const second = totalSecond % 60;
    const sleepTime = {
        hour: hour,
        minute: minute,
        second: second
    }
    return sleepTime;
}
