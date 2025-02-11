function solution(ingredient) {
    let answer = 0;
    
    for (let i = 0; i <= ingredient.length; i++) {
        // 연속된 네 개가 [1,2,3,1]인지 확인
        if (ingredient[i] === 1 
            && ingredient[i + 1] === 2 
            && ingredient[i + 2] === 3 
            && ingredient[i + 3] === 1) {
            ingredient.splice(i, 4); // 찾은 부분 제거
            answer++; 
            i = Math.max(i - 3, -1); // i를 조정하여 다시 탐색
        }
    }
    
    return answer;
}