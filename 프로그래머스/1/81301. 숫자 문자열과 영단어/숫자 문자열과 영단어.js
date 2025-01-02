function solution(s) {
    //필요한 정보를 객체로 저장
    const numberWords = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };
    // 객체의 키,벨류를 replaceAll로 순차적으로 치환
    for(const [word, numbers] of Object.entries(numberWords)) {
        s = s.replaceAll(word, numbers);
    }
    return Number(s);
}