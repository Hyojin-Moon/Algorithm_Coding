function solution(dots) {
    //평행 = 직선의 기울기 , 직선의기울기=y의변화량/x의변화량
    //dots 4, 4개의 점 a,b,c,d를 적용해서 비교
    //경우의 수는 [a-b,c-d],[a-c,b-d],[a-d,b-c] 총 3개
    let [a,b,c,d] = dots;
        if(calc(a,b) === calc(c,d)) return 1;
        if(calc(a,c) === calc(b,d)) return 1;
        if(calc(a,d) === calc(b,c)) return 1;
    return 0;
}
function calc(x,y) {
    return (y[1] - x[1]) / (x[0] - y[0]);
}