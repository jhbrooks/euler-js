/* 5/30/15 */
/* Project Euler 2, JavaScript */
/* Sum the even terms, with value less than or equal to 4 million,
of the Fibonacci sequence starting with 1 and 2 */

var n1 = 1;
var n2 = 2;
var holder = 0;
var even_sum = 0;

while ((n1 < 100) && (n2 < 100)) {
	holder = n2;
	n2 = n1 + n2;
	n1 = holder;
	console.log(holder);
}