function solution(absolutes, signs) {
    let answer = 0; // 최종 합산 값을 저장할 변수

    for (let i=0; i < signs.length; i++) { //인덱스값이 같으므로 하나의 반복문
        if (signs[i]) { // true이면 양수
            answer += absolutes[i];
        } else { // false이면 음수
            answer -= absolutes[i];
        }
    }

    return answer; // 최종 합계
}