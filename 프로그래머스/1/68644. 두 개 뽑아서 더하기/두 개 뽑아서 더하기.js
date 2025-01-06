function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            const temp = numbers[i] + numbers[j];
            answer.push(temp);
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}