function solution(s, n) {
    var answer = '';
    //s의 ASCII 코드값을 구하고 n만큼 코드값을 더해서 다시 알파벳으로 변환 후 출력
    //영어 대문자: 65번부터 90번까지
    //영어 소문자: 97번부터 122번까지
    //z 처리는 별도로 122일경우 1로 
    for(let i=0; i<s.length; i++){
        let sa = s.charCodeAt(i)
        let temp = s[i];
        if(temp === '') answer += ''; //공백처리
        // 대문자 범위 처리 (A-Z: 65-90)
        if (65 <= sa && sa <= 90) {
            sa = ((sa - 65 + n) % 26) + 65; //알파벳 범위 %26 알파뱃갯수연산 
        }
        // 소문자 범위 처리 (a-z: 97-122)
        else if (97 <= sa && sa <= 122) {
            sa = ((sa - 97 + n) % 26) + 97;
        }
        answer += String.fromCharCode(sa);
    }
    return answer;
}