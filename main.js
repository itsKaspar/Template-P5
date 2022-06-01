// Maths
const Something = require('./js/Something.js');

const modules = {
  Something
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context
