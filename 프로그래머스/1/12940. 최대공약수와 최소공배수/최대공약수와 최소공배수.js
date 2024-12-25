function solution(n, m) {
    function gcd(a, b) { // 최대공약수 재귀함수
        return b === 0 ? a : gcd(b, a % b);
    }
    let min = gcd(n,m); //최대공약수
    let max = (n*m) / min; // 최소공배수
    
    return [min, max];
}