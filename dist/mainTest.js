/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _txt2regiletterEs = __webpack_require__(1);

	document.getElementById('display').innerHTML = (0, _txt2regiletterEs.txt2regiletter)('"The quick brown fox jumped over the lazy brown dog." 0 1 2 3 4 5 6 7 8 9 ? ! ,<>/\\";;');

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.txt2regiletter = txt2regiletter;
	function getRegionalIndicatorForCharacter(character) {
	  return ':regional_indicator_' + character + ':';
	}

	function getEmojiForNonAlphaCharacter(character) {
	  switch (character.charCodeAt(0)) {
	    case 32:
	      // space
	      return ':black_small_square:';
	    case 33:
	      // exclamation
	      return ':grey_exclamation:';
	    case 34:
	      // double quotes
	      return ':v:';
	    case 63:
	      //question mark
	      return ':grey_question:';
	    case 46:
	      // period
	      return ':large_blue_circle:';
	    case 48:
	      return ':zero:';
	    case 49:
	      return ':one:';
	    case 50:
	      return ':two:';
	    case 51:
	      return ':three:';
	    case 52:
	      return ':four:';
	    case 53:
	      return ':five:';
	    case 54:
	      return ':six:';
	    case 55:
	      return ':seven:';
	    case 56:
	      return ':eight:';
	    case 57:
	      return ':nine:';
	    default:
	      return ':large_blue_diamond:';
	  }
	}

	function txt2regiletter(inputString) {
	  var lowercaseStringArray = inputString.toLowerCase().split('');

	  lowercaseStringArray.forEach(function (character, index) {
	    var charCode = character.charCodeAt(0);
	    if (charCode >= 97 && charCode <= 122) {
	      lowercaseStringArray[index] = getRegionalIndicatorForCharacter(character);
	    } else {
	      lowercaseStringArray[index] = getEmojiForNonAlphaCharacter(character);
	    }
	  });

	  return lowercaseStringArray.join(' ');
	}

/***/ }
/******/ ]);