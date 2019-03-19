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
/* harmony import */ var _static_remote_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/remote.png */ "./static/remote.png");
/* harmony import */ var _static_remote_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_remote_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_papillon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/papillon.png */ "./static/papillon.png");
/* harmony import */ var _static_papillon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_papillon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_dark_tower_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/dark-tower.png */ "./static/dark-tower.png");
/* harmony import */ var _static_dark_tower_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_dark_tower_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BookCard/BookCard */ "./components/BookCard/BookCard.js");

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




function BookList() {
  var main = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      header = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      search_image = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.search_image,
      book_search = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.book_search,
      title = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      book_list = _BookList_css__WEBPACK_IMPORTED_MODULE_2___default.a.book_list;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "My Book List"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "book-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchImg, {
    className: search_image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: book_search,
    name: "book-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "books reviewed by you"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: book_list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bookName: "Remote: Office Not Required",
    bookAuthor: "Jason Fried",
    bookImage: _static_dark_tower_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bookName: "Remote: Office Not Required",
    bookAuthor: "Jason Fried",
    bookImage: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_remote_png__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bookName: "Remote: Office Not Required",
    bookAuthor: "Jason Fried",
    bookImage: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_remote_png__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bookName: "Papillon",
    bookAuthor: "Henri Charriere",
    bookImage: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_papillon_png__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bookName: "Papillon",
    bookAuthor: "Henri Charriere",
    bookImage: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_papillon_png__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bookName: "Papillon",
    bookAuthor: "Henri Charriere",
    bookImage: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_papillon_png__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bookName: "The Dark Tower:\r\nThe Gunslinger",
    bookAuthor: "Stephen King",
    bookImage: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_dark_tower_png__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
}

/***/ }),

/***/ "./static/remote.png":
/*!***************************!*\
  !*** ./static/remote.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

})
//# sourceMappingURL=book-list.js.d75dd6cd3654659f14e8.hot-update.js.map