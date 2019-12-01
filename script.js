
	const array =  [
		[1,2,3], 
		[4,5,6], 
		[7,8,9]];

	let sum = 0;
	let i = 0;
	let j = 0;
	while (i < array.length ) {
		while (j < array[i].length) {
			sum+=array[i][j];
			j++;
		}
		i++;
	} console.log(sum);