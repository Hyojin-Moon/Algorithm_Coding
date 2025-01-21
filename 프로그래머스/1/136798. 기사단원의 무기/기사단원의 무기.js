function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i < number+1; i++) {
        let count = 0;
        //약수 구하기
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++; // 작은 약수
                if (j !== i / j) count++; // 큰 약수 
            }
        }
        if (count <= limit) {
            answer += count;
        } else {
            answer += power;
        }
    }
    return answer;
}