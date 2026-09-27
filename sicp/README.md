# SICP 小练习（JavaScript）

围绕前两章主题写的一小组练习，不是全书答案。实现用普通 Node.js 跑，
没有使用 Source Academy 的运行时，也没有照搬题目全文。

```sh
node --test sicp/test.js
```

需要 Node.js 18+。从这个仓库根目录执行，不用安装依赖。

## 递归和迭代

`processes.js` 把同一个递推关系写两遍：前三项是 0、1、2，后面的每项等于
前一项加两倍前两项、再加三倍前三项。

递归版接近公式，但会重复计算；只拿很小的输入画调用树。循环版只保留前三项，
每次一起向前移动。两种写法返回 BigInt，避免整数结果变大后悄悄失去精度。
“只保留三个变量”不等于任意大的整数都只占固定字节。

快速幂每次把指数减半。可以跟踪不变量：已经积累的结果乘上剩余的幂，始终
等于最初要求的幂。这里不用位运算，因为 JavaScript 位运算会把 Number 转成
32 位整数。指数为零返回 `1n`，也包括这份练习中的 `0n ** 0`。

参考：[1.2.4 Exponentiation](https://sicp.sourceacademy.org/chapters/1.2.4.html)。

## 把变化的部分传进去

`higher-order.js` 的 `accumulate` 把“如何合并”和“每项算什么”作为参数，
同一个循环就能求平方和、阶乘。这里固定遍历整数闭区间，并采用从左到右的
折叠；减法这样的运算不能随便交换方向。空区间直接返回给定初始值。

`compose(f, g)` 先做 g 再做 f；`repeated(f, 0)` 返回恒等变换。
重复应用用循环写，避免 Node.js 中长递归调用堆栈溢出。

参考：[1.3.1 Functions as Arguments](https://sicp.sourceacademy.org/chapters/1.3.1.html)。

## 有理数的表示

`rational.js` 统一在构造时约分，把负号放到分子，零写成 `0/1`。
这样加法和乘法就不用在每一步重新考虑负分母。分母为零直接报错。

例如：

```js
const { makeRational, addRational } = require('./sicp/rational');
addRational(makeRational(1n, 2n), makeRational(1n, 3n));
// { numerator: 5n, denominator: 6n }
```

参考：[2.1.1 Rational Numbers](https://sicp.sourceacademy.org/chapters/2.1.1.html)。
