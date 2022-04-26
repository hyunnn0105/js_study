
var userHeight = +prompt('신장을 입력하세요.');

if (userHeight >= 140){ //1차검사
        var userAge = +prompt('나이를 입력하세요.');
        if ( userAge >= 8){
            alert(`놀이기구에 탑승할 수 있습니다.`);
        } 
        else if (userAge >= 6 ) {
            alert(`보호자와 함께 놀이기구에 탑승할 수 있습니다.`);
        } 
        else {
            alert(`나이 제한 때문에 놀이기구에 탑승할 수 없습니다.`);
        }
    
} else {
    alert(`키 제한 때문에 놀이기구에 탑승할 수 없습니다.`);
}

alert(`오늘 하루 즐거운 시간되세요!`);