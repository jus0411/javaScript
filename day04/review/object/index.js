// array, element, obj

const book = {
    title : "자바스크립트는 누가만들었냐",
    price : 24000,
    author : "전수효",
    publishedYear : {
        year : 2024,
        month : 5,
        day : 31,
    },
};

const book1 = {
    smallButtons : ["소득공제"],
    title : "자바스크립트는 왜 그 모양일까?",
    sub_title : "더글러스 크락포드가 알려주는 위험한 자바스크립트를 안전하게 사용하는 법",
    author : {
        real : "더글라스 크락포드",
        editor : "저/박수현 역",
    },
    Company : "인사이트(insight)",
    publishedYear : {
        year : 2020,
        month : 5,
        day : 25,
    },
    rate : 6.0,
    reviews : 1,
    saleIndex : 288,
};

// 데이터 가져오기

// 1.dot 연산자
console.log(book1.title);
console.log(book1.author.editor);

// 2. bracket 연산자
console.log(book1["title"]);
console.log(book1["author"]["editor"]);

// 데이터 추가
book1.isBestSeller = true;

// 데이터 삭제
delete book1.sub_title;

// 데이터 존재 유무
"title" in book; //true

book1.keys() //keys값들만 돌려주기
book1.values() //values값들만 돌려주기