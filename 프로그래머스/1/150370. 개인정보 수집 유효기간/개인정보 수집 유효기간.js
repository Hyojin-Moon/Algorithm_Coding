function solution(today, terms, privacies) {
    let answer = [];
    
    const todayType = new Date(today);
    
    const termsType = {};
    terms.forEach((item) => {
        const [type, term] = item.split(" ");
        termsType[type] = Number(term);
    });
    
    privacies.forEach((item, idx) => {
        const [date, type] = item.split(" ");
        const privaciesDate = new Date(date);
        
        privaciesDate.setMonth(privaciesDate.getMonth() + termsType[type]);
        if(privaciesDate <= todayType) answer.push(idx + 1);
    })
    
    return answer;
}