"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports._decode = exports.encode = exports._encode = void 0;
//See: https://github.com/ethereum/wiki/wiki/RLP
var bytes_1 = require("@quais/bytes");
var protoFormats_1 = require("./protoFormats");
var logger_1 = require("@quais/logger");
var _version_1 = require("./_version");
var logger = new logger_1.Logger(_version_1.version);
function _encode(transaction) {
    console.log("transaction _encode", transaction);
    var result = (0, protoFormats_1.encodeProtoTransaction)(transaction);
    console.log("result", result);
    return result;
}
exports._encode = _encode;
function encode(object) {
    return (0, bytes_1.hexlify)(_encode(object));
}
exports.encode = encode;
function _decode(encodedData) {
    return (0, protoFormats_1.decodeProtoTransaction)(encodedData);
}
exports._decode = _decode;
function decode(data) {
    var bytes = (0, bytes_1.arrayify)(data);
    var decoded = _decode(bytes);
    if (decoded.consumed !== bytes.length) {
        logger.throwArgumentError("invalid rlp data", "data", data);
    }
    return decoded.result;
}
exports.decode = decode;
//# sourceMappingURL=protoBuff.js.map