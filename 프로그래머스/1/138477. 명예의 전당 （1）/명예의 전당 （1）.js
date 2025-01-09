function solution(k, score) {
    //score를 순회하면서 빈배열에 score를 삽입
    //k배열을 내림차순 정렬
    //k배열의 크기가 k보다 커지면 작은값은 빼주기
    //k배열의 가장 작은 수를 answer에 추가
    let answer = [];
    let kArr = [];    // k개의 값을 관리할 배열
    for(let i = 0; i < score.length; i++) {
        const temp = score[i];
        kArr.push(temp); // kArr에 현재 점수를 추가
        // kArr을 내림차순 정렬
        kArr.sort((a, b) => b - a);
            if (kArr.length > k) {
                kArr.pop(); // 가장 작은 값을 제거하여 크기 유지
            }
        // kArr의 가장 작은 값을 answer에 추가
        answer.push(kArr[kArr.length - 1]);
        }
    return answer;
}