/**
 * Get the smallest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Smallest number found
 * @example console.log(min([1, 2, 3])); // logs 1
 */
export default function min(values) {
  let smallest = Number(Infinity); // Infinity无限的，这里是指无限大的值
	Object.keys(values).forEach(i => {
		if (values[i] < smallest) {
			smallest = values[i];
		}
	});
	return smallest;
}
