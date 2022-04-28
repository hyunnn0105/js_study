//객체의 중첩구조
//예-웹사이트 게시판 데이터
var board = {

    totalCount : 2378, //총 게시물 수
    admin : 'abc1234', //관리자 아이디
    page : 258, // 페이지 수
    currentpage : 3, //현재 위치한 페이지
    prev : false, //이전버튼 활성화 여부
    next : true, //다음버튼 활성화 여부
    articleList:[
        {
                bon:792, //글번호
                title: '제 3회 빅테이터 분석 ...', //글제목
                viewcount:62836, //조회수
                regDate : '2021.10.22', //등록일
                content: 'sfjk sjfs jfew ifdf;',
                writer:'관리자',//글내용
                recommend : 10, //추천수
        }, 
        {
            bno: 791, //글번호
            title: '제출 서류 및 일정', //글제목
            viewCount: 114186, //조회수
            regDate: '2021.10.13', //등록일
            content: '어쩌고 저쩌고123... ', //글내용
            writer: '관리자', //등록회원이름
            recommend: 21, //추천수

        }, 
        {
            bno: 790, //글번호
            title: '고사장 추가 안내', //글제목
            viewCount: 3691, //조회수
            regDate: '2021.10.13', //등록일
            content: '어쩌고 저쩌고456... ', //글내용
            writer: '관리자', //등록회원이름
            recommend: 2, //추천수

        }
    ], //게시글 목록 - 배열 안에 객체
};


//이전버튼 활성화 여부값
console.log(board.prev);

// 게시물 목록 안의 게시물 개수
console.log(board.articleList.length);

//2번째 게시물의 전체정보
console.log(board.articleList[1]);

//첫번째 게시물의 글제목
console.log(board.articleList[0].title);

//모든 게시물의 조회수를 전부 출력
console.log(`===============`);

for (var article of board.articleList) {
    console.log(article.viewCount);
}
