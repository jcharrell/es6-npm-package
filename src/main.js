'use strict';

const co = require('co');

module.exports = function exportFunction() {
	return co(function* mainFunction() {
		return yield { response: `What else do you want me to do for you?  Get to it!` };
	}).catch(function errorHandler(err) {
		console.error(err.stack);
		throw(err);
	});
};
