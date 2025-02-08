function solution(keymap, targets) {
    let answer = [];
    
    // 최소 키 입력 횟수
    let keyDict = {};
        // keymap을 순회하면서 각 문자별 최소 입력 횟수 저장
    keymap.forEach(row => {
        row.split("").forEach((char, index) => {
            if (keyDict[char] === undefined || keyDict[char] > index + 1) {
                keyDict[char] = index + 1;
                console.log(keyDict[char])
            }
        });
    });
    
    // target 배열을 순회하면서 최소 입력횟수 저장
    targets.forEach(target => {
        let count = 0;
        
        for(let char of target) {
            if (keyDict[char] === undefined) {
                count = -1;
                break;
                
            }
            count += keyDict[char];
        }
        
        answer.push(count);
    })
    return answer;
}