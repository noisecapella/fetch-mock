'use strict';

if (typeof window === 'undefined') {
	throw 'Incorrect fetch-mock: require(\'fetch-mock/src/server\') in nodejs >= 4, or require(\'fetch-mock/es5/server\' in nodejs 0.12.x';
}

const FetchMock = require('./fetch-mock');

module.exports = new FetchMock({
	theGlobal: window,
	Response: window.Response,
	Headers: window.Headers,
	Blob: window.Blob,
	debug: function () {}
});
