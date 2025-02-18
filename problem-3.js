function  willSuccess( marks ) {
    if(!Array.isArray(marks)){
       return "Invalid"
    }
    let fail = 0;
    let pass = 0;
    for(let mark of marks){
        if(mark >= 50){
            pass++;
        }
        else{
            fail++;
        }
    }
    if(pass > fail){
        return true;
    }
    return false;
}
