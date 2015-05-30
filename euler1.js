/* 5/30/15 */
/* Project Euler 1, JavaScript */
/* Sum the multiples of 3 and 5 below 1000 */

var num = 3;
var sum = 0;

while (num < 1000) {
	if ((num % 3 === 0) || (num % 5 === 0)) {
		sum += num;
	};
	num++;
};

console.log(sum);