webpackHotUpdate("styles",{

/***/ "./components/BookList/BookList.css":
/*!******************************************!*\
  !*** ./components/BookList/BookList.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"_2af4k6UvK9fumvedwnp8Ga","bookCard":"_2Olb4-ySIJ-jpx2jgrxhUV","headerText":"_2e3yjVjDxHH_6mnl-NnLIr"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552986874114");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c50f32ba9eb3c168d0da.hot-update.js.map