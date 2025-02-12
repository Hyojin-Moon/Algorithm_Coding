function solution(survey, choices) {
    //점수 카운팅 > choices의 결과값을 모르겠음4 기준으로 나눔
    
    //성격타입 세팅 사전순으로 되어있는거 확인
    const surveyTypes = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
    const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };//점수 비교 객체
    
    survey.forEach((n, i)=> {
        const type = n.split(""); //split메서드로 하나씩 분리해줌
        if(choices[i] < 4){ // 입력된 choices의 값을 4 기준으로 누적
            types[type[0]] += 4 - choices[i]; // 3이 들어오면 1점
        }else if(choices[i] > 4){
            types[type[1]] += choices[i] - 4; // 5가 들어오면 1점
        }
    });
    return surveyTypes.map((e) => {  // e == ["R", "T"]
        if(types[e[0]] < types[e[1]]){ // R,T를 비교해서 T가 더 크면 T 같거나 작으면 R (사전순)
            return e[1];
        }
        return e[0];
    })
    .join(""); // map 으로 반환된 배열을 합쳐줌
}