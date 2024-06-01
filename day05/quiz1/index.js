import { data } from "./data.js";

// 1. timezone이 europe인 데이터만 가져와서
//  -> phone,fullname,ipaddress
const one = data
  .filter(({ timezone }) => timezone.includes("Europe"))
  .map(({ phone, fullname, ipaddress }) => ({ phone, fullname, ipaddress }));
console.log(one);

// 2. id가 짝수인 데이터 중에서
// timezone[대륙] 이랑 phone[-빼고] money[$빼고]를 가져오기

const two = data;
data
  .filter(({ id }) => id % 2 == 0)
  .map(({ timezone, phone, money }) => {
    return {
      timezone: timezone.split("/")[0],
      phone: phone.replaceAll("-", ""),
      money: money.replace("$", ""),
    };
  });
console.log(two);

// 3. America or Asia 데이터 중에서
// ipAddress[.을 지우고] fullname 앞이름[First name], creditcard 변경후 가져오기

const three = data
  .filter(
    ({ timezone }) => timezone.includes("America") || timezone.includes("Asia")
  )
  .map(({ ipaddress, fullname, creditcardtype }) => {
    return {
      ipaddress: ipaddress.replaceAll,
      fullname,
      creditcardtype,
    };
  });
console.log(three);

// 4. 달러가 25000-50000사이 데이터와 timezone이 africa인 데이터 중에서
// timezone[수도만 가져오기] fullname 뒤이름[Family name]가져오기

const four = data
  .filter(({ money, timezone }) => {
    const numberMoney = Number(money.replace("$", ""));
    const isValidMoney = 25000 <= numberMoney && numberMoney <= 50000;
    const isValidTimezone = timezone.includes("Africa");
    return isValidMoney && isValidTimezone;
  })
  .map(({ timezone, fullname }) => ({
    timezone,
    fullname,
  }));

// 5. ipAddress [180.101.53.217] 뒷자리 세개의 수의 합이 15이하인 애들 데이터중에서
// timezone, fullname, money 가져오기

const five = data
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    const LastIndex = ipArr.findLastIndex((v) => v == ".");
    ipArr
      .splice(LastIndex + 1, ipArr.length)
      .map((v) => Number(v))
      .reduce((a, c) => a + c);
    return sum <= 15;
  })
  .map(({ timezone, fullname, money }) => ({
    timezone,
    fullname,
    money,
  }));

console.log(five);
