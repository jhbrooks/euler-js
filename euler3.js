/* 5/30/15 */
/* Project Euler 1, JavaScript */
/* Find the largest prime factor of 600851475143 */

var factor = function(num,div) {
	if (num === div) {
		return div;
	} else if (num % div === 0) {
		return factor((num / div),2);
	} else {
		return factor(num,(div + 1));
	};
};

console.log(factor(600851475143,2));