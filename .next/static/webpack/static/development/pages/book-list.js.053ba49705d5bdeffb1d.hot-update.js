webpackHotUpdate("static\\development\\pages\\book-list.js",{

/***/ "./components/BookList/BookList.js":
/*!*****************************************!*\
  !*** ./components/BookList/BookList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BookList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookList.css */ "./components/BookList/BookList.css");
/* harmony import */ var _BookList_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BookList_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookCard_BookCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BookCard/BookCard */ "./components/BookCard/BookCard.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _static_remote_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/remote.png */ "./static/remote.png");
/* harmony import */ var _static_remote_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_remote_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_papillon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/papillon.png */ "./static/papillon.png");
/* harmony import */ var _static_papillon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_papillon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_dark_tower_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/dark-tower.png */ "./static/dark-tower.png");
/* harmony import */ var _static_dark_tower_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_dark_tower_png__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Justice Otuya\\Documents\\Learn\\Bluebic\\components\\BookList\\BookList.js";





var SearchImg = function SearchImg(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    clipPath: "url(#a)",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.7 11.3c.9-1.2 1.4-2.6 1.4-4.2 0-3.9-3.1-7.1-7-7.1S0 3.2 0 7.1c0 3.9 3.2 7.1 7.1 7.1 1.6 0 3.1-.5 4.2-1.4l3 3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-3-3.1zm-5.6.8c-2.8 0-5.1-2.2-5.1-5S4.3 2 7.1 2s5.1 2.3 5.1 5.1-2.3 5-5.1 5z",
    fill: "#384F7D",
    fillOpacity: ".1",
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "a",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#fff",
    d: "M0 0h16v16H0z",
    __self: this
  }))));
};

SearchImg.defaultProps = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};




var Timeline = function Timeline(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.518 9.92a.483.483 0 0 0-.481.484v8.628h-5.169v-5.416a.483.483 0 0 0-.482-.485H6.614a.483.483 0 0 0-.482.485v4.294c0 .267.216.484.482.484a.483.483 0 0 0 .481-.484V14.1h2.81v4.932H.963V7.178L8.5 1.105l7.717 6.218a.48.48 0 0 0 .677-.075.486.486 0 0 0-.074-.68L8.8.105a.48.48 0 0 0-.602 0L.18 6.567a.485.485 0 0 0-.18.378v12.57c0 .268.216.485.482.485h16.036a.483.483 0 0 0 .482-.484v-9.112a.483.483 0 0 0-.482-.485z",
    fill: "#384F7D",
    fillOpacity: ".45",
    __self: this
  }));
};

Timeline.defaultProps = {
  width: "17",
  height: "20",
  viewBox: "0 0 17 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Books = function Books(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    stroke: "#384F7D",
    strokeMiterlimit: "10",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.04 5v6",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M25.067 5h3.76v16H1.253V5h3.76",
    strokeLinecap: "square",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17.547 3c-1.385 0-2.507.895-2.507 2 0-1.105-1.122-2-2.507-2h-7.52v14h7.52c1.385 0 2.507.895 2.507 2 0-1.105 1.122-2 2.507-2h7.52V3h-7.52z",
    strokeLinecap: "square",
    __self: this
  })));
};

Books.defaultProps = {
  width: "31",
  height: "24",
  viewBox: "0 0 31 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Review = function Review(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    stroke: "#A5B0C4",
    strokeMiterlimit: "10",
    strokeLinecap: "square",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.625 19.375a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5zM15.625 14.375v2.5M14.375 15.625h2.5M9.375 15.379l-4.782 2.513 1.032-6.021L1.25 7.606l6.046-.878L10 1.25l2.704 5.478 6.046.878-1.875 1.828",
    __self: this
  })));
};

Review.defaultProps = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Notifications = function Notifications(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#384F7D",
    fillOpacity: ".45",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.843 18.649L15.7 16.543v-5.2c0-3.216-2.201-5.935-5.202-6.787V1.96C10.498.88 9.602 0 8.5 0 7.398 0 6.502.88 6.502 1.96v2.596c-3 .852-5.202 3.571-5.202 6.786v5.2L.157 18.65c-.22.405-.208.883.033 1.276.241.394.665.63 1.133.63h4.54C5.941 21.915 7.093 23 8.5 23c1.406 0 2.56-1.084 2.637-2.445h4.54c.468 0 .892-.236 1.133-.63.241-.393.253-.87.033-1.276zM7.56 1.96c0-.509.422-.923.941-.923.519 0 .94.414.94.923v2.38a7.37 7.37 0 0 0-1.88 0V1.96zm-5.201 9.382c0-3.322 2.755-6.026 6.142-6.026 3.387 0 6.143 2.704 6.143 6.026v4.772H2.357v-4.772zM8.5 21.962c-.823 0-1.502-.619-1.577-1.407h3.154A1.575 1.575 0 0 1 8.5 21.963zm7.404-2.57a.26.26 0 0 1-.227.126H1.323a.26.26 0 0 1-.233-.382l1.078-1.985h12.664l1.078 1.985a.252.252 0 0 1-.006.256z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M8.5 6.698c-2.61 0-4.734 2.084-4.734 4.644 0 .287.237.519.529.519a.524.524 0 0 0 .528-.519c0-1.989 1.65-3.607 3.677-3.607a.524.524 0 0 0 .528-.518.524.524 0 0 0-.528-.519z",
    __self: this
  })));
};

Notifications.defaultProps = {
  width: "17",
  height: "23",
  viewBox: "0 0 17 23",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function BookList() {
  var main = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      header = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      search_image = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.search_image,
      search_label = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.search_label,
      book_search = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.book_search,
      title = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      book_list = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.book_list,
      addBookReview = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.addBookReview,
      menu_bar = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.menu_bar;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "My Book List"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "book-search",
    className: search_label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchImg, {
    className: search_image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: book_search,
    name: "book-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "books reviewed by you"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: book_list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bookName: "Remote: Office Not Required",
    bookAuthor: "Jason Fried",
    bookImage: _static_remote_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bookName: "Papillon",
    bookAuthor: "Henri Charriere",
    bookImage: _static_papillon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bookName: "The Dark Tower:\r\nThe Gunslinger",
    bookAuthor: "Stephen King",
    bookImage: _static_dark_tower_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: addBookReview,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    buttonText: "Add Book Review",
    link: "/add-book-review",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: menu_bar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Timeline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Timeline")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Books, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "My Books")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Review, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Add Review")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Notifications, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Notifications"))));
}

/***/ })

})
//# sourceMappingURL=book-list.js.053ba49705d5bdeffb1d.hot-update.js.map