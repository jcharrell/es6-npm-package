'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var co = require('co');

module.exports = function exportFunction() {
	return co(_regenerator2.default.mark(function mainFunction() {
		return _regenerator2.default.wrap(function mainFunction$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return { response: 'What else do you want me to do for you?  Get to it!' };

					case 2:
						return _context.abrupt('return', _context.sent);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, mainFunction, this);
	})).catch(function errorHandler(err) {
		console.error(err.stack);
		throw err;
	});
};