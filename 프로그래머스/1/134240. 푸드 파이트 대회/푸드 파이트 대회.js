function solution(food) {
  var answer = '';
  //인덱스 1번부터 2로나눈수를 숫자만큼 문자열에 앞에서 추가 뒤에서 추가 마지막에 0 추가
  for(let i = 1; i < food.length; i++) {
    const temp = Math.floor(food[i] / 2);
    answer += i.toString().repeat(temp); //주어진횟수만큼 문자열반환 1222333
  }
  return answer + '0' + answer.split('').reverse().join('');
}

console.log(solution([1,3,4,6]))