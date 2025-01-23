function solution(lottos, win_nums) {
    const answer = [];
    
    const match = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    console.log(match);
    const zero = lottos.filter((lotto) => lotto === 0).length;
    console.log(zero);
    
    let min = 7 - match >= 6 ? 6 : 7 - match;
    console.log(min);
    let max = min - zero < 1 ? 1 : min - zero;
    console.log(max);
    answer.push(max, min);
    return answer;
}