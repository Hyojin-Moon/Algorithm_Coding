function solution(i, j, k) {
    let answer = 0;
    const target = String(k); // k를 문자열로 변환

    for (let t = i; t <= j; t++) {
        const stringT = String(t);
        answer += stringT.split(target).length - 1; // k가 등장하는 횟수 카운트
    }    

    return answer;
}