function solution(n) {
    if(n===0){
        return "0"
    }
    let r = "";
    while(n > 0){
        let t = n % 3;
        r = t + r;
        n = Math.floor(n/3);
    }
    let answer = 0;
    for(let i=0; i<r.length; i++){
        answer += parseInt(r[i]) * Math.pow(3, i);
    }
    return answer;
}