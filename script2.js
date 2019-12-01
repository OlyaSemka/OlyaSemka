
	const arr = [4,12,97,36,0,11,63,89,3,56,74,22,12,9];
	let newArr = [];
	for (let i = 0; i<arr.length; i++) {
		if (arr[i]%2==0) {
			newArr[i] = 'even' ;
		} else if (arr[i]%2!=0) {
			newArr[i]= 'odd';
			} 
		};	
	console.log (newArr.join('+'));	