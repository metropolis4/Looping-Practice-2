var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// 1.
for( i=0; i<animals.length -1; i++) {
	console.log(animals[i]);
}

// 2.
for( i=0; i<animals.length; i+=2) {
	console.log(animals[i]);
}

// 3.
for( i=animals.length -1; i>=0; i--) {
	console.log(animals[i]);
}

// 4.
for( i=0; i < animals.length; i++){
	console.log(animals[i]);
	if(i > 0 && i < animals.length -1) {
		console.log(animals[i]);
	}
}