function solution(s){
  var answer = true;
  let p = 0;
  let y = 0;
  s = s.toUpperCase();
  for(let i = 0; i <= s.length; i++){
    if(s[i] === "P") p++;
    if(s[i] === "Y") y++;
  }
    if(p === y){
      answer = true;
    } else {
      answer = false;
    }
  return answer;
}