function solution(s) {
    let answer = [];
    let temp = [];
    for(let i = 0; i < s.length; i++) {
        if(!temp.includes(s[i])) {
            answer.push(-1);
            temp.push(s[i]);
            console.log(answer)
            console.log(temp);;
        } else if (temp.includes(s[i])) {
            answer.push(i - temp.lastIndexOf(s[i])); // 3 - 1, 4-2, 5-2
            temp.push(s[i]);
        }
    }
    return answer;
}