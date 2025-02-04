function solution(n, lost, reserve) {
    
    let lost_student = lost.filter(v => !reserve.includes(v)).sort();
    let reserve_student = reserve.filter(v => !lost.includes(v)).sort();
    
    let answer = n - lost_student.length;
    
    for(let i = 0; i < lost_student.length; i++) {
        let lostNum = lost_student[i];
        for(let j = 0; j < reserve_student.length; j++) {
            let reserveNum = reserve_student[j];
            if (reserveNum === lostNum -1 || reserveNum === lostNum + 1) {
                answer += 1;
                reserve_student[j] = -1;
                break;
            }
        }
    }
    return answer;
}