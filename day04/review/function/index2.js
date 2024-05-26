// 함수: input[str,num,bool,array,element,function] -> output

function abc(x){
    x();
    return 1;
}
function kim(){
    console.log(`김씨 안녕`);
}
abc(kim);

// 콜백함수
const getTen = () => 10;

const getOne = () => 1;
const abc = (x,y) => x()+ y();
abc(getTen, getOne); //11

const arr = [1,10,"apple","banana", 3];
const test = (x) => console.log(`${x} 입니다.`);

arr.forEach(test);
arr.forEach((v)=>{
    console.log(`${v}입니다.`);
});