webpackHotUpdate("styles",{

/***/ "./components/BookCard/BookCard.css":
/*!******************************************!*\
  !*** ./components/BookCard/BookCard.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bookCard":"_1foLjRyG8H9rk1joPGgpVt","bookCardImage":"_2Nfsu-uvCVJW9hTTHswjNa","bookCardText":"_2-ZaWyS7y5M_l818U7d7Na","headerText":"BSw8bZlhASlbz71RPms2t","paragraphText":"_3-EN91SO7so-oKILFY7kix"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1553001770724");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.d264dfc3c103e489cad9.hot-update.js.map