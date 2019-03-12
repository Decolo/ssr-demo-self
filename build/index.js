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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/routes.jsx":
/*!************************!*\
  !*** ./src/routes.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/home */ \"./src/views/home/index.jsx\");\n/* harmony import */ var _views_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/about */ \"./src/views/about/index.jsx\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _views_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true,\n  key: 'home',\n  loadData: _views_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadData\n}, {\n  path: '/about',\n  component: _views_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true,\n  key: 'about',\n  loadData: _views_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData\n}]);\n\n//# sourceURL=webpack:///./src/routes.jsx?");

/***/ }),

/***/ "./src/server/index.jsx":
/*!******************************!*\
  !*** ./src/server/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/routes */ \"./src/routes.jsx\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n\n\n\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_1___default()(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(process.cwd() + '/public')));\napp.use(async ctx => {\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_4__[\"getStore\"])();\n  const promises = [];\n  const mtRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], ctx.request.path); // console.log(mtRoutes)\n  // debugger\n\n  mtRoutes.forEach(item => {\n    if (item.route.loadData) {\n      promises.push(new Promise(resolve => {\n        item.route.loadData(store);\n        resolve();\n      }));\n    }\n  }); // 服务器请求数据，先获取当前页面所需数据，再填充到store\n\n  await Promise.all(promises); // 根据服务端填充的store进行\n\n  await Object(_render__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(ctx, store, _routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n});\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.jsx?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var stream_to_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stream-to-promise */ \"stream-to-promise\");\n/* harmony import */ var stream_to_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stream_to_promise__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/routes */ \"./src/routes.jsx\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, store, routes) => {\n  const context = {};\n  const container = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToNodeStream\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: ctx.request.path,\n    context: context\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routes))));\n  await stream_to_promise__WEBPACK_IMPORTED_MODULE_5___default()(container).then(data => {\n    // 302重定向\n    if (context.action === 'REPLACE') {\n      return ctx.redirect('/');\n    } // 404 页面\n\n\n    if (context.isNotFound) {\n      ctx.status = 404;\n    }\n\n    ctx.body = `\n      <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <meta httpquiv=\"X-UA-Compatible\" content=\"ie=edge\">\n          <title>测试</title>\n          <link rel=\"stylesheet\" href=\"css/main.css\">\n        </head>\n        <body>\n          <div id=\"root\">${data.toString()}</div>\n          <!-- 从服务器端拿到脱水的数据状态 -->\n          <script>\n            window.context = {\n              state: ${JSON.stringify(store.getState())}\n            }\n          </script>\n          <!-- 引入同构代码 -->\n          <script src=\"js/index.js\"></script>\n        </body>\n      </html>\n    `;\n  });\n});\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/home/reducer */ \"./src/views/home/reducer.js\");\n/* harmony import */ var _views_about_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/about/reducer */ \"./src/views/about/reducer.js\");\n\n\n\nconst reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _views_home_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  about: _views_about_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst getStore = req => {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer);\n};\nconst getClientStore = () => {\n  // 从服务器端输出的页面上拿到脱水的数据\n  const defaultState = window.context.state; // 当做 store的初始数据（即注水）\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState);\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/views/about/action.js":
/*!***********************************!*\
  !*** ./src/views/about/action.js ***!
  \***********************************/
/*! exports provided: FETCH_ABOUT_DATA, doFetchAboutData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ABOUT_DATA\", function() { return FETCH_ABOUT_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doFetchAboutData\", function() { return doFetchAboutData; });\nconst FETCH_ABOUT_DATA = 'FETCH_ABOUT_DATA';\nconst doFetchAboutData = () => {\n  return {\n    type: FETCH_ABOUT_DATA\n  };\n};\n\n//# sourceURL=webpack:///./src/views/about/action.js?");

/***/ }),

/***/ "./src/views/about/index.jsx":
/*!***********************************!*\
  !*** ./src/views/about/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst About = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"about\");\n};\n\nAbout.loadData = () => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      console.log('load about data');\n      resolve('About data');\n    }, 100);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/views/about/index.jsx?");

/***/ }),

/***/ "./src/views/about/reducer.js":
/*!************************************!*\
  !*** ./src/views/about/reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./src/views/about/action.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = {\n  list: []\n}, action) => {\n  switch (action.type) {\n    case _action__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ABOUT_DATA\"]:\n      const list = [...state.list, 1];\n      return { ...state,\n        list\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/views/about/reducer.js?");

/***/ }),

/***/ "./src/views/home/action.js":
/*!**********************************!*\
  !*** ./src/views/home/action.js ***!
  \**********************************/
/*! exports provided: FETCH_HOME_DATA, doFetchHomeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_HOME_DATA\", function() { return FETCH_HOME_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doFetchHomeData\", function() { return doFetchHomeData; });\nconst FETCH_HOME_DATA = 'FETCH_HOME_DATA';\nconst doFetchHomeData = () => {\n  return {\n    type: FETCH_HOME_DATA\n  };\n};\n\n//# sourceURL=webpack:///./src/views/home/action.js?");

/***/ }),

/***/ "./src/views/home/index.jsx":
/*!**********************************!*\
  !*** ./src/views/home/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./src/views/home/action.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/views/home/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentDidMount() {\n    console.log(this.props.list);\n  }\n\n  handleClick() {\n    alert(111);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleClick\n    }, \"click\"));\n  }\n\n}\n\nHome.loadData = store => store.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__[\"doFetchHomeData\"])());\n\nconst mapStateToProps = state => ({\n  list: state.home.list\n});\n\nconst mapDispatchToProps = dispatch => ({\n  doFetchHomeData: () => {\n    return dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__[\"doFetchHomeData\"])());\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Home));\n\n//# sourceURL=webpack:///./src/views/home/index.jsx?");

/***/ }),

/***/ "./src/views/home/reducer.js":
/*!***********************************!*\
  !*** ./src/views/home/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./src/views/home/action.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = {\n  list: []\n}, action) => {\n  switch (action.type) {\n    case _action__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_HOME_DATA\"]:\n      const list = [...state.list, 1];\n      return { ...state,\n        list\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/views/home/reducer.js?");

/***/ }),

/***/ "./src/views/home/style.scss":
/*!***********************************!*\
  !*** ./src/views/home/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nTypeError: this[MODULE_TYPE] is not a function\\n    at childCompiler.runAsChild (/Users/caicheng/testDir/test-ssr-demo/node_modules/mini-css-extract-plugin/dist/loader.js:141:24)\\n    at compile (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compiler.js:306:11)\\n    at hooks.afterCompile.callAsync.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compiler.js:630:14)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:24:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/Hook.js:154:20)\\n    at compilation.seal.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compiler.js:627:30)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeAssets.callAsync.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compilation.js:1325:35)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeChunkAssets.callAsync.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compilation.js:1316:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.additionalAssets.callAsync.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compilation.js:1311:36)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeTree.callAsync.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compilation.js:1307:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/Hook.js:154:20)\\n    at Compilation.seal (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compilation.js:1244:27)\\n    at hooks.make.callAsync.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compiler.js:624:17)\\n    at _err0 (eval at create (/Users/caicheng/testDir/test-ssr-demo/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:11:1)\\n    at _addModuleChain (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compilation.js:1095:12)\\n    at processModuleDependencies.err (/Users/caicheng/testDir/test-ssr-demo/node_modules/webpack/lib/Compilation.js:1007:9)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/views/home/style.scss?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "stream-to-promise":
/*!************************************!*\
  !*** external "stream-to-promise" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream-to-promise\");\n\n//# sourceURL=webpack:///external_%22stream-to-promise%22?");

/***/ })

/******/ });