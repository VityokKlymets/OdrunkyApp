'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlbumSchema = new _mongoose2.default.Schema({
    images: { type: Array },
    count: { type: Number },
    name: { type: String },
    description: { type: String }
});

var Album = _mongoose2.default.model('Album', AlbumSchema);