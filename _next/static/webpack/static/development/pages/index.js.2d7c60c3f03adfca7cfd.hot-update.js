webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Emoji */ "./components/Emoji.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ "./hooks/index.js");
var _jsxFileName = "/Users/kengeo/Projects/kg-dev/www/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function getUniswapLinkStyles() {
  return {
    styles: __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2583444815",
      __self: this
    }, "a.jsx-2583444815:hover{color:#dc6be5 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5nZW8vUHJvamVjdHMva2ctZGV2L3d3dy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFHZ0MseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5nZW8vUHJvamVjdHMva2ctZGV2L3d3dy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdzdHlsZWQtanN4L2NzcydcbmltcG9ydCBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJ1xuXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluaydcbmltcG9ydCB7IHVzZUJvZHlLZXlEb3duIH0gZnJvbSAnLi4vaG9va3MnXG5cbmZ1bmN0aW9uIGdldFVuaXN3YXBMaW5rU3R5bGVzKCkge1xuICByZXR1cm4gcmVzb2x2ZWBcbiAgICBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZGM2YmU1ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgXG59XG5cbmZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IFtFLCBzZXRFXSA9IHVzZVN0YXRlKCdFJylcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlcyB9ID0gZ2V0VW5pc3dhcExpbmtTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgU29mdHdhcmUgRW5naW5lZXIgJiBQcm9kdWN0IERlc2lnbmVyIGF0IDxMaW5rIGhyZWY9XCJodHRwczovL2NhcmkuZ2RcIj5DYXJpPC9MaW5rPiBidWlsZGluZyBpZGVudGl0eSBhcyBhXG4gICAgICAgICAgc2VydmljZSBwcm9kdWN0cyBmb3IgZ292ZXJubWVudHMgYW5kIGV4cGxvcmluZyB0aGUgcG9zc2liaWxpdGllcyBvZiBibG9ja2NoYWluIHRlY2hub2xvZ3kuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDM+RXhwZXJpZW5jZTwvaDM+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cucGVha3NoaWZ0LmNvbS9cIj5QZWFrIFNoaWZ0PC9MaW5rPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBGdWxsc3RhY2sgZGV2ZWxvcGVyICZtaWRkb3Q7IEJ1aWx0IHByb2plY3RzIHdpdGggYSB2YXJpZXR5IG9mIHRlY2hub2xvZ2llcy5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+Tm9kZS5qcywgSmF2YXNjcmlwdCwgUGF5bWVudHMgQVBJcywgQmxvY2tjaGFpbjwvY29kZT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoMz5Ta2lsbHM8L2gzPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRnJvbnRlbmRcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+UmVhY3QuanMsIEphdmFzY3JpcHQsIEhUTUwsIENTUywgU0FTUzwvY29kZT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEJhY2tlbmRcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+Tm9kZS5qcywgUEhQPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRGVzaWduXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxjb2RlPlVzZXIgSW50ZXJmYWNlIERlaXNnbiwgUHJvdG90eXBpbmcsIGFuZCBXaXJlZnJhbWVzIHVzaW5nIEZpZ21hPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGgzPldyaXRpbmc8L2gzPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9jYXJpLWdkL2RpZ2l0YWwtdHJhbnNmb3JtYXRpb24taW4tdGhlLWNhcmliYmVhbi1jZTUyZmFkZDhhMWZcIj5cbiAgICAgICAgICAgICAgRGlnaXRhbCB0cmFuc2Zvcm1hdGlvbiBpbiB0aGUgQ2FyaWJiZWFuIC0gSG93IHRvIHByb3RlY3QgY2l0aXplbiBkYXRhIGFuZCBpbmNyZWFzZSByZXNpbGllbmNlIGFjcm9zcyB0aGVcbiAgICAgICAgICAgICAgcmVnaW9uXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxjb2RlPjIwMjAtMDEtMjI8L2NvZGU+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubm93Z3JlbmFkYS5jb20vMjAxOS8wNC90aGUtc3RhdGUtb2YtYnVzaW5lc3MtaW4tZ3JlbmFkYS9cIj5cbiAgICAgICAgICAgICAgVGhlIHN0YXRlIG9mIGJ1c2luZXNzIGluIEdyZW5hZGFcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+MjAxOS0wNC0xMzwvY29kZT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0NXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICBtYXJnaW46IDAgMnJlbSAwIDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29sdW1iaWE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjYjlkOWViO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVuaXN3YXAge1xuICAgICAgICAgIGNvbG9yOiAjZGM2YmU1O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpc3Qge1xuICAgICAgICAgIG1hcmdpbjogMCAycmVtIDAgMDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3QgbGkgOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBmdW5jdGlvbiBjb3B5RW1haWwoKSB7XG4gICAgY29weSgna2Vucm95QGdhcmFrYW1pLmNvbScpXG4gICAgc2V0Q29waWVkKHRydWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb3BpZWQpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q29waWVkKGZhbHNlKVxuICAgICAgfSwgNTAwKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjb3BpZWRdKVxuXG4gIHVzZUJvZHlLZXlEb3duKCdjJywgY29weUVtYWlsLCBjb3BpZWQgPT09IHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstd3JhcHBlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2VuZ2VvXCI+R2l0SHViPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXdyYXBwZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9rZW5nZW9cIj5Ud2l0dGVyPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXdyYXBwZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwibWFpbHRvOmtlbnJveUBnYXJha2FtaS5jb21cIj5FbWFpbDwvTGluaz5cbiAgICAgICAgICB7LyogPEVtb2ppXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLjVyZW0nIH19XG4gICAgICAgICAgICBzaXplPXsnMS4yNXJlbSd9XG4gICAgICAgICAgICBlbW9qaT17Y29waWVkID8gJ/CfkY3wn4+7JyA6ICfwn5OLJ31cbiAgICAgICAgICAgIGxhYmVsPXtjb3BpZWQgPyAnY29waWVkJyA6ICdjb3B5J31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyFjb3BpZWQgJiYgY29weUVtYWlsfVxuICAgICAgICAgIC8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q29udGVudCAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjc1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubGluay13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kengeo/Projects/kg-dev/www/pages/index.js */"),
    className: "jsx-2583444815"
  };
}

function Content() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('E'),
      E = _useState[0],
      setE = _useState[1];

  var _getUniswapLinkStyles = getUniswapLinkStyles(),
      className = _getUniswapLinkStyles.className,
      styles = _getUniswapLinkStyles.styles;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1709236231" + " " + "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1709236231" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Software Engineer & Product Designer at ", __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://cari.gd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Cari"), " building identity as a service products for governments and exploring the possibilities of blockchain technology.")), __jsx("div", {
    className: "jsx-1709236231" + " " + "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1709236231" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Experience")), __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://www.peakshift.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Peak Shift"), __jsx("br", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), "Fullstack developer \xB7 Built projects with a variety of technologies.", __jsx("br", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("code", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Node.js, Javascript, Payments APIs, Blockchain")))), __jsx("div", {
    className: "jsx-1709236231" + " " + "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1709236231" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Skills")), __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Frontend", __jsx("br", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("code", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "React.js, Javascript, HTML, CSS, SASS")), __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Backend", __jsx("br", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("code", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Node.js, PHP")), __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Design", __jsx("br", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("code", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "User Interface Deisgn, Prototyping, and Wireframes using Figma")))), __jsx("div", {
    className: "jsx-1709236231" + " " + "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1709236231" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Writing")), __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://medium.com/cari-gd/digital-transformation-in-the-caribbean-ce52fadd8a1f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Digital transformation in the Caribbean - How to protect citizen data and increase resilience across the region"), __jsx("br", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("code", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "2020-01-22")), __jsx("li", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://www.nowgrenada.com/2019/04/the-state-of-business-in-grenada/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "The state of business in Grenada"), __jsx("br", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("code", {
    className: "jsx-1709236231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "2019-04-13")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1709236231",
    __self: this
  }, ".section.jsx-1709236231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;max-width:45rem;margin-bottom:2rem;}.text.jsx-1709236231{word-wrap:break-word;margin:0 2rem 0 0;text-align:left;list-style-position:inside;}.columbia.jsx-1709236231:hover{color:#b9d9eb;}.uniswap.jsx-1709236231{color:#dc6be5;}.list.jsx-1709236231{margin:0 2rem 0 0;list-style-type:none;}.list.jsx-1709236231 li.jsx-1709236231:not(:last-child){margin-bottom:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5nZW8vUHJvamVjdHMva2ctZGV2L3d3dy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RmtCLEFBR3dCLEFBT1EsQUFPUCxBQUlBLEFBSUksQUFJRyxjQVh2QixBQUlBLElBSXVCLEdBZkgsQUFtQnBCLGtCQWxCa0IsQUFlbEIsZ0JBZDZCLG1CQVRSLFFBVXJCLDZEQVRrQixnQkFDRyxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL2tlbmdlby9Qcm9qZWN0cy9rZy1kZXYvd3d3L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnXG5cbmltcG9ydCBFbW9qaSBmcm9tICcuLi9jb21wb25lbnRzL0Vtb2ppJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgdXNlQm9keUtleURvd24gfSBmcm9tICcuLi9ob29rcydcblxuZnVuY3Rpb24gZ2V0VW5pc3dhcExpbmtTdHlsZXMoKSB7XG4gIHJldHVybiByZXNvbHZlYFxuICAgIGE6aG92ZXIge1xuICAgICAgY29sb3I6ICNkYzZiZTUgIWltcG9ydGFudDtcbiAgICB9XG4gIGBcbn1cblxuZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgW0UsIHNldEVdID0gdXNlU3RhdGUoJ0UnKVxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGVzIH0gPSBnZXRVbmlzd2FwTGlua1N0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlciAmIFByb2R1Y3QgRGVzaWduZXIgYXQgPExpbmsgaHJlZj1cImh0dHBzOi8vY2FyaS5nZFwiPkNhcmk8L0xpbms+IGJ1aWxkaW5nIGlkZW50aXR5IGFzIGFcbiAgICAgICAgICBzZXJ2aWNlIHByb2R1Y3RzIGZvciBnb3Zlcm5tZW50cyBhbmQgZXhwbG9yaW5nIHRoZSBwb3NzaWJpbGl0aWVzIG9mIGJsb2NrY2hhaW4gdGVjaG5vbG9neS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoMz5FeHBlcmllbmNlPC9oMz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5wZWFrc2hpZnQuY29tL1wiPlBlYWsgU2hpZnQ8L0xpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEZ1bGxzdGFjayBkZXZlbG9wZXIgJm1pZGRvdDsgQnVpbHQgcHJvamVjdHMgd2l0aCBhIHZhcmlldHkgb2YgdGVjaG5vbG9naWVzLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT5Ob2RlLmpzLCBKYXZhc2NyaXB0LCBQYXltZW50cyBBUElzLCBCbG9ja2NoYWluPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGgzPlNraWxsczwvaDM+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBGcm9udGVuZFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT5SZWFjdC5qcywgSmF2YXNjcmlwdCwgSFRNTCwgQ1NTLCBTQVNTPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQmFja2VuZFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT5Ob2RlLmpzLCBQSFA8L2NvZGU+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+VXNlciBJbnRlcmZhY2UgRGVpc2duLCBQcm90b3R5cGluZywgYW5kIFdpcmVmcmFtZXMgdXNpbmcgRmlnbWE8L2NvZGU+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDM+V3JpdGluZzwvaDM+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL2NhcmktZ2QvZGlnaXRhbC10cmFuc2Zvcm1hdGlvbi1pbi10aGUtY2FyaWJiZWFuLWNlNTJmYWRkOGExZlwiPlxuICAgICAgICAgICAgICBEaWdpdGFsIHRyYW5zZm9ybWF0aW9uIGluIHRoZSBDYXJpYmJlYW4gLSBIb3cgdG8gcHJvdGVjdCBjaXRpemVuIGRhdGEgYW5kIGluY3JlYXNlIHJlc2lsaWVuY2UgYWNyb3NzIHRoZVxuICAgICAgICAgICAgICByZWdpb25cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+MjAyMC0wMS0yMjwvY29kZT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5ub3dncmVuYWRhLmNvbS8yMDE5LzA0L3RoZS1zdGF0ZS1vZi1idXNpbmVzcy1pbi1ncmVuYWRhL1wiPlxuICAgICAgICAgICAgICBUaGUgc3RhdGUgb2YgYnVzaW5lc3MgaW4gR3JlbmFkYVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT4yMDE5LTA0LTEzPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG1hcmdpbjogMCAycmVtIDAgMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bWJpYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNiOWQ5ZWI7XG4gICAgICAgIH1cblxuICAgICAgICAudW5pc3dhcCB7XG4gICAgICAgICAgY29sb3I6ICNkYzZiZTU7XG4gICAgICAgIH1cblxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgbWFyZ2luOiAwIDJyZW0gMCAwO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGlzdCBsaSA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGNvcHlFbWFpbCgpIHtcbiAgICBjb3B5KCdrZW5yb3lAZ2FyYWthbWkuY29tJylcbiAgICBzZXRDb3BpZWQodHJ1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvcGllZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDb3BpZWQoZmFsc2UpXG4gICAgICB9LCA1MDApXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2NvcGllZF0pXG5cbiAgdXNlQm9keUtleURvd24oJ2MnLCBjb3B5RW1haWwsIGNvcGllZCA9PT0gdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZW5nZW9cIj5HaXRIdWI8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstd3JhcHBlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2tlbmdlb1wiPlR3aXR0ZXI8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstd3JhcHBlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86a2Vucm95QGdhcmFrYW1pLmNvbVwiPkVtYWlsPC9MaW5rPlxuICAgICAgICAgIHsvKiA8RW1vamlcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcuNXJlbScgfX1cbiAgICAgICAgICAgIHNpemU9eycxLjI1cmVtJ31cbiAgICAgICAgICAgIGVtb2ppPXtjb3BpZWQgPyAn8J+RjfCfj7snIDogJ/Cfk4snfVxuICAgICAgICAgICAgbGFiZWw9e2NvcGllZCA/ICdjb3BpZWQnIDogJ2NvcHknfVxuICAgICAgICAgICAgb25DbGljaz17IWNvcGllZCAmJiBjb3B5RW1haWx9XG4gICAgICAgICAgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDb250ZW50IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNzVyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/kengeo/Projects/kg-dev/www/pages/index.js */"));
}

function Main() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      copied = _useState2[0],
      setCopied = _useState2[1];

  function copyEmail() {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()('kenroy@garakami.com');
    setCopied(true);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (copied) {
      var timeout = setTimeout(function () {
        setCopied(false);
      }, 500);
      return function () {
        clearTimeout(timeout);
      };
    }
  }, [copied]);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useBodyKeyDown"])('c', copyEmail, copied === true);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "jsx-897494632" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-897494632" + " " + "link-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://github.com/kengeo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "GitHub")), __jsx("div", {
    className: "jsx-897494632" + " " + "link-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://twitter.com/kengeo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Twitter")), __jsx("div", {
    className: "jsx-897494632" + " " + "link-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "mailto:kenroy@garakami.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Email"))), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "897494632",
    __self: this
  }, ".links.jsx-897494632{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:-2rem;margin-right:-0.75rem;margin-bottom:4rem;}.link-wrapper.jsx-897494632{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:1rem;margin-right:0.75rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5nZW8vUHJvamVjdHMva2ctZGV2L3d3dy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5S2tCLEFBR3dCLEFBT0EsMEVBTkksQUFPRCxnQkFDSyxDQVBDLG9CQVF4QixFQVBxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL2tlbmdlby9Qcm9qZWN0cy9rZy1kZXYvd3d3L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnXG5cbmltcG9ydCBFbW9qaSBmcm9tICcuLi9jb21wb25lbnRzL0Vtb2ppJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgdXNlQm9keUtleURvd24gfSBmcm9tICcuLi9ob29rcydcblxuZnVuY3Rpb24gZ2V0VW5pc3dhcExpbmtTdHlsZXMoKSB7XG4gIHJldHVybiByZXNvbHZlYFxuICAgIGE6aG92ZXIge1xuICAgICAgY29sb3I6ICNkYzZiZTUgIWltcG9ydGFudDtcbiAgICB9XG4gIGBcbn1cblxuZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3QgW0UsIHNldEVdID0gdXNlU3RhdGUoJ0UnKVxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGVzIH0gPSBnZXRVbmlzd2FwTGlua1N0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlciAmIFByb2R1Y3QgRGVzaWduZXIgYXQgPExpbmsgaHJlZj1cImh0dHBzOi8vY2FyaS5nZFwiPkNhcmk8L0xpbms+IGJ1aWxkaW5nIGlkZW50aXR5IGFzIGFcbiAgICAgICAgICBzZXJ2aWNlIHByb2R1Y3RzIGZvciBnb3Zlcm5tZW50cyBhbmQgZXhwbG9yaW5nIHRoZSBwb3NzaWJpbGl0aWVzIG9mIGJsb2NrY2hhaW4gdGVjaG5vbG9neS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoMz5FeHBlcmllbmNlPC9oMz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5wZWFrc2hpZnQuY29tL1wiPlBlYWsgU2hpZnQ8L0xpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEZ1bGxzdGFjayBkZXZlbG9wZXIgJm1pZGRvdDsgQnVpbHQgcHJvamVjdHMgd2l0aCBhIHZhcmlldHkgb2YgdGVjaG5vbG9naWVzLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT5Ob2RlLmpzLCBKYXZhc2NyaXB0LCBQYXltZW50cyBBUElzLCBCbG9ja2NoYWluPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGgzPlNraWxsczwvaDM+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBGcm9udGVuZFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT5SZWFjdC5qcywgSmF2YXNjcmlwdCwgSFRNTCwgQ1NTLCBTQVNTPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQmFja2VuZFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT5Ob2RlLmpzLCBQSFA8L2NvZGU+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+VXNlciBJbnRlcmZhY2UgRGVpc2duLCBQcm90b3R5cGluZywgYW5kIFdpcmVmcmFtZXMgdXNpbmcgRmlnbWE8L2NvZGU+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDM+V3JpdGluZzwvaDM+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL2NhcmktZ2QvZGlnaXRhbC10cmFuc2Zvcm1hdGlvbi1pbi10aGUtY2FyaWJiZWFuLWNlNTJmYWRkOGExZlwiPlxuICAgICAgICAgICAgICBEaWdpdGFsIHRyYW5zZm9ybWF0aW9uIGluIHRoZSBDYXJpYmJlYW4gLSBIb3cgdG8gcHJvdGVjdCBjaXRpemVuIGRhdGEgYW5kIGluY3JlYXNlIHJlc2lsaWVuY2UgYWNyb3NzIHRoZVxuICAgICAgICAgICAgICByZWdpb25cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGNvZGU+MjAyMC0wMS0yMjwvY29kZT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5ub3dncmVuYWRhLmNvbS8yMDE5LzA0L3RoZS1zdGF0ZS1vZi1idXNpbmVzcy1pbi1ncmVuYWRhL1wiPlxuICAgICAgICAgICAgICBUaGUgc3RhdGUgb2YgYnVzaW5lc3MgaW4gR3JlbmFkYVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Y29kZT4yMDE5LTA0LTEzPC9jb2RlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG1hcmdpbjogMCAycmVtIDAgMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bWJpYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNiOWQ5ZWI7XG4gICAgICAgIH1cblxuICAgICAgICAudW5pc3dhcCB7XG4gICAgICAgICAgY29sb3I6ICNkYzZiZTU7XG4gICAgICAgIH1cblxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgbWFyZ2luOiAwIDJyZW0gMCAwO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGlzdCBsaSA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGNvcHlFbWFpbCgpIHtcbiAgICBjb3B5KCdrZW5yb3lAZ2FyYWthbWkuY29tJylcbiAgICBzZXRDb3BpZWQodHJ1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvcGllZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDb3BpZWQoZmFsc2UpXG4gICAgICB9LCA1MDApXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2NvcGllZF0pXG5cbiAgdXNlQm9keUtleURvd24oJ2MnLCBjb3B5RW1haWwsIGNvcGllZCA9PT0gdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZW5nZW9cIj5HaXRIdWI8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstd3JhcHBlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2tlbmdlb1wiPlR3aXR0ZXI8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstd3JhcHBlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86a2Vucm95QGdhcmFrYW1pLmNvbVwiPkVtYWlsPC9MaW5rPlxuICAgICAgICAgIHsvKiA8RW1vamlcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcuNXJlbScgfX1cbiAgICAgICAgICAgIHNpemU9eycxLjI1cmVtJ31cbiAgICAgICAgICAgIGVtb2ppPXtjb3BpZWQgPyAn8J+RjfCfj7snIDogJ/Cfk4snfVxuICAgICAgICAgICAgbGFiZWw9e2NvcGllZCA/ICdjb3BpZWQnIDogJ2NvcHknfVxuICAgICAgICAgICAgb25DbGljaz17IWNvcGllZCAmJiBjb3B5RW1haWx9XG4gICAgICAgICAgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDb250ZW50IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNzVyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/kengeo/Projects/kg-dev/www/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.2d7c60c3f03adfca7cfd.hot-update.js.map