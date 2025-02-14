function solution(wallpaper) {  
    // 값 초기화  
    let minRow = Infinity;  
    let maxRow = -Infinity;  
    let minCol = Infinity;  
    let maxCol = -Infinity;  

    // wallpaper를 순회하면서 `#`의 값 찾기  
    for (let i = 0; i < wallpaper.length; i++) {  
        for (let j = 0; j < wallpaper[0].length; j++) {  
            if (wallpaper[i][j] === '#') {  
                minRow = Math.min(minRow, i);  
                maxRow = Math.max(maxRow, i);  
                minCol = Math.min(minCol, j);  
                maxCol = Math.max(maxCol, j);  
            }  
        }  
    }  

    // 드래그 할 사각형의 각 모서리 계산  
    const lux = minRow;  
    const luy = minCol;  
    const rdx = maxRow + 1; // 최대 행에 1 더하기  
    const rdy = maxCol + 1; // 최대 열에 1 더하기  

    return [lux, luy, rdx, rdy];  
}  
