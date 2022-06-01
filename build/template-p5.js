(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Something{
	constructor(){
		console.log("constructing default object")
	}

}

if(typeof window !== 'undefined') window.Something = Something; // export for window
module.exports = Something; // and export for module

},{}],2:[function(require,module,exports){
// Maths
const Something = require('./js/Something.js');

const modules = {
  Something
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context

},{"./js/Something.js":1}]},{},[2]);
