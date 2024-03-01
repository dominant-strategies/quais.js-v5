"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports._decode = exports.encode = exports._encode = void 0;
//See: https://github.com/ethereum/wiki/wiki/RLP
var bytes_1 = require("@quais/bytes");
// const messages = require('./binary/proto_block_pb.js');
//import from proto-block
var Proto = __importStar(require("./proto-block"));
function _encode(transaction) {
    // const message = new messages.ProtoTransaction();
    // message.setNonce(transaction.nonce);
    // message.setGasPrice(transaction.gasPrice);
    // message.setGasLimit(transaction.gasLimit);
    // message.setTo(transaction.to);
    // message.setValue(transaction.value);
    // message.setData(transaction.data);
    // message.setV(transaction.v);
    // message.setR(transaction.r);
    // message.setS(transaction.s);
    // message.setChainId(transaction.chainId);
    // message.setAccessList(transaction.accessList);
    // const result = message.serializeBinary();
    console.log('proto tx: ', transaction);
    var tx = Proto.block.ProtoTransaction.fromObject(transaction);
    return tx.serialize();
}
exports._encode = _encode;
function encode(object) {
    return (0, bytes_1.hexlify)(_encode(object));
}
exports.encode = encode;
function _decode(encodedData) {
    console.log('encodedData: ', encodedData);
    // const message = messages.ProtoTransaction.deserializeBinary(encodedData);
    // const tx = message.toObject();
    var tx = Proto.block.ProtoTransaction.deserialize(encodedData);
    console.log('decoded proto tx: ', tx);
    return tx;
}
exports._decode = _decode;
function decode(data) {
    var bytes = (0, bytes_1.arrayify)(data);
    var decoded = _decode(bytes);
    return decoded;
}
exports.decode = decode;
//# sourceMappingURL=index.js.map