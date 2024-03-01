"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeProtoTxOuts = exports.encodeProtoTxOuts = exports.decodeProtoTxIns = exports.encodeProtoTxIns = exports.decodeProtoPendingEtxsRollup = exports.encodeProtoPendingEtxsRollup = exports.decodeProtoPendingEtxs = exports.encodeProtoPendingEtxs = exports.decodeProtoEtxSetEntry = exports.encodeProtoEtxSetEntry = exports.decodeProtoEtxSet = exports.encodeProtoEtxSet = exports.decodeProtoTermini = exports.encodeProtoTermini = exports.decodeProtoPendingHeader = exports.encodeProtoPendingHeader = exports.decodeProtoLogsForStorage = exports.encodeProtoLogsForStorage = exports.decodeProtoLogForStorage = exports.encodeProtoLogForStorage = exports.decodeProtoReceiptsForStorage = exports.encodeProtoReceiptsForStorage = exports.decodeProtoReceiptForStorage = exports.encodeProtoReceiptForStorage = exports.decodeProtoAccessTuple = exports.encodeProtoAccessTuple = exports.decodeProtoAccessList = exports.encodeProtoAccessList = exports.decodeProtoManifest = exports.encodeProtoManifest = exports.decodeProtoHeaders = exports.encodeProtoHeaders = exports.decodeProtoTransactions = exports.encodeProtoTransactions = exports.decodeProtoTransaction = exports.encodeProtoTransaction = exports.decodeProtoHeader = exports.encodeProtoHeader = exports.decodeProtoBody = exports.encodeProtoBody = exports.decodeProtoBlock = exports.encodeProtoBlock = exports.decodeProtoAddress = exports.encodeProtoAddress = exports.decodeProtoHashes = exports.encodeProtoHashes = exports.decodeProtoHash = exports.encodeProtoHash = exports.decodeProtoLocation = exports.encodeProtoLocation = void 0;
exports.writeVarint64ZigZag = exports.readVarint64ZigZag = exports.writeVarint32ZigZag = exports.readVarint32ZigZag = exports.writeInt64 = exports.readInt64 = exports.writeDouble = exports.readDouble = exports.writeFloat = exports.readFloat = exports.writeString = exports.readString = exports.intToLong = exports.longToString = exports.stringToLong = exports.decodeProtoTxOut = exports.encodeProtoTxOut = exports.decodeProtoOutPoint = exports.encodeProtoOutPoint = exports.decodeProtoTxIn = exports.encodeProtoTxIn = void 0;
function encodeProtoLocation(message) {
    var bb = popByteBuffer();
    _encodeProtoLocation(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoLocation = encodeProtoLocation;
function _encodeProtoLocation(message, bb) {
    // optional bytes value = 1;
    var $value = message.value;
    if ($value !== undefined) {
        writeVarint32(bb, 10);
        writeVarint32(bb, $value.length), writeBytes(bb, $value);
    }
}
function decodeProtoLocation(binary) {
    return _decodeProtoLocation(wrapByteBuffer(binary));
}
exports.decodeProtoLocation = decodeProtoLocation;
function _decodeProtoLocation(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional bytes value = 1;
            case 1: {
                message.value = readBytes(bb, readVarint32(bb));
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoHash(message) {
    var bb = popByteBuffer();
    _encodeProtoHash(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoHash = encodeProtoHash;
function _encodeProtoHash(message, bb) {
    // optional bytes value = 1;
    var $value = message.value;
    if ($value !== undefined) {
        writeVarint32(bb, 10);
        writeVarint32(bb, $value.length), writeBytes(bb, $value);
    }
}
function decodeProtoHash(binary) {
    return _decodeProtoHash(wrapByteBuffer(binary));
}
exports.decodeProtoHash = decodeProtoHash;
function _decodeProtoHash(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional bytes value = 1;
            case 1: {
                message.value = readBytes(bb, readVarint32(bb));
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoHashes(message) {
    var bb = popByteBuffer();
    _encodeProtoHashes(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoHashes = encodeProtoHashes;
function _encodeProtoHashes(message, bb) {
    // repeated ProtoHash hashes = 1;
    var array$hashes = message.hashes;
    if (array$hashes !== undefined) {
        for (var _i = 0, array$hashes_1 = array$hashes; _i < array$hashes_1.length; _i++) {
            var value = array$hashes_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoHashes(binary) {
    return _decodeProtoHashes(wrapByteBuffer(binary));
}
exports.decodeProtoHashes = decodeProtoHashes;
function _decodeProtoHashes(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoHash hashes = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.hashes || (message.hashes = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoAddress(message) {
    var bb = popByteBuffer();
    _encodeProtoAddress(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoAddress = encodeProtoAddress;
function _encodeProtoAddress(message, bb) {
    // optional bytes value = 1;
    var $value = message.value;
    if ($value !== undefined) {
        writeVarint32(bb, 10);
        writeVarint32(bb, $value.length), writeBytes(bb, $value);
    }
}
function decodeProtoAddress(binary) {
    return _decodeProtoAddress(wrapByteBuffer(binary));
}
exports.decodeProtoAddress = decodeProtoAddress;
function _decodeProtoAddress(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional bytes value = 1;
            case 1: {
                message.value = readBytes(bb, readVarint32(bb));
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoBlock(message) {
    var bb = popByteBuffer();
    _encodeProtoBlock(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoBlock = encodeProtoBlock;
function _encodeProtoBlock(message, bb) {
    // optional ProtoHeader header = 1;
    var $header = message.header;
    if ($header !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoHeader($header, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoBody body = 2;
    var $body = message.body;
    if ($body !== undefined) {
        writeVarint32(bb, 18);
        var nested = popByteBuffer();
        _encodeProtoBody($body, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
}
function decodeProtoBlock(binary) {
    return _decodeProtoBlock(wrapByteBuffer(binary));
}
exports.decodeProtoBlock = decodeProtoBlock;
function _decodeProtoBlock(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoHeader header = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.header = _decodeProtoHeader(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoBody body = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                message.body = _decodeProtoBody(bb);
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoBody(message) {
    var bb = popByteBuffer();
    _encodeProtoBody(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoBody = encodeProtoBody;
function _encodeProtoBody(message, bb) {
    // optional ProtoTransactions txs = 1;
    var $txs = message.txs;
    if ($txs !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoTransactions($txs, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoHeaders uncles = 2;
    var $uncles = message.uncles;
    if ($uncles !== undefined) {
        writeVarint32(bb, 18);
        var nested = popByteBuffer();
        _encodeProtoHeaders($uncles, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoTransactions etxs = 3;
    var $etxs = message.etxs;
    if ($etxs !== undefined) {
        writeVarint32(bb, 26);
        var nested = popByteBuffer();
        _encodeProtoTransactions($etxs, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoManifest manifest = 4;
    var $manifest = message.manifest;
    if ($manifest !== undefined) {
        writeVarint32(bb, 34);
        var nested = popByteBuffer();
        _encodeProtoManifest($manifest, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
}
function decodeProtoBody(binary) {
    return _decodeProtoBody(wrapByteBuffer(binary));
}
exports.decodeProtoBody = decodeProtoBody;
function _decodeProtoBody(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoTransactions txs = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.txs = _decodeProtoTransactions(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoHeaders uncles = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                message.uncles = _decodeProtoHeaders(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoTransactions etxs = 3;
            case 3: {
                var limit = pushTemporaryLength(bb);
                message.etxs = _decodeProtoTransactions(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoManifest manifest = 4;
            case 4: {
                var limit = pushTemporaryLength(bb);
                message.manifest = _decodeProtoManifest(bb);
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoHeader(message) {
    var bb = popByteBuffer();
    _encodeProtoHeader(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoHeader = encodeProtoHeader;
function _encodeProtoHeader(message, bb) {
    // repeated ProtoHash parent_hash = 1;
    var array$parent_hash = message.parent_hash;
    if (array$parent_hash !== undefined) {
        for (var _i = 0, array$parent_hash_1 = array$parent_hash; _i < array$parent_hash_1.length; _i++) {
            var value = array$parent_hash_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
    // optional ProtoHash uncle_hash = 2;
    var $uncle_hash = message.uncle_hash;
    if ($uncle_hash !== undefined) {
        writeVarint32(bb, 18);
        var nested = popByteBuffer();
        _encodeProtoHash($uncle_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional bytes coinbase = 3;
    var $coinbase = message.coinbase;
    if ($coinbase !== undefined) {
        writeVarint32(bb, 26);
        writeVarint32(bb, $coinbase.length), writeBytes(bb, $coinbase);
    }
    // optional ProtoHash root = 4;
    var $root = message.root;
    if ($root !== undefined) {
        writeVarint32(bb, 34);
        var nested = popByteBuffer();
        _encodeProtoHash($root, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoHash tx_hash = 5;
    var $tx_hash = message.tx_hash;
    if ($tx_hash !== undefined) {
        writeVarint32(bb, 42);
        var nested = popByteBuffer();
        _encodeProtoHash($tx_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoHash etx_hash = 6;
    var $etx_hash = message.etx_hash;
    if ($etx_hash !== undefined) {
        writeVarint32(bb, 50);
        var nested = popByteBuffer();
        _encodeProtoHash($etx_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoHash etx_rollup_hash = 7;
    var $etx_rollup_hash = message.etx_rollup_hash;
    if ($etx_rollup_hash !== undefined) {
        writeVarint32(bb, 58);
        var nested = popByteBuffer();
        _encodeProtoHash($etx_rollup_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // repeated ProtoHash manifest_hash = 8;
    var array$manifest_hash = message.manifest_hash;
    if (array$manifest_hash !== undefined) {
        for (var _a = 0, array$manifest_hash_1 = array$manifest_hash; _a < array$manifest_hash_1.length; _a++) {
            var value = array$manifest_hash_1[_a];
            writeVarint32(bb, 66);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
    // optional ProtoHash receipt_hash = 9;
    var $receipt_hash = message.receipt_hash;
    if ($receipt_hash !== undefined) {
        writeVarint32(bb, 74);
        var nested = popByteBuffer();
        _encodeProtoHash($receipt_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional bytes difficulty = 10;
    var $difficulty = message.difficulty;
    if ($difficulty !== undefined) {
        writeVarint32(bb, 82);
        writeVarint32(bb, $difficulty.length), writeBytes(bb, $difficulty);
    }
    // repeated bytes parent_entropy = 11;
    var array$parent_entropy = message.parent_entropy;
    if (array$parent_entropy !== undefined) {
        for (var _b = 0, array$parent_entropy_1 = array$parent_entropy; _b < array$parent_entropy_1.length; _b++) {
            var value = array$parent_entropy_1[_b];
            writeVarint32(bb, 90);
            writeVarint32(bb, value.length), writeBytes(bb, value);
        }
    }
    // repeated bytes parent_delta_s = 12;
    var array$parent_delta_s = message.parent_delta_s;
    if (array$parent_delta_s !== undefined) {
        for (var _c = 0, array$parent_delta_s_1 = array$parent_delta_s; _c < array$parent_delta_s_1.length; _c++) {
            var value = array$parent_delta_s_1[_c];
            writeVarint32(bb, 98);
            writeVarint32(bb, value.length), writeBytes(bb, value);
        }
    }
    // repeated bytes number = 13;
    var array$number = message.number;
    if (array$number !== undefined) {
        for (var _d = 0, array$number_1 = array$number; _d < array$number_1.length; _d++) {
            var value = array$number_1[_d];
            writeVarint32(bb, 106);
            writeVarint32(bb, value.length), writeBytes(bb, value);
        }
    }
    // optional uint64 gas_limit = 14;
    var $gas_limit = message.gas_limit;
    if ($gas_limit !== undefined) {
        writeVarint32(bb, 112);
        writeVarint64(bb, $gas_limit);
    }
    // optional uint64 gas_used = 15;
    var $gas_used = message.gas_used;
    if ($gas_used !== undefined) {
        writeVarint32(bb, 120);
        writeVarint64(bb, $gas_used);
    }
    // optional bytes base_fee = 16;
    var $base_fee = message.base_fee;
    if ($base_fee !== undefined) {
        writeVarint32(bb, 130);
        writeVarint32(bb, $base_fee.length), writeBytes(bb, $base_fee);
    }
    // optional ProtoLocation location = 17;
    var $location = message.location;
    if ($location !== undefined) {
        writeVarint32(bb, 138);
        var nested = popByteBuffer();
        _encodeProtoLocation($location, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional uint64 time = 18;
    var $time = message.time;
    if ($time !== undefined) {
        writeVarint32(bb, 144);
        writeVarint64(bb, $time);
    }
    // optional bytes extra = 19;
    var $extra = message.extra;
    if ($extra !== undefined) {
        writeVarint32(bb, 154);
        writeVarint32(bb, $extra.length), writeBytes(bb, $extra);
    }
    // optional ProtoHash mix_hash = 20;
    var $mix_hash = message.mix_hash;
    if ($mix_hash !== undefined) {
        writeVarint32(bb, 162);
        var nested = popByteBuffer();
        _encodeProtoHash($mix_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional uint64 nonce = 21;
    var $nonce = message.nonce;
    if ($nonce !== undefined) {
        writeVarint32(bb, 168);
        writeVarint64(bb, $nonce);
    }
}
function decodeProtoHeader(binary) {
    return _decodeProtoHeader(wrapByteBuffer(binary));
}
exports.decodeProtoHeader = decodeProtoHeader;
function _decodeProtoHeader(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoHash parent_hash = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.parent_hash || (message.parent_hash = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            // optional ProtoHash uncle_hash = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                message.uncle_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional bytes coinbase = 3;
            case 3: {
                message.coinbase = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional ProtoHash root = 4;
            case 4: {
                var limit = pushTemporaryLength(bb);
                message.root = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoHash tx_hash = 5;
            case 5: {
                var limit = pushTemporaryLength(bb);
                message.tx_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoHash etx_hash = 6;
            case 6: {
                var limit = pushTemporaryLength(bb);
                message.etx_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoHash etx_rollup_hash = 7;
            case 7: {
                var limit = pushTemporaryLength(bb);
                message.etx_rollup_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // repeated ProtoHash manifest_hash = 8;
            case 8: {
                var limit = pushTemporaryLength(bb);
                var values = message.manifest_hash || (message.manifest_hash = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            // optional ProtoHash receipt_hash = 9;
            case 9: {
                var limit = pushTemporaryLength(bb);
                message.receipt_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional bytes difficulty = 10;
            case 10: {
                message.difficulty = readBytes(bb, readVarint32(bb));
                break;
            }
            // repeated bytes parent_entropy = 11;
            case 11: {
                var values = message.parent_entropy || (message.parent_entropy = []);
                values.push(readBytes(bb, readVarint32(bb)));
                break;
            }
            // repeated bytes parent_delta_s = 12;
            case 12: {
                var values = message.parent_delta_s || (message.parent_delta_s = []);
                values.push(readBytes(bb, readVarint32(bb)));
                break;
            }
            // repeated bytes number = 13;
            case 13: {
                var values = message.number || (message.number = []);
                values.push(readBytes(bb, readVarint32(bb)));
                break;
            }
            // optional uint64 gas_limit = 14;
            case 14: {
                message.gas_limit = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional uint64 gas_used = 15;
            case 15: {
                message.gas_used = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional bytes base_fee = 16;
            case 16: {
                message.base_fee = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional ProtoLocation location = 17;
            case 17: {
                var limit = pushTemporaryLength(bb);
                message.location = _decodeProtoLocation(bb);
                bb.limit = limit;
                break;
            }
            // optional uint64 time = 18;
            case 18: {
                message.time = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional bytes extra = 19;
            case 19: {
                message.extra = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional ProtoHash mix_hash = 20;
            case 20: {
                var limit = pushTemporaryLength(bb);
                message.mix_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional uint64 nonce = 21;
            case 21: {
                message.nonce = readVarint64(bb, /* unsigned */ true);
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoTransaction(message) {
    var bb = popByteBuffer();
    console.log("Message: ", message);
    _encodeProtoTransaction(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoTransaction = encodeProtoTransaction;
function _encodeProtoTransaction(message, bb) {
    // optional uint64 type = 1;
    var $type = message.type;
    if ($type !== undefined) {
        writeVarint32(bb, 8);
        writeVarint64(bb, $type);
    }
    // optional bytes to = 2;
    var $to = message.to;
    if ($to !== undefined) {
        writeVarint32(bb, 18);
        writeVarint32(bb, $to.length), writeBytes(bb, $to);
    }
    // optional uint64 nonce = 3;
    var $nonce = message.nonce;
    if ($nonce !== undefined) {
        writeVarint32(bb, 24);
        writeVarint64(bb, $nonce);
    }
    // optional bytes value = 4;
    var $value = message.value;
    if ($value !== undefined) {
        writeVarint32(bb, 34);
        writeVarint32(bb, $value.length), writeBytes(bb, $value);
    }
    // optional uint64 gas = 5;
    var $gas = message.gas;
    if ($gas !== undefined) {
        writeVarint32(bb, 40);
        writeVarint64(bb, $gas);
    }
    // optional bytes data = 6;
    var $data = message.data;
    if ($data !== undefined) {
        writeVarint32(bb, 50);
        writeVarint32(bb, $data.length), writeBytes(bb, $data);
    }
    // optional bytes chain_id = 7;
    var $chain_id = message.chain_id;
    if ($chain_id !== undefined) {
        writeVarint32(bb, 58);
        writeVarint32(bb, $chain_id.length), writeBytes(bb, $chain_id);
    }
    // optional bytes gas_fee_cap = 8;
    var $gas_fee_cap = message.gas_fee_cap;
    if ($gas_fee_cap !== undefined) {
        writeVarint32(bb, 66);
        writeVarint32(bb, $gas_fee_cap.length), writeBytes(bb, $gas_fee_cap);
    }
    // optional bytes gas_tip_cap = 9;
    var $gas_tip_cap = message.gas_tip_cap;
    if ($gas_tip_cap !== undefined) {
        writeVarint32(bb, 74);
        writeVarint32(bb, $gas_tip_cap.length), writeBytes(bb, $gas_tip_cap);
    }
    // optional ProtoAccessList access_list = 10;
    var $access_list = message.access_list;
    if ($access_list !== undefined) {
        writeVarint32(bb, 82);
        var nested = popByteBuffer();
        _encodeProtoAccessList($access_list, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional uint64 etx_gas_limit = 11;
    var $etx_gas_limit = message.etx_gas_limit;
    if ($etx_gas_limit !== undefined) {
        writeVarint32(bb, 88);
        writeVarint64(bb, $etx_gas_limit);
    }
    // optional bytes etx_gas_price = 12;
    var $etx_gas_price = message.etx_gas_price;
    if ($etx_gas_price !== undefined) {
        writeVarint32(bb, 98);
        writeVarint32(bb, $etx_gas_price.length), writeBytes(bb, $etx_gas_price);
    }
    // optional bytes etx_gas_tip = 13;
    var $etx_gas_tip = message.etx_gas_tip;
    if ($etx_gas_tip !== undefined) {
        writeVarint32(bb, 106);
        writeVarint32(bb, $etx_gas_tip.length), writeBytes(bb, $etx_gas_tip);
    }
    // optional bytes etx_data = 14;
    var $etx_data = message.etx_data;
    if ($etx_data !== undefined) {
        writeVarint32(bb, 114);
        writeVarint32(bb, $etx_data.length), writeBytes(bb, $etx_data);
    }
    // optional ProtoAccessList etx_access_list = 15;
    var $etx_access_list = message.etx_access_list;
    if ($etx_access_list !== undefined) {
        writeVarint32(bb, 122);
        var nested = popByteBuffer();
        _encodeProtoAccessList($etx_access_list, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional bytes v = 16;
    var $v = message.v;
    if ($v !== undefined) {
        writeVarint32(bb, 130);
        writeVarint32(bb, $v.length), writeBytes(bb, $v);
    }
    // optional bytes r = 17;
    var $r = message.r;
    if ($r !== undefined) {
        writeVarint32(bb, 138);
        writeVarint32(bb, $r.length), writeBytes(bb, $r);
    }
    // optional bytes s = 18;
    var $s = message.s;
    if ($s !== undefined) {
        writeVarint32(bb, 146);
        writeVarint32(bb, $s.length), writeBytes(bb, $s);
    }
    // optional ProtoHash originating_tx_hash = 19;
    var $originating_tx_hash = message.originating_tx_hash;
    if ($originating_tx_hash !== undefined) {
        writeVarint32(bb, 154);
        var nested = popByteBuffer();
        _encodeProtoHash($originating_tx_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional uint32 etx_index = 20;
    var $etx_index = message.etx_index;
    if ($etx_index !== undefined) {
        writeVarint32(bb, 160);
        writeVarint32(bb, $etx_index);
    }
    // optional bytes etx_sender = 21;
    var $etx_sender = message.etx_sender;
    if ($etx_sender !== undefined) {
        writeVarint32(bb, 170);
        writeVarint32(bb, $etx_sender.length), writeBytes(bb, $etx_sender);
    }
    // optional ProtoTxIns tx_ins = 22;
    var $tx_ins = message.tx_ins;
    if ($tx_ins !== undefined) {
        writeVarint32(bb, 178);
        var nested = popByteBuffer();
        _encodeProtoTxIns($tx_ins, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoTxOuts tx_outs = 23;
    var $tx_outs = message.tx_outs;
    if ($tx_outs !== undefined) {
        writeVarint32(bb, 186);
        var nested = popByteBuffer();
        _encodeProtoTxOuts($tx_outs, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional bytes signature = 24;
    var $signature = message.signature;
    if ($signature !== undefined) {
        writeVarint32(bb, 194);
        writeVarint32(bb, $signature.length), writeBytes(bb, $signature);
    }
}
function decodeProtoTransaction(binary) {
    return _decodeProtoTransaction(wrapByteBuffer(binary));
}
exports.decodeProtoTransaction = decodeProtoTransaction;
function _decodeProtoTransaction(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional uint64 type = 1;
            case 1: {
                message.type = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional bytes to = 2;
            case 2: {
                message.to = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional uint64 nonce = 3;
            case 3: {
                message.nonce = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional bytes value = 4;
            case 4: {
                message.value = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional uint64 gas = 5;
            case 5: {
                message.gas = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional bytes data = 6;
            case 6: {
                message.data = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional bytes chain_id = 7;
            case 7: {
                message.chain_id = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional bytes gas_fee_cap = 8;
            case 8: {
                message.gas_fee_cap = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional bytes gas_tip_cap = 9;
            case 9: {
                message.gas_tip_cap = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional ProtoAccessList access_list = 10;
            case 10: {
                var limit = pushTemporaryLength(bb);
                message.access_list = _decodeProtoAccessList(bb);
                bb.limit = limit;
                break;
            }
            // optional uint64 etx_gas_limit = 11;
            case 11: {
                message.etx_gas_limit = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional bytes etx_gas_price = 12;
            case 12: {
                message.etx_gas_price = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional bytes etx_gas_tip = 13;
            case 13: {
                message.etx_gas_tip = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional bytes etx_data = 14;
            case 14: {
                message.etx_data = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional ProtoAccessList etx_access_list = 15;
            case 15: {
                var limit = pushTemporaryLength(bb);
                message.etx_access_list = _decodeProtoAccessList(bb);
                bb.limit = limit;
                break;
            }
            // optional bytes v = 16;
            case 16: {
                message.v = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional bytes r = 17;
            case 17: {
                message.r = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional bytes s = 18;
            case 18: {
                message.s = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional ProtoHash originating_tx_hash = 19;
            case 19: {
                var limit = pushTemporaryLength(bb);
                message.originating_tx_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional uint32 etx_index = 20;
            case 20: {
                message.etx_index = readVarint32(bb) >>> 0;
                break;
            }
            // optional bytes etx_sender = 21;
            case 21: {
                message.etx_sender = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional ProtoTxIns tx_ins = 22;
            case 22: {
                var limit = pushTemporaryLength(bb);
                message.tx_ins = _decodeProtoTxIns(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoTxOuts tx_outs = 23;
            case 23: {
                var limit = pushTemporaryLength(bb);
                message.tx_outs = _decodeProtoTxOuts(bb);
                bb.limit = limit;
                break;
            }
            // optional bytes signature = 24;
            case 24: {
                message.signature = readBytes(bb, readVarint32(bb));
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoTransactions(message) {
    var bb = popByteBuffer();
    _encodeProtoTransactions(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoTransactions = encodeProtoTransactions;
function _encodeProtoTransactions(message, bb) {
    // repeated ProtoTransaction transactions = 1;
    var array$transactions = message.transactions;
    if (array$transactions !== undefined) {
        for (var _i = 0, array$transactions_1 = array$transactions; _i < array$transactions_1.length; _i++) {
            var value = array$transactions_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoTransaction(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoTransactions(binary) {
    return _decodeProtoTransactions(wrapByteBuffer(binary));
}
exports.decodeProtoTransactions = decodeProtoTransactions;
function _decodeProtoTransactions(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoTransaction transactions = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.transactions || (message.transactions = []);
                values.push(_decodeProtoTransaction(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoHeaders(message) {
    var bb = popByteBuffer();
    _encodeProtoHeaders(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoHeaders = encodeProtoHeaders;
function _encodeProtoHeaders(message, bb) {
    // repeated ProtoHeader headers = 1;
    var array$headers = message.headers;
    if (array$headers !== undefined) {
        for (var _i = 0, array$headers_1 = array$headers; _i < array$headers_1.length; _i++) {
            var value = array$headers_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoHeader(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoHeaders(binary) {
    return _decodeProtoHeaders(wrapByteBuffer(binary));
}
exports.decodeProtoHeaders = decodeProtoHeaders;
function _decodeProtoHeaders(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoHeader headers = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.headers || (message.headers = []);
                values.push(_decodeProtoHeader(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoManifest(message) {
    var bb = popByteBuffer();
    _encodeProtoManifest(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoManifest = encodeProtoManifest;
function _encodeProtoManifest(message, bb) {
    // repeated ProtoHash manifest = 1;
    var array$manifest = message.manifest;
    if (array$manifest !== undefined) {
        for (var _i = 0, array$manifest_1 = array$manifest; _i < array$manifest_1.length; _i++) {
            var value = array$manifest_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoManifest(binary) {
    return _decodeProtoManifest(wrapByteBuffer(binary));
}
exports.decodeProtoManifest = decodeProtoManifest;
function _decodeProtoManifest(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoHash manifest = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.manifest || (message.manifest = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoAccessList(message) {
    var bb = popByteBuffer();
    _encodeProtoAccessList(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoAccessList = encodeProtoAccessList;
function _encodeProtoAccessList(message, bb) {
    // repeated ProtoAccessTuple access_tuples = 1;
    var array$access_tuples = message.access_tuples;
    if (array$access_tuples !== undefined) {
        for (var _i = 0, array$access_tuples_1 = array$access_tuples; _i < array$access_tuples_1.length; _i++) {
            var value = array$access_tuples_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoAccessTuple(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoAccessList(binary) {
    return _decodeProtoAccessList(wrapByteBuffer(binary));
}
exports.decodeProtoAccessList = decodeProtoAccessList;
function _decodeProtoAccessList(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoAccessTuple access_tuples = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.access_tuples || (message.access_tuples = []);
                values.push(_decodeProtoAccessTuple(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoAccessTuple(message) {
    var bb = popByteBuffer();
    _encodeProtoAccessTuple(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoAccessTuple = encodeProtoAccessTuple;
function _encodeProtoAccessTuple(message, bb) {
    // optional bytes address = 1;
    var $address = message.address;
    if ($address !== undefined) {
        writeVarint32(bb, 10);
        writeVarint32(bb, $address.length), writeBytes(bb, $address);
    }
    // repeated ProtoHash storage_key = 2;
    var array$storage_key = message.storage_key;
    if (array$storage_key !== undefined) {
        for (var _i = 0, array$storage_key_1 = array$storage_key; _i < array$storage_key_1.length; _i++) {
            var value = array$storage_key_1[_i];
            writeVarint32(bb, 18);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoAccessTuple(binary) {
    return _decodeProtoAccessTuple(wrapByteBuffer(binary));
}
exports.decodeProtoAccessTuple = decodeProtoAccessTuple;
function _decodeProtoAccessTuple(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional bytes address = 1;
            case 1: {
                message.address = readBytes(bb, readVarint32(bb));
                break;
            }
            // repeated ProtoHash storage_key = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                var values = message.storage_key || (message.storage_key = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoReceiptForStorage(message) {
    var bb = popByteBuffer();
    _encodeProtoReceiptForStorage(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoReceiptForStorage = encodeProtoReceiptForStorage;
function _encodeProtoReceiptForStorage(message, bb) {
    // optional bytes post_state_or_status = 1;
    var $post_state_or_status = message.post_state_or_status;
    if ($post_state_or_status !== undefined) {
        writeVarint32(bb, 10);
        writeVarint32(bb, $post_state_or_status.length), writeBytes(bb, $post_state_or_status);
    }
    // optional uint64 cumulative_gas_used = 2;
    var $cumulative_gas_used = message.cumulative_gas_used;
    if ($cumulative_gas_used !== undefined) {
        writeVarint32(bb, 16);
        writeVarint64(bb, $cumulative_gas_used);
    }
    // optional ProtoHash tx_hash = 3;
    var $tx_hash = message.tx_hash;
    if ($tx_hash !== undefined) {
        writeVarint32(bb, 26);
        var nested = popByteBuffer();
        _encodeProtoHash($tx_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoAddress contract_address = 4;
    var $contract_address = message.contract_address;
    if ($contract_address !== undefined) {
        writeVarint32(bb, 34);
        var nested = popByteBuffer();
        _encodeProtoAddress($contract_address, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoLogsForStorage logs = 5;
    var $logs = message.logs;
    if ($logs !== undefined) {
        writeVarint32(bb, 42);
        var nested = popByteBuffer();
        _encodeProtoLogsForStorage($logs, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoTransactions etxs = 6;
    var $etxs = message.etxs;
    if ($etxs !== undefined) {
        writeVarint32(bb, 50);
        var nested = popByteBuffer();
        _encodeProtoTransactions($etxs, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional uint64 gas_used = 7;
    var $gas_used = message.gas_used;
    if ($gas_used !== undefined) {
        writeVarint32(bb, 56);
        writeVarint64(bb, $gas_used);
    }
}
function decodeProtoReceiptForStorage(binary) {
    return _decodeProtoReceiptForStorage(wrapByteBuffer(binary));
}
exports.decodeProtoReceiptForStorage = decodeProtoReceiptForStorage;
function _decodeProtoReceiptForStorage(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional bytes post_state_or_status = 1;
            case 1: {
                message.post_state_or_status = readBytes(bb, readVarint32(bb));
                break;
            }
            // optional uint64 cumulative_gas_used = 2;
            case 2: {
                message.cumulative_gas_used = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional ProtoHash tx_hash = 3;
            case 3: {
                var limit = pushTemporaryLength(bb);
                message.tx_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoAddress contract_address = 4;
            case 4: {
                var limit = pushTemporaryLength(bb);
                message.contract_address = _decodeProtoAddress(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoLogsForStorage logs = 5;
            case 5: {
                var limit = pushTemporaryLength(bb);
                message.logs = _decodeProtoLogsForStorage(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoTransactions etxs = 6;
            case 6: {
                var limit = pushTemporaryLength(bb);
                message.etxs = _decodeProtoTransactions(bb);
                bb.limit = limit;
                break;
            }
            // optional uint64 gas_used = 7;
            case 7: {
                message.gas_used = readVarint64(bb, /* unsigned */ true);
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoReceiptsForStorage(message) {
    var bb = popByteBuffer();
    _encodeProtoReceiptsForStorage(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoReceiptsForStorage = encodeProtoReceiptsForStorage;
function _encodeProtoReceiptsForStorage(message, bb) {
    // repeated ProtoReceiptForStorage receipts = 1;
    var array$receipts = message.receipts;
    if (array$receipts !== undefined) {
        for (var _i = 0, array$receipts_1 = array$receipts; _i < array$receipts_1.length; _i++) {
            var value = array$receipts_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoReceiptForStorage(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoReceiptsForStorage(binary) {
    return _decodeProtoReceiptsForStorage(wrapByteBuffer(binary));
}
exports.decodeProtoReceiptsForStorage = decodeProtoReceiptsForStorage;
function _decodeProtoReceiptsForStorage(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoReceiptForStorage receipts = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.receipts || (message.receipts = []);
                values.push(_decodeProtoReceiptForStorage(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoLogForStorage(message) {
    var bb = popByteBuffer();
    _encodeProtoLogForStorage(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoLogForStorage = encodeProtoLogForStorage;
function _encodeProtoLogForStorage(message, bb) {
    // optional ProtoAddress address = 1;
    var $address = message.address;
    if ($address !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoAddress($address, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // repeated ProtoHash topics = 2;
    var array$topics = message.topics;
    if (array$topics !== undefined) {
        for (var _i = 0, array$topics_1 = array$topics; _i < array$topics_1.length; _i++) {
            var value = array$topics_1[_i];
            writeVarint32(bb, 18);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
    // optional bytes data = 3;
    var $data = message.data;
    if ($data !== undefined) {
        writeVarint32(bb, 26);
        writeVarint32(bb, $data.length), writeBytes(bb, $data);
    }
}
function decodeProtoLogForStorage(binary) {
    return _decodeProtoLogForStorage(wrapByteBuffer(binary));
}
exports.decodeProtoLogForStorage = decodeProtoLogForStorage;
function _decodeProtoLogForStorage(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoAddress address = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.address = _decodeProtoAddress(bb);
                bb.limit = limit;
                break;
            }
            // repeated ProtoHash topics = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                var values = message.topics || (message.topics = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            // optional bytes data = 3;
            case 3: {
                message.data = readBytes(bb, readVarint32(bb));
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoLogsForStorage(message) {
    var bb = popByteBuffer();
    _encodeProtoLogsForStorage(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoLogsForStorage = encodeProtoLogsForStorage;
function _encodeProtoLogsForStorage(message, bb) {
    // repeated ProtoLogForStorage logs = 1;
    var array$logs = message.logs;
    if (array$logs !== undefined) {
        for (var _i = 0, array$logs_1 = array$logs; _i < array$logs_1.length; _i++) {
            var value = array$logs_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoLogForStorage(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoLogsForStorage(binary) {
    return _decodeProtoLogsForStorage(wrapByteBuffer(binary));
}
exports.decodeProtoLogsForStorage = decodeProtoLogsForStorage;
function _decodeProtoLogsForStorage(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoLogForStorage logs = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.logs || (message.logs = []);
                values.push(_decodeProtoLogForStorage(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoPendingHeader(message) {
    var bb = popByteBuffer();
    _encodeProtoPendingHeader(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoPendingHeader = encodeProtoPendingHeader;
function _encodeProtoPendingHeader(message, bb) {
    // optional ProtoHeader header = 1;
    var $header = message.header;
    if ($header !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoHeader($header, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoTermini termini = 2;
    var $termini = message.termini;
    if ($termini !== undefined) {
        writeVarint32(bb, 18);
        var nested = popByteBuffer();
        _encodeProtoTermini($termini, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
}
function decodeProtoPendingHeader(binary) {
    return _decodeProtoPendingHeader(wrapByteBuffer(binary));
}
exports.decodeProtoPendingHeader = decodeProtoPendingHeader;
function _decodeProtoPendingHeader(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoHeader header = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.header = _decodeProtoHeader(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoTermini termini = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                message.termini = _decodeProtoTermini(bb);
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoTermini(message) {
    var bb = popByteBuffer();
    _encodeProtoTermini(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoTermini = encodeProtoTermini;
function _encodeProtoTermini(message, bb) {
    // repeated ProtoHash dom_termini = 1;
    var array$dom_termini = message.dom_termini;
    if (array$dom_termini !== undefined) {
        for (var _i = 0, array$dom_termini_1 = array$dom_termini; _i < array$dom_termini_1.length; _i++) {
            var value = array$dom_termini_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
    // repeated ProtoHash sub_termini = 2;
    var array$sub_termini = message.sub_termini;
    if (array$sub_termini !== undefined) {
        for (var _a = 0, array$sub_termini_1 = array$sub_termini; _a < array$sub_termini_1.length; _a++) {
            var value = array$sub_termini_1[_a];
            writeVarint32(bb, 18);
            var nested = popByteBuffer();
            _encodeProtoHash(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoTermini(binary) {
    return _decodeProtoTermini(wrapByteBuffer(binary));
}
exports.decodeProtoTermini = decodeProtoTermini;
function _decodeProtoTermini(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoHash dom_termini = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.dom_termini || (message.dom_termini = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            // repeated ProtoHash sub_termini = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                var values = message.sub_termini || (message.sub_termini = []);
                values.push(_decodeProtoHash(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoEtxSet(message) {
    var bb = popByteBuffer();
    _encodeProtoEtxSet(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoEtxSet = encodeProtoEtxSet;
function _encodeProtoEtxSet(message, bb) {
    // repeated ProtoEtxSetEntry etx_set = 1;
    var array$etx_set = message.etx_set;
    if (array$etx_set !== undefined) {
        for (var _i = 0, array$etx_set_1 = array$etx_set; _i < array$etx_set_1.length; _i++) {
            var value = array$etx_set_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoEtxSetEntry(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoEtxSet(binary) {
    return _decodeProtoEtxSet(wrapByteBuffer(binary));
}
exports.decodeProtoEtxSet = decodeProtoEtxSet;
function _decodeProtoEtxSet(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoEtxSetEntry etx_set = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.etx_set || (message.etx_set = []);
                values.push(_decodeProtoEtxSetEntry(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoEtxSetEntry(message) {
    var bb = popByteBuffer();
    _encodeProtoEtxSetEntry(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoEtxSetEntry = encodeProtoEtxSetEntry;
function _encodeProtoEtxSetEntry(message, bb) {
    // optional uint64 height = 1;
    var $height = message.height;
    if ($height !== undefined) {
        writeVarint32(bb, 8);
        writeVarint64(bb, $height);
    }
    // optional ProtoTransaction etx = 2;
    var $etx = message.etx;
    if ($etx !== undefined) {
        writeVarint32(bb, 18);
        var nested = popByteBuffer();
        _encodeProtoTransaction($etx, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoHash etx_hash = 3;
    var $etx_hash = message.etx_hash;
    if ($etx_hash !== undefined) {
        writeVarint32(bb, 26);
        var nested = popByteBuffer();
        _encodeProtoHash($etx_hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
}
function decodeProtoEtxSetEntry(binary) {
    return _decodeProtoEtxSetEntry(wrapByteBuffer(binary));
}
exports.decodeProtoEtxSetEntry = decodeProtoEtxSetEntry;
function _decodeProtoEtxSetEntry(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional uint64 height = 1;
            case 1: {
                message.height = readVarint64(bb, /* unsigned */ true);
                break;
            }
            // optional ProtoTransaction etx = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                message.etx = _decodeProtoTransaction(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoHash etx_hash = 3;
            case 3: {
                var limit = pushTemporaryLength(bb);
                message.etx_hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoPendingEtxs(message) {
    var bb = popByteBuffer();
    _encodeProtoPendingEtxs(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoPendingEtxs = encodeProtoPendingEtxs;
function _encodeProtoPendingEtxs(message, bb) {
    // optional ProtoHeader header = 1;
    var $header = message.header;
    if ($header !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoHeader($header, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoTransactions etxs = 2;
    var $etxs = message.etxs;
    if ($etxs !== undefined) {
        writeVarint32(bb, 18);
        var nested = popByteBuffer();
        _encodeProtoTransactions($etxs, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
}
function decodeProtoPendingEtxs(binary) {
    return _decodeProtoPendingEtxs(wrapByteBuffer(binary));
}
exports.decodeProtoPendingEtxs = decodeProtoPendingEtxs;
function _decodeProtoPendingEtxs(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoHeader header = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.header = _decodeProtoHeader(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoTransactions etxs = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                message.etxs = _decodeProtoTransactions(bb);
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoPendingEtxsRollup(message) {
    var bb = popByteBuffer();
    _encodeProtoPendingEtxsRollup(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoPendingEtxsRollup = encodeProtoPendingEtxsRollup;
function _encodeProtoPendingEtxsRollup(message, bb) {
    // optional ProtoHeader header = 1;
    var $header = message.header;
    if ($header !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoHeader($header, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional ProtoTransactions etxs_rollup = 2;
    var $etxs_rollup = message.etxs_rollup;
    if ($etxs_rollup !== undefined) {
        writeVarint32(bb, 18);
        var nested = popByteBuffer();
        _encodeProtoTransactions($etxs_rollup, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
}
function decodeProtoPendingEtxsRollup(binary) {
    return _decodeProtoPendingEtxsRollup(wrapByteBuffer(binary));
}
exports.decodeProtoPendingEtxsRollup = decodeProtoPendingEtxsRollup;
function _decodeProtoPendingEtxsRollup(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoHeader header = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.header = _decodeProtoHeader(bb);
                bb.limit = limit;
                break;
            }
            // optional ProtoTransactions etxs_rollup = 2;
            case 2: {
                var limit = pushTemporaryLength(bb);
                message.etxs_rollup = _decodeProtoTransactions(bb);
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoTxIns(message) {
    var bb = popByteBuffer();
    _encodeProtoTxIns(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoTxIns = encodeProtoTxIns;
function _encodeProtoTxIns(message, bb) {
    // repeated ProtoTxIn tx_ins = 1;
    var array$tx_ins = message.tx_ins;
    if (array$tx_ins !== undefined) {
        for (var _i = 0, array$tx_ins_1 = array$tx_ins; _i < array$tx_ins_1.length; _i++) {
            var value = array$tx_ins_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoTxIn(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoTxIns(binary) {
    return _decodeProtoTxIns(wrapByteBuffer(binary));
}
exports.decodeProtoTxIns = decodeProtoTxIns;
function _decodeProtoTxIns(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoTxIn tx_ins = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.tx_ins || (message.tx_ins = []);
                values.push(_decodeProtoTxIn(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoTxOuts(message) {
    var bb = popByteBuffer();
    _encodeProtoTxOuts(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoTxOuts = encodeProtoTxOuts;
function _encodeProtoTxOuts(message, bb) {
    // repeated ProtoTxOut tx_outs = 1;
    var array$tx_outs = message.tx_outs;
    if (array$tx_outs !== undefined) {
        for (var _i = 0, array$tx_outs_1 = array$tx_outs; _i < array$tx_outs_1.length; _i++) {
            var value = array$tx_outs_1[_i];
            writeVarint32(bb, 10);
            var nested = popByteBuffer();
            _encodeProtoTxOut(value, nested);
            writeVarint32(bb, nested.limit);
            writeByteBuffer(bb, nested);
            pushByteBuffer(nested);
        }
    }
}
function decodeProtoTxOuts(binary) {
    return _decodeProtoTxOuts(wrapByteBuffer(binary));
}
exports.decodeProtoTxOuts = decodeProtoTxOuts;
function _decodeProtoTxOuts(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // repeated ProtoTxOut tx_outs = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                var values = message.tx_outs || (message.tx_outs = []);
                values.push(_decodeProtoTxOut(bb));
                bb.limit = limit;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoTxIn(message) {
    var bb = popByteBuffer();
    _encodeProtoTxIn(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoTxIn = encodeProtoTxIn;
function _encodeProtoTxIn(message, bb) {
    // optional ProtoOutPoint previous_out_point = 1;
    var $previous_out_point = message.previous_out_point;
    if ($previous_out_point !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoOutPoint($previous_out_point, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional bytes pub_key = 2;
    var $pub_key = message.pub_key;
    if ($pub_key !== undefined) {
        writeVarint32(bb, 18);
        writeVarint32(bb, $pub_key.length), writeBytes(bb, $pub_key);
    }
}
function decodeProtoTxIn(binary) {
    return _decodeProtoTxIn(wrapByteBuffer(binary));
}
exports.decodeProtoTxIn = decodeProtoTxIn;
function _decodeProtoTxIn(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoOutPoint previous_out_point = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.previous_out_point = _decodeProtoOutPoint(bb);
                bb.limit = limit;
                break;
            }
            // optional bytes pub_key = 2;
            case 2: {
                message.pub_key = readBytes(bb, readVarint32(bb));
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoOutPoint(message) {
    var bb = popByteBuffer();
    _encodeProtoOutPoint(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoOutPoint = encodeProtoOutPoint;
function _encodeProtoOutPoint(message, bb) {
    // optional ProtoHash hash = 1;
    var $hash = message.hash;
    if ($hash !== undefined) {
        writeVarint32(bb, 10);
        var nested = popByteBuffer();
        _encodeProtoHash($hash, nested);
        writeVarint32(bb, nested.limit);
        writeByteBuffer(bb, nested);
        pushByteBuffer(nested);
    }
    // optional uint32 index = 2;
    var $index = message.index;
    if ($index !== undefined) {
        writeVarint32(bb, 16);
        writeVarint32(bb, $index);
    }
}
function decodeProtoOutPoint(binary) {
    return _decodeProtoOutPoint(wrapByteBuffer(binary));
}
exports.decodeProtoOutPoint = decodeProtoOutPoint;
function _decodeProtoOutPoint(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional ProtoHash hash = 1;
            case 1: {
                var limit = pushTemporaryLength(bb);
                message.hash = _decodeProtoHash(bb);
                bb.limit = limit;
                break;
            }
            // optional uint32 index = 2;
            case 2: {
                message.index = readVarint32(bb) >>> 0;
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function encodeProtoTxOut(message) {
    var bb = popByteBuffer();
    _encodeProtoTxOut(message, bb);
    return toUint8Array(bb);
}
exports.encodeProtoTxOut = encodeProtoTxOut;
function _encodeProtoTxOut(message, bb) {
    // optional uint32 denomination = 1;
    var $denomination = message.denomination;
    if ($denomination !== undefined) {
        writeVarint32(bb, 8);
        writeVarint32(bb, $denomination);
    }
    // optional bytes address = 2;
    var $address = message.address;
    if ($address !== undefined) {
        writeVarint32(bb, 18);
        writeVarint32(bb, $address.length), writeBytes(bb, $address);
    }
}
function decodeProtoTxOut(binary) {
    return _decodeProtoTxOut(wrapByteBuffer(binary));
}
exports.decodeProtoTxOut = decodeProtoTxOut;
function _decodeProtoTxOut(bb) {
    var message = {};
    end_of_message: while (!isAtEnd(bb)) {
        var tag = readVarint32(bb);
        switch (tag >>> 3) {
            case 0:
                break end_of_message;
            // optional uint32 denomination = 1;
            case 1: {
                message.denomination = readVarint32(bb) >>> 0;
                break;
            }
            // optional bytes address = 2;
            case 2: {
                message.address = readBytes(bb, readVarint32(bb));
                break;
            }
            default:
                skipUnknownField(bb, tag & 7);
        }
    }
    return message;
}
function pushTemporaryLength(bb) {
    var length = readVarint32(bb);
    var limit = bb.limit;
    bb.limit = bb.offset + length;
    return limit;
}
function skipUnknownField(bb, type) {
    switch (type) {
        case 0:
            while (readByte(bb) & 0x80) { }
            break;
        case 2:
            skip(bb, readVarint32(bb));
            break;
        case 5:
            skip(bb, 4);
            break;
        case 1:
            skip(bb, 8);
            break;
        default: throw new Error("Unimplemented type: " + type);
    }
}
function stringToLong(value) {
    return {
        low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
        high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
        unsigned: true,
    };
}
exports.stringToLong = stringToLong;
function longToString(value) {
    var low = value.low;
    var high = value.high;
    return String.fromCharCode(low & 0xFFFF, low >>> 16, high & 0xFFFF, high >>> 16);
}
exports.longToString = longToString;
// The code below was modified from https://github.com/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.
var f32 = new Float32Array(1);
var f32_u8 = new Uint8Array(f32.buffer);
var f64 = new Float64Array(1);
var f64_u8 = new Uint8Array(f64.buffer);
function intToLong(value) {
    value |= 0;
    return {
        low: value,
        high: value >> 31,
        unsigned: value >= 0,
    };
}
exports.intToLong = intToLong;
var bbStack = [];
function popByteBuffer() {
    var bb = bbStack.pop();
    if (!bb)
        return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
    bb.offset = bb.limit = 0;
    return bb;
}
function pushByteBuffer(bb) {
    bbStack.push(bb);
}
function wrapByteBuffer(bytes) {
    return { bytes: bytes, offset: 0, limit: bytes.length };
}
function toUint8Array(bb) {
    var bytes = bb.bytes;
    var limit = bb.limit;
    return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}
function skip(bb, offset) {
    if (bb.offset + offset > bb.limit) {
        throw new Error('Skip past limit');
    }
    bb.offset += offset;
}
function isAtEnd(bb) {
    return bb.offset >= bb.limit;
}
function grow(bb, count) {
    var bytes = bb.bytes;
    var offset = bb.offset;
    var limit = bb.limit;
    var finalOffset = offset + count;
    if (finalOffset > bytes.length) {
        var newBytes = new Uint8Array(finalOffset * 2);
        newBytes.set(bytes);
        bb.bytes = newBytes;
    }
    bb.offset = finalOffset;
    if (finalOffset > limit) {
        bb.limit = finalOffset;
    }
    return offset;
}
function advance(bb, count) {
    var offset = bb.offset;
    if (offset + count > bb.limit) {
        throw new Error('Read past limit');
    }
    bb.offset += count;
    return offset;
}
function readBytes(bb, count) {
    var offset = advance(bb, count);
    return bb.bytes.subarray(offset, offset + count);
}
function writeBytes(bb, buffer) {
    var offset = grow(bb, buffer.length);
    bb.bytes.set(buffer, offset);
}
function readString(bb, count) {
    // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
    var offset = advance(bb, count);
    var fromCharCode = String.fromCharCode;
    var bytes = bb.bytes;
    var invalid = '\uFFFD';
    var text = '';
    for (var i = 0; i < count; i++) {
        var c1 = bytes[i + offset], c2 = void 0, c3 = void 0, c4 = void 0, c = void 0;
        // 1 byte
        if ((c1 & 0x80) === 0) {
            text += fromCharCode(c1);
        }
        // 2 bytes
        else if ((c1 & 0xE0) === 0xC0) {
            if (i + 1 >= count)
                text += invalid;
            else {
                c2 = bytes[i + offset + 1];
                if ((c2 & 0xC0) !== 0x80)
                    text += invalid;
                else {
                    c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
                    if (c < 0x80)
                        text += invalid;
                    else {
                        text += fromCharCode(c);
                        i++;
                    }
                }
            }
        }
        // 3 bytes
        else if ((c1 & 0xF0) == 0xE0) {
            if (i + 2 >= count)
                text += invalid;
            else {
                c2 = bytes[i + offset + 1];
                c3 = bytes[i + offset + 2];
                if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080)
                    text += invalid;
                else {
                    c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
                    if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF))
                        text += invalid;
                    else {
                        text += fromCharCode(c);
                        i += 2;
                    }
                }
            }
        }
        // 4 bytes
        else if ((c1 & 0xF8) == 0xF0) {
            if (i + 3 >= count)
                text += invalid;
            else {
                c2 = bytes[i + offset + 1];
                c3 = bytes[i + offset + 2];
                c4 = bytes[i + offset + 3];
                if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080)
                    text += invalid;
                else {
                    c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
                    if (c < 0x10000 || c > 0x10FFFF)
                        text += invalid;
                    else {
                        c -= 0x10000;
                        text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
                        i += 3;
                    }
                }
            }
        }
        else
            text += invalid;
    }
    return text;
}
exports.readString = readString;
function writeString(bb, text) {
    // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
    var n = text.length;
    var byteCount = 0;
    // Write the byte count first
    for (var i = 0; i < n; i++) {
        var c = text.charCodeAt(i);
        if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
            c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
        }
        byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }
    writeVarint32(bb, byteCount);
    var offset = grow(bb, byteCount);
    var bytes = bb.bytes;
    // Then write the bytes
    for (var i = 0; i < n; i++) {
        var c = text.charCodeAt(i);
        if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
            c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
        }
        if (c < 0x80) {
            bytes[offset++] = c;
        }
        else {
            if (c < 0x800) {
                bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
            }
            else {
                if (c < 0x10000) {
                    bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
                }
                else {
                    bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
                    bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
                }
                bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
            }
            bytes[offset++] = (c & 0x3F) | 0x80;
        }
    }
}
exports.writeString = writeString;
function writeByteBuffer(bb, buffer) {
    var offset = grow(bb, buffer.limit);
    var from = bb.bytes;
    var to = buffer.bytes;
    // This for loop is much faster than subarray+set on V8
    for (var i = 0, n = buffer.limit; i < n; i++) {
        from[i + offset] = to[i];
    }
}
function readByte(bb) {
    return bb.bytes[advance(bb, 1)];
}
function writeByte(bb, value) {
    var offset = grow(bb, 1);
    bb.bytes[offset] = value;
}
function readFloat(bb) {
    var offset = advance(bb, 4);
    var bytes = bb.bytes;
    // Manual copying is much faster than subarray+set in V8
    f32_u8[0] = bytes[offset++];
    f32_u8[1] = bytes[offset++];
    f32_u8[2] = bytes[offset++];
    f32_u8[3] = bytes[offset++];
    return f32[0];
}
exports.readFloat = readFloat;
function writeFloat(bb, value) {
    var offset = grow(bb, 4);
    var bytes = bb.bytes;
    f32[0] = value;
    // Manual copying is much faster than subarray+set in V8
    bytes[offset++] = f32_u8[0];
    bytes[offset++] = f32_u8[1];
    bytes[offset++] = f32_u8[2];
    bytes[offset++] = f32_u8[3];
}
exports.writeFloat = writeFloat;
function readDouble(bb) {
    var offset = advance(bb, 8);
    var bytes = bb.bytes;
    // Manual copying is much faster than subarray+set in V8
    f64_u8[0] = bytes[offset++];
    f64_u8[1] = bytes[offset++];
    f64_u8[2] = bytes[offset++];
    f64_u8[3] = bytes[offset++];
    f64_u8[4] = bytes[offset++];
    f64_u8[5] = bytes[offset++];
    f64_u8[6] = bytes[offset++];
    f64_u8[7] = bytes[offset++];
    return f64[0];
}
exports.readDouble = readDouble;
function writeDouble(bb, value) {
    var offset = grow(bb, 8);
    var bytes = bb.bytes;
    f64[0] = value;
    // Manual copying is much faster than subarray+set in V8
    bytes[offset++] = f64_u8[0];
    bytes[offset++] = f64_u8[1];
    bytes[offset++] = f64_u8[2];
    bytes[offset++] = f64_u8[3];
    bytes[offset++] = f64_u8[4];
    bytes[offset++] = f64_u8[5];
    bytes[offset++] = f64_u8[6];
    bytes[offset++] = f64_u8[7];
}
exports.writeDouble = writeDouble;
function readInt32(bb) {
    var offset = advance(bb, 4);
    var bytes = bb.bytes;
    return (bytes[offset] |
        (bytes[offset + 1] << 8) |
        (bytes[offset + 2] << 16) |
        (bytes[offset + 3] << 24));
}
function writeInt32(bb, value) {
    var offset = grow(bb, 4);
    var bytes = bb.bytes;
    bytes[offset] = value;
    bytes[offset + 1] = value >> 8;
    bytes[offset + 2] = value >> 16;
    bytes[offset + 3] = value >> 24;
}
function readInt64(bb, unsigned) {
    return {
        low: readInt32(bb),
        high: readInt32(bb),
        unsigned: unsigned,
    };
}
exports.readInt64 = readInt64;
function writeInt64(bb, value) {
    writeInt32(bb, value.low);
    writeInt32(bb, value.high);
}
exports.writeInt64 = writeInt64;
function readVarint32(bb) {
    var c = 0;
    var value = 0;
    var b;
    do {
        b = readByte(bb);
        if (c < 32)
            value |= (b & 0x7F) << c;
        c += 7;
    } while (b & 0x80);
    return value;
}
function writeVarint32(bb, value) {
    value >>>= 0;
    while (value >= 0x80) {
        writeByte(bb, (value & 0x7f) | 0x80);
        value >>>= 7;
    }
    writeByte(bb, value);
}
function readVarint64(bb, unsigned) {
    var part0 = 0;
    var part1 = 0;
    var part2 = 0;
    var b;
    b = readByte(bb);
    part0 = (b & 0x7F);
    if (b & 0x80) {
        b = readByte(bb);
        part0 |= (b & 0x7F) << 7;
        if (b & 0x80) {
            b = readByte(bb);
            part0 |= (b & 0x7F) << 14;
            if (b & 0x80) {
                b = readByte(bb);
                part0 |= (b & 0x7F) << 21;
                if (b & 0x80) {
                    b = readByte(bb);
                    part1 = (b & 0x7F);
                    if (b & 0x80) {
                        b = readByte(bb);
                        part1 |= (b & 0x7F) << 7;
                        if (b & 0x80) {
                            b = readByte(bb);
                            part1 |= (b & 0x7F) << 14;
                            if (b & 0x80) {
                                b = readByte(bb);
                                part1 |= (b & 0x7F) << 21;
                                if (b & 0x80) {
                                    b = readByte(bb);
                                    part2 = (b & 0x7F);
                                    if (b & 0x80) {
                                        b = readByte(bb);
                                        part2 |= (b & 0x7F) << 7;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return {
        low: part0 | (part1 << 28),
        high: (part1 >>> 4) | (part2 << 24),
        unsigned: unsigned,
    };
}
function writeVarint64(bb, value) {
    var part0 = value.low >>> 0;
    var part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
    var part2 = value.high >>> 24;
    // ref: src/google/protobuf/io/coded_stream.cc
    var size = part2 === 0 ?
        part1 === 0 ?
            part0 < 1 << 14 ?
                part0 < 1 << 7 ? 1 : 2 :
                part0 < 1 << 21 ? 3 : 4 :
            part1 < 1 << 14 ?
                part1 < 1 << 7 ? 5 : 6 :
                part1 < 1 << 21 ? 7 : 8 :
        part2 < 1 << 7 ? 9 : 10;
    var offset = grow(bb, size);
    var bytes = bb.bytes;
    switch (size) {
        case 10:
            bytes[offset + 9] = (part2 >>> 7) & 0x01;
            break;
        case 9:
            bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
            break;
        case 8:
            bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
            break;
        case 7:
            bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
            break;
        case 6:
            bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
            break;
        case 5:
            bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
            break;
        case 4:
            bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
            break;
        case 3:
            bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
            break;
        case 2:
            bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
            break;
        case 1:
            bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
            break;
    }
}
function readVarint32ZigZag(bb) {
    var value = readVarint32(bb);
    // ref: src/google/protobuf/wire_format_lite.h
    return (value >>> 1) ^ -(value & 1);
}
exports.readVarint32ZigZag = readVarint32ZigZag;
function writeVarint32ZigZag(bb, value) {
    // ref: src/google/protobuf/wire_format_lite.h
    writeVarint32(bb, (value << 1) ^ (value >> 31));
}
exports.writeVarint32ZigZag = writeVarint32ZigZag;
function readVarint64ZigZag(bb) {
    var value = readVarint64(bb, /* unsigned */ false);
    var low = value.low;
    var high = value.high;
    var flip = -(low & 1);
    // ref: src/google/protobuf/wire_format_lite.h
    return {
        low: ((low >>> 1) | (high << 31)) ^ flip,
        high: (high >>> 1) ^ flip,
        unsigned: false,
    };
}
exports.readVarint64ZigZag = readVarint64ZigZag;
function writeVarint64ZigZag(bb, value) {
    var low = value.low;
    var high = value.high;
    var flip = high >> 31;
    // ref: src/google/protobuf/wire_format_lite.h
    writeVarint64(bb, {
        low: (low << 1) ^ flip,
        high: ((high << 1) | (low >>> 31)) ^ flip,
        unsigned: false,
    });
}
exports.writeVarint64ZigZag = writeVarint64ZigZag;
//# sourceMappingURL=protoFormats.js.map