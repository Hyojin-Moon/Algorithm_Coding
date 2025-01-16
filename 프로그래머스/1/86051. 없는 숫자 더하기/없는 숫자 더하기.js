function solution(numbers) {
    let answer = 0;
    const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let num of numbersArr) {
        if (!numbers.includes(num)) {
            answer += num;
        }
    }
    return answer;
}