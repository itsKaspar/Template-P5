// Maths
const Something = require('./js/Something.js');
const Ox = require('./js/Ox.js');

const modules = {
  Something,
  Ox
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context
