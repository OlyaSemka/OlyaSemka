	
	const arr1 = [
		[1,2,3], 
		[4,5,6], 
		[7,8,9]
		];
	let amt =0;	
	for ( let i=0; i<arr1.length; i++){
		for (let j = 0; j < arr1[i].length; j++) {
			amt+=arr1[i][j];
		}
	};
	console.log(amt);