//  피자 만들기
// 1.도우 준비 0.5

const prepareDough = () => {
    return new Promise((success) => {
        setTimeout(()=>{
            console.log("도우 준비 완료")
            success('도우')
        },500);
    });
};
// 2.토마토 소스 추가 1
const addSauce = (dough) =>{
    return new Promise((success)=>{
        setTimeout(()=>{
            console.log("토마토소스 준비 완료")
            success(`${dough} + 토마토소스`)
        },1000)
    })
}


// 3.토핑 추가 1

const addTopping = (doughWithSauce) =>{
    return new Promise((success)=>{
    setTimeout(()=>{
        console.log("피자 토핑 준비 완료")
        success(`${doughWithSauce} + 치즈`);
    },1000);
    });
};

// 4.피자굽기 0.5

const bakePizza = (doughWithSauceAndTopping) =>{
    return new Promise((success)=>{
    setTimeout(()=>{
        console.log("피자 굽기 준비 완료")
        success(`${doughWithSauceAndTopping} => '치즈'`);
    },500);
    });
};

// 5.피자 쿰척
prepareDough()
    .then((v)=>{
        console.log(v);
        return addSauce(v);
    })
    .then((v)=>{
        console.log(v);
        return addTopping(v);
    })
    .then((v)=>{
        console.log(v);
        return bakePizza(v);
    })
    .then ((v)=>{
        console.log(`${v} + 피자쿰척`)
    })