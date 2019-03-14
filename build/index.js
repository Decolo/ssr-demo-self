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

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: baseURL, api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseURL\", function() { return baseURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"api\", function() { return api; });\nconst baseURL = 'http://127.0.0.1:8080';\nconst api = {\n  fetchHomeList: {\n    method: 'GET',\n    url: '/home/list'\n  }\n};\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/routes */ \"./src/routes.jsx\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n\n\n\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_1___default()(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(process.cwd() + '/public')));\napp.use(async ctx => {\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_4__[\"getStore\"])();\n  const promises = [];\n  const mtRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], ctx.request.path); // console.log(mtRoutes)\n  // debugger\n\n  mtRoutes.forEach(item => {\n    if (item.route.loadData) {\n      item.route.loadData(store);\n    }\n  }); // 服务器请求数据，先获取当前页面所需数据，再填充到store\n  // 根据服务端填充的store进行  \n  // await render(ctx, store, routes)\n\n  await Object(_render__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(ctx, store, _routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n});\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.jsx?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var stream_to_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stream-to-promise */ \"stream-to-promise\");\n/* harmony import */ var stream_to_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stream_to_promise__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/routes */ \"./src/routes.jsx\");\n\n\n\n\n\n\n\n\nconst render = (ctx, store, routes) => {\n  return new Promise(resolve => {\n    store.subscribe(async () => {\n      const container = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToNodeStream\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n        store: store\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n        location: ctx.request.path,\n        context: {}\n      }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routes))));\n      ctx.body = `\n          <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n              <meta charset=\"UTF-8\">\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n              <meta httpquiv=\"X-UA-Compatible\" content=\"ie=edge\">\n              <title>测试</title>\n              <link rel=\"stylesheet\" href=\"css/main.css\">\n            </head>\n            <body>\n              <div id=\"root\">${container}</div>\n              <!-- 从服务器端拿到脱水的数据状态 -->\n              <script>\n                window.context = {\n                  state: ${JSON.stringify(store.getState())}\n                }\n              </script>\n              <!-- 引入同构代码 -->\n              <script src=\"js/index.js\"></script>\n            </body>\n          </html>\n        `;\n      resolve();\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"./src/api/index.js\");\n\n\n\nconst fetch = options => {\n  const params = {\n    baseURL: _api__WEBPACK_IMPORTED_MODULE_1__[\"baseURL\"],\n    ...options\n  };\n  const {\n    method\n  } = options;\n\n  if (method.toUpperCase() === 'GET') {\n    params.params = params.data;\n    delete params.data;\n  }\n\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()(params).then(res => {\n    return res.data;\n  }).catch(error => {\n    console.log(error);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetch);\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: REQUEST_HOME_DATA, RECEIVE_HOME_DATA, FETCH_HOME_DATA, doRequestHomeData, doReceiveHomeData, doFetchHomeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_HOME_DATA\", function() { return REQUEST_HOME_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_HOME_DATA\", function() { return RECEIVE_HOME_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_HOME_DATA\", function() { return FETCH_HOME_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doRequestHomeData\", function() { return doRequestHomeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doReceiveHomeData\", function() { return doReceiveHomeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doFetchHomeData\", function() { return doFetchHomeData; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n\nconst REQUEST_HOME_DATA = 'REQUEST_HOME_DATA';\nconst RECEIVE_HOME_DATA = 'RECEIVE_HOME_DATA';\nconst FETCH_HOME_DATA = 'FETCH_HOME_DATA';\nconst doRequestHomeData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(REQUEST_HOME_DATA);\nconst doReceiveHomeData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(RECEIVE_HOME_DATA);\nconst doFetchHomeData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(FETCH_HOME_DATA);\n\n//# sourceURL=webpack:///./src/store/actions/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saga */ \"./src/store/saga/index.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer/index.js\");\n\n\n\n\nconst sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\nconst getStore = req => {\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware));\n  sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return store;\n};\nconst getClientStore = () => {\n  // 从服务器端输出的页面上拿到脱水的数据\n  const defaultState = window.context.state; // 当做 store的初始数据（即注水）\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware));\n  sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return store;\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducer/index.js":
/*!************************************!*\
  !*** ./src/store/reducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/home/reducer */ \"./src/views/home/reducer.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst reducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  home: _views_home_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/store/reducer/index.js?");

/***/ }),

/***/ "./src/store/saga/index.js":
/*!*********************************!*\
  !*** ./src/store/saga/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_home_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/home/saga */ \"./src/views/home/saga.js\");\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_views_home_saga__WEBPACK_IMPORTED_MODULE_1__[\"watchFetchHomeData\"])()]);\n}\n\n//# sourceURL=webpack:///./src/store/saga/index.js?");

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

/***/ "./src/views/home/index.jsx":
/*!**********************************!*\
  !*** ./src/views/home/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"./src/api/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./src/views/home/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  handleClick() {\n    alert(111);\n  }\n\n  render() {\n    console.log(this.props);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleClick\n    }, \"click\"));\n  }\n\n}\n\nHome.loadData = store => {\n  const params = { ..._api__WEBPACK_IMPORTED_MODULE_3__[\"api\"]['fetchHomeList']\n  };\n  store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"doFetchHomeData\"])(params));\n};\n\nconst mapStateToProps = state => ({\n  state: state\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Home));\n\n//# sourceURL=webpack:///./src/views/home/index.jsx?");

/***/ }),

/***/ "./src/views/home/reducer.js":
/*!***********************************!*\
  !*** ./src/views/home/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst homeData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"handleActions\"])({\n  [_store_actions__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_HOME_DATA\"]]: state => ({ ...state,\n    isLoading: true\n  }),\n  [_store_actions__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_HOME_DATA\"]]: (state, action) => {\n    // console.log(5)\n    return { ...state,\n      isLoading: false,\n      data: action.payload\n    };\n  }\n}, {\n  isLoading: false,\n  data: []\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeData);\n\n//# sourceURL=webpack:///./src/views/home/reducer.js?");

/***/ }),

/***/ "./src/views/home/saga.js":
/*!********************************!*\
  !*** ./src/views/home/saga.js ***!
  \********************************/
/*! exports provided: watchFetchHomeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchFetchHomeData\", function() { return watchFetchHomeData; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/server/request */ \"./src/server/request.js\");\n\n\n\n\nfunction* fetchHomeDataAsync(action) {\n  console.log(3);\n  const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_server_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"], action.payload);\n  console.log(4);\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_actions__WEBPACK_IMPORTED_MODULE_1__[\"doReceiveHomeData\"])(data));\n}\n\nfunction* watchFetchHomeData() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_store_actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_HOME_DATA\"], fetchHomeDataAsync);\n}\n\n//# sourceURL=webpack:///./src/views/home/saga.js?");

/***/ }),

/***/ "./src/views/home/style.scss":
/*!***********************************!*\
  !*** ./src/views/home/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/views/home/style.scss?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

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

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-actions\");\n\n//# sourceURL=webpack:///external_%22redux-actions%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

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