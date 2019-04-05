(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(2);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(11);

// CONCATENATED MODULE: ./src/App.js
var _jsxFileName="C:\\Media\\git\\react-fiber-sandbox\\src\\App.js";function App_App(){var _useState=Object(react["useState"])(0),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),count=_useState2[0],setCount=_useState2[1];var fiber=document.getElementById('root')._reactRootContainer._internalRoot;var simpleClickHandler=function simpleClickHandler(){setCount(count+1);console.log('App fiber node',fiber.current.child);debugger;};var multipleClickHandler=function multipleClickHandler(){setCount(1);setCount(2);setCount(3);setCount(4);console.log('App fiber node',fiber.current.child);debugger;};var fnClickHandler=function fnClickHandler(){setCount(function(state){return state+1;});setCount(function(state){return state*2;});console.log('App fiber node',fiber.current.child);debugger;};return react_default.a.createElement("div",{className:"App",__source:{fileName:_jsxFileName,lineNumber:30},__self:this},react_default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:31},__self:this},react_default.a.createElement("label",{__source:{fileName:_jsxFileName,lineNumber:32},__self:this},"Current Value: "),react_default.a.createElement("input",{disabled:true,value:count,__source:{fileName:_jsxFileName,lineNumber:33},__self:this})),react_default.a.createElement("div",{className:"examples",__source:{fileName:_jsxFileName,lineNumber:35},__self:this},react_default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:36},__self:this},react_default.a.createElement("h3",{__source:{fileName:_jsxFileName,lineNumber:37},__self:this},"\u5358\u4E00\u306EDispatch"),react_default.a.createElement("pre",{__source:{fileName:_jsxFileName,lineNumber:38},__self:this},"setCount(count + 1);"),react_default.a.createElement("button",{onClick:simpleClickHandler,__source:{fileName:_jsxFileName,lineNumber:41},__self:this},"execute")),react_default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:44},__self:this},react_default.a.createElement("h3",{__source:{fileName:_jsxFileName,lineNumber:45},__self:this},"\u8907\u6570\u306EDispatch"),react_default.a.createElement("pre",{__source:{fileName:_jsxFileName,lineNumber:46},__self:this},"setCount(1);\n            setCount(2);\n            setCount(3);\n            setCount(4);\n            "),react_default.a.createElement("button",{onClick:multipleClickHandler,__source:{fileName:_jsxFileName,lineNumber:53},__self:this},"execute")),react_default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:56},__self:this},react_default.a.createElement("h3",{__source:{fileName:_jsxFileName,lineNumber:57},__self:this},"Action\u306B\u95A2\u6570\u3092\u6307\u5B9A"),react_default.a.createElement("pre",{__source:{fileName:_jsxFileName,lineNumber:58},__self:this},"setCount(state => state + 1);\n            setCount(state => state * 2);\n            "),react_default.a.createElement("button",{onClick:fnClickHandler,__source:{fileName:_jsxFileName,lineNumber:63},__self:this},"execute"))),react_default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:66},__self:this},react_default.a.createElement("h3",{__source:{fileName:_jsxFileName,lineNumber:67},__self:this},"\u5229\u7528\u65B9\u6CD5"),react_default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:68},__self:this},"execute\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30B3\u30FC\u30C9\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"),react_default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:71},__self:this},"Dispatch\u3057\u305F\u76F4\u5F8C\u306BFiber\u30CE\u30FC\u30C9\u3092\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u8868\u793A\u3057\u3001",react_default.a.createElement("code",{__source:{fileName:_jsxFileName,lineNumber:72},__self:this},"debugger;"),"\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002",react_default.a.createElement("br",{__source:{fileName:_jsxFileName,lineNumber:72},__self:this}),"Chrome/Firefox\u7B49\u306EDeveloprTools\u3067\u5024\u306E\u78BA\u8A8D\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002"),react_default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:75},__self:this},"\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9: ",react_default.a.createElement("a",{href:"https://github.com/kamijin-fanta/react-fiber-sandbox/blob/master/src/App.js",__source:{fileName:_jsxFileName,lineNumber:76},__self:this},"https://github.com/kamijin-fanta/react-fiber-sandbox/blob/master/src/App.js"))));}
// CONCATENATED MODULE: ./src/index.js
var src_jsxFileName="C:\\Media\\git\\react-fiber-sandbox\\src\\index.js";react_dom_default.a.render(react_default.a.createElement(App_App,{__source:{fileName:src_jsxFileName,lineNumber:6},__self:undefined}),document.getElementById('root'));

/***/ })
],[[4,1,2]]]);
//# sourceMappingURL=main.02782a27.chunk.js.map