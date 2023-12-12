function solution(strings, n) {
    var answer = [];

    // 1. 문자열 가장 앞 글자 붙인 문자 배열 만들기
    for (var i=0; i<strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    
    // 2. 문자열 사전순 정렬( 배열 매소드 sort)
    strings.sort();
    
    // 앞글자 제거 후 리턴
    for (var j=0; j<strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        answer.push(strings[j]);
    }

    return answer;
}

console.log(solution(["sun", "bed", "car"], 1));