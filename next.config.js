// next.config.js
// const withCSS = require('@zeit/next-css');
// module.exports = withCSS({
// 	cssModules: true
// });

const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withImages(
	withCSS({
		cssModules: true
	})
);
