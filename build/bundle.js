/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/core'\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:603:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:529:25)\n    at Module.require (internal/modules/cjs/loader.js:658:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.<anonymous> (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/babel-loader/lib/index.js:10:11)\n    at Module._compile (internal/modules/cjs/loader.js:722:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:733:10)\n    at Module.load (internal/modules/cjs/loader.js:620:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:552:3)\n    at Module.require (internal/modules/cjs/loader.js:658:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at loadLoader (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/NormalModule.js:268:15)\n    at Compilation.buildModule (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/Compilation.js:146:10)\n    at moduleFactory.create (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/Compilation.js:433:9)\n    at factory (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/NormalModuleFactory.js:99:14)\n    at /Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/tapable/lib/Tapable.js:272:13)\n    at resolver (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/NormalModuleFactory.js:74:11)\n    at process.nextTick (/Users/louisshi/post-flatiron-pre-job/react-component/js_modules/node_modules/webpack/lib/NormalModuleFactory.js:205:8)\n    at process.internalTickCallback (internal/process/next_tick.js:70:11)");

/***/ })
/******/ ]);