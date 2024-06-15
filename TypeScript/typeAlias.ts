// typeAlias : 별칭,별명

type TTest = string | string[];

const test : TTest = "디카페인 아아";

// Coffee :name,kcal,shot,hasDecaffien,ingredients

type Bean = {
    shot : number;
    hasDecaffien : boolean;
};

type Liquid = {
    name : string;
    kcal : number;
    ingredients : string[];
};

type Carbonated = {
    isZero : boolean;
}

type Milk = {
    isLowFat : boolean;
    isSoy : boolean;
};

type Coffee = Bean & Liquid;
type Beverage = Carbonated & Liquid;
type LatteCoffee = Bean & Liquid & Milk;

type MyTrpograph ={
    font : string;
    fontWeight : number;
    color : string;
};

type MyButton = {
    border : string;
    borderRadius : number;
    backgroundColor : string;
    click : () => void;
};

// const newButton : MyTrpograph & MyButton ={

// }