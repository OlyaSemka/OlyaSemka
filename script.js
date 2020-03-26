	
	function unique (arr) {

		const array = [];
		const newArray = [];

		let length = +prompt ('Введите длинну массива', '');

		for (let i = 0; i < length; i++) {
			let num = +(prompt ('Введите элемент массива', ''));
			array.push (num);
		}
		
		array.sort();
		console.log (array);
		
		for ( let i = 0; i < length ; i++ ) {
			if ( array[i] != array [i+1] ) {
				newArray.push (array [i]);
			}
		}

		console.log (newArray);
	}

	unique ();



