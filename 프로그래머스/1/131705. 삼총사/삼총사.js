function solution(number) {
    const result = [];
    const len = number.length;

    // 3개의 숫자를 선택하는 모든 조합을 확인
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                  result.push([number[i], number[j], number[k]]);
                }
            }
        }
    }
    return result.length;
}