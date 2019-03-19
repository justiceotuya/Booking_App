webpackHotUpdate("styles",{

/***/ "./components/BookList/BookList.css":
/*!******************************************!*\
  !*** ./components/BookList/BookList.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"_2af4k6UvK9fumvedwnp8Ga","bookCard":"_2Olb4-ySIJ-jpx2jgrxhUV","bookCardImage":"_1tIxaRN2KsQzgfDmZ7oHDk","bookCardText":"_3LzlWH7-urkgnCjIrpwqPs","headerText":"_2e3yjVjDxHH_6mnl-NnLIr","paragraphText":"_2_YxxJMOVFm3gcfKpVvahg"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1552990565891");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c19e38d25560f73b3d25.hot-update.js.map