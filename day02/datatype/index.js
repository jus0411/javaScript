// const 변수이름 = 데이터[타입: 기본 + 참조]
//  기본 타입 : number, string, boolean(True or False), null(비어있음), underfined(정의되지않음)

// 타입 변환
// 1] 명시적 타입 변환(대놓고)
// 2] 암묵적 타입 변환(몰래)


// 숫자화
// 1.Number("1004") [명시적]
// 2.parseInt("1004"), parseInt("3.14") [명시적]
// parse 해석하세요, Int 정수 ,Float 실수
//  - 숫자가 아닌 문자를 만나면 그 즉시 해석해줘
// 3.+ [암묵적]

// 문자화
// 1.string(123) [명시적]
// 2.somthing + "문자" + something [암묵적]

//  불리언화
//  ex) Boolean() // true or false
//  ex) Boolean(-1), Boolean(스타벅스), Boolean(메가커피) // true

// truthy & falsy data
// true : 나머지 다 true
// false: 0,-0,"",null ,undefined ,NaN