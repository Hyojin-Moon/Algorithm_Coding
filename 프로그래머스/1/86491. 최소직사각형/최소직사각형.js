function solution(sizes) {
    // 가로를 큰수로 전부 돌려서 큰수와 작은수를 구한 후 계산
    const width = [];
    const height = [];
    for(let i = 0; i < sizes.length; i++) {
        const max = Math.max(sizes[i][0], sizes[i][1]); //두수의 비교중 큰수
        const min = Math.min(sizes[i][0], sizes[i][1]); // 두수의 비교중 작은수
        width.push(max); // 가로에서 가장 큰 수
        height.push(min); // 세로에서 가장 큰 수
    }
    return Math.max(...width) * Math.max(...height);
}