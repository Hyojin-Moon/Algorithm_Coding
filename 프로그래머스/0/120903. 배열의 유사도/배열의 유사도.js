function solution(s1, s2) {
    let answer = 0;
    for(let i = 0; i < s1.length; i++) {
        const s1temp = s1[i];
        
    for(let j = 0; j < s2.length; j++) {
        const s2temp = s2[j];
        
        if(s1temp === s2temp) {
                answer += 1; 
        }
    }
    }
    return answer;
}