// generic.ts -> generalize[일반화하다]

type G<T, K> = {
  first: T;
  second: K;
};

const test6: G<string, number> = {
  fisrt: "문자넣어야하고",
  second: 1234,
};

// type HamburgerSet<> = {main,side,drink}

type HamburgerSet<A, B, C> = {
  main: A;
  side: B;
  drink: C;
};

type Morning = "머핀";
type NotMorning = "참깨빵";

type Hamburger<T> = {
  bread: T;
  content: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};
type Side = "감자튀김" | "코우슬로" | "맥너겟" | "소프트아이스크림";
type Coffee2 = "드립커피" | "아메리카노" | "디카페인" | "라떼";
type Beverage2 = "콜라" | "스프라이트" | "제로콜라" | "환타";

const MacMorning: HamburgerSet<
  Hamburger<Morning>,
  Side,
  Coffee2 | Beverage2
> = {
  main: {
    bread: "머핀",
    content: "토마토에그",
  },
  side: "감자튀김",
  drink: "드립커피",
};

// const a = fetch("https").then((v) => v.json())

type Success<T> = {
  result: "success";
  value: T;
};

type Failure = {
  result: "fail";
  value: "error";
};

type Response_<T> = Success<T> | Failure;

const getResponse = (a: Response_<string>) => {
  if (a.result === "success") {
    return a.value + 100;
  } else {
    console.log(a.value);
  };
};
getResponse({ result: "fail", value: "error" });
