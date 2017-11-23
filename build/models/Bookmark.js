'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookmarkSchema = new _mongoose2.default.Schema({
   head: { type: String },
   text: { type: String }
});

var Bookmark = _mongoose2.default.model('Bookmark', BookmarkSchema);