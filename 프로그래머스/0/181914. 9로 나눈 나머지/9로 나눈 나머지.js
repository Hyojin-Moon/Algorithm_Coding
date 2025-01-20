function solution(number) {
    const arrNumbers = Array.from(number);
    const sumNumbers = arrNumbers.reduce((a, c) => a + Number(c), 0);
    console.log(sumNumbers);
    return sumNumbers % 9;
}