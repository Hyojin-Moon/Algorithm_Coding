function solution(a, b, n) {
    var answer = 0;
    while(n >= a){
        const newBottles = Math.floor(n / a) * b; //받는 콜라 갯수
        answer += newBottles;
        n = newBottles + (n % a); //빈병갯수
    }
    return answer;
}