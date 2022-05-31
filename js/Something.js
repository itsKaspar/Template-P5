class Something{
	constructor(){
		console.log("constructing default object")
	}

}

if(typeof window !== 'undefined') window.Something = Something; // export for window
module.exports = Something; // and export for module
