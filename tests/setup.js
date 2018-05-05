// Polyfill DOM env for mithril
global.window = require("mithril/test-utils/browserMock.js")();
global.document = window.document;
