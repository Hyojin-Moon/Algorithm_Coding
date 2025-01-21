function solution(n, m, section) {
    let answer = 0;
    let paint = 0;
    section.forEach((e) => {
        if (e > paint) { // 현재 구역이 paint보다 크다면
            paint = e + m - 1; // paint를 롤러길이m만큼 섹션에 더해서칠해주고 -1
            answer++;
        }
    })
    return answer;
}