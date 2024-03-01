"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.common = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.3
 * source: proto_common.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
var pb_1 = __importStar(require("google-protobuf"));
var common;
(function (common) {
    var ProtoLocation = /** @class */ (function (_super) {
        __extends(ProtoLocation, _super);
        function ProtoLocation(data) {
            var _this = _super.call(this) || this;
            _this.one_of_decls = [];
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], _this.one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("value" in data && data.value != undefined) {
                    _this.value = data.value;
                }
            }
            return _this;
        }
        Object.defineProperty(ProtoLocation.prototype, "value", {
            get: function () {
                return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        ProtoLocation.fromObject = function (data) {
            var message = new ProtoLocation({});
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        };
        ProtoLocation.prototype.toObject = function () {
            var data = {};
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        };
        ProtoLocation.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.value.length)
                writer.writeBytes(1, this.value);
            if (!w)
                return writer.getResultBuffer();
        };
        ProtoLocation.deserialize = function (bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProtoLocation();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.value = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        ProtoLocation.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ProtoLocation.deserializeBinary = function (bytes) {
            return ProtoLocation.deserialize(bytes);
        };
        return ProtoLocation;
    }(pb_1.Message));
    common.ProtoLocation = ProtoLocation;
    var ProtoHash = /** @class */ (function (_super) {
        __extends(ProtoHash, _super);
        function ProtoHash(data) {
            var _this = _super.call(this) || this;
            _this.one_of_decls = [];
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], _this.one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("value" in data && data.value != undefined) {
                    _this.value = data.value;
                }
            }
            return _this;
        }
        Object.defineProperty(ProtoHash.prototype, "value", {
            get: function () {
                return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        ProtoHash.fromObject = function (data) {
            var message = new ProtoHash({});
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        };
        ProtoHash.prototype.toObject = function () {
            var data = {};
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        };
        ProtoHash.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.value.length)
                writer.writeBytes(1, this.value);
            if (!w)
                return writer.getResultBuffer();
        };
        ProtoHash.deserialize = function (bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProtoHash();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.value = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        ProtoHash.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ProtoHash.deserializeBinary = function (bytes) {
            return ProtoHash.deserialize(bytes);
        };
        return ProtoHash;
    }(pb_1.Message));
    common.ProtoHash = ProtoHash;
    var ProtoHashes = /** @class */ (function (_super) {
        __extends(ProtoHashes, _super);
        function ProtoHashes(data) {
            var _this = _super.call(this) || this;
            _this.one_of_decls = [];
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [1], _this.one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("hashes" in data && data.hashes != undefined) {
                    _this.hashes = data.hashes;
                }
            }
            return _this;
        }
        Object.defineProperty(ProtoHashes.prototype, "hashes", {
            get: function () {
                return pb_1.Message.getRepeatedWrapperField(this, ProtoHash, 1);
            },
            set: function (value) {
                pb_1.Message.setRepeatedWrapperField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        ProtoHashes.fromObject = function (data) {
            var message = new ProtoHashes({});
            if (data.hashes != null) {
                message.hashes = data.hashes.map(function (item) { return ProtoHash.fromObject(item); });
            }
            return message;
        };
        ProtoHashes.prototype.toObject = function () {
            var data = {};
            if (this.hashes != null) {
                data.hashes = this.hashes.map(function (item) { return item.toObject(); });
            }
            return data;
        };
        ProtoHashes.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.hashes.length)
                writer.writeRepeatedMessage(1, this.hashes, function (item) { return item.serialize(writer); });
            if (!w)
                return writer.getResultBuffer();
        };
        ProtoHashes.deserialize = function (bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProtoHashes();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.hashes, function () { return pb_1.Message.addToRepeatedWrapperField(message, 1, ProtoHash.deserialize(reader), ProtoHash); });
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        ProtoHashes.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ProtoHashes.deserializeBinary = function (bytes) {
            return ProtoHashes.deserialize(bytes);
        };
        return ProtoHashes;
    }(pb_1.Message));
    common.ProtoHashes = ProtoHashes;
    var ProtoAddress = /** @class */ (function (_super) {
        __extends(ProtoAddress, _super);
        function ProtoAddress(data) {
            var _this = _super.call(this) || this;
            _this.one_of_decls = [];
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], _this.one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("value" in data && data.value != undefined) {
                    _this.value = data.value;
                }
            }
            return _this;
        }
        Object.defineProperty(ProtoAddress.prototype, "value", {
            get: function () {
                return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        ProtoAddress.fromObject = function (data) {
            var message = new ProtoAddress({});
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        };
        ProtoAddress.prototype.toObject = function () {
            var data = {};
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        };
        ProtoAddress.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.value.length)
                writer.writeBytes(1, this.value);
            if (!w)
                return writer.getResultBuffer();
        };
        ProtoAddress.deserialize = function (bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProtoAddress();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.value = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        ProtoAddress.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ProtoAddress.deserializeBinary = function (bytes) {
            return ProtoAddress.deserialize(bytes);
        };
        return ProtoAddress;
    }(pb_1.Message));
    common.ProtoAddress = ProtoAddress;
})(common || (exports.common = common = {}));
//# sourceMappingURL=proto_common.js.map