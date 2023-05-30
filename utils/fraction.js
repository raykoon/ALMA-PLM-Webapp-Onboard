const Fraction = {
  a: 0,
  b: 0,
  d: '',
  e: 0,
  // 转化除法逻辑
  fraction: function (num1, num2) {
    Fraction.a = num1;
    Fraction.b = num2;
    Fraction.appointment();
  },
  // 小数转化逻辑
  fractionDecimals: function (num1) {
    Fraction.a = parseInt(num1.toFixed(4) * 10000, 10);
    Fraction.b = 10000;
    Fraction.appointment();
  },
  // 欧基里德逻辑
  gcd: function (a, b) {
    return b == 0 ? a : Fraction.gcd(b, a % b);
  },
  // 约分逻辑
  appointment: function () {
    if (Fraction.a == 0 || Fraction.b == 1) return;
    Fraction.e = Fraction.gcd(Fraction.a, Fraction.b);
    Fraction.a /= Fraction.e;
    Fraction.b /= Fraction.e;
  },
  // 输出判定
  toFraction: function () {
    // 大于一的显示逻辑
    if (Fraction.a > Fraction.b) {
      // 整除判断逻辑
      if (Fraction.a % Fraction.b == 0) {
        Fraction.d = Fraction.a / Fraction.b;
      } else {
        // console.log(Math.floor(Fraction.a / Fraction.b));
        Fraction.d =
          Math.floor(Fraction.a / Fraction.b) +
          ' ' +
          (Fraction.a - Math.floor(Fraction.a / Fraction.b) * Fraction.b) +
          '/' +
          Fraction.b;
      }
    } else {
      Fraction.d = Fraction.a + '/' + Fraction.b;
    }
  },
};

export default function Index(num) {
  const str = num + '';
  const arr = str.split('.');
  if (arr.length > 1) {
    if (num < 0) {
      Fraction.fractionDecimals(-num);
      Fraction.toFraction();
      // console.log(Fraction)
      return '-' + Fraction.d;
    } else {
      Fraction.fractionDecimals(num);
      Fraction.toFraction();
      // console.log(Fraction)
      // console.log(Fraction.d,'转换分数输出的值',Fraction)
      return Fraction.d + '';
    }
  } else {
    return num;
  }
}
