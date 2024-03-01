"use strict";

//See: https://github.com/ethereum/wiki/wiki/RLP

import { arrayify, BytesLike, hexlify } from "@quais/bytes";
// const messages = require('./binary/proto_block_pb.js');
//import from proto-block
import * as Proto from "./proto-block"

export function _encode(transaction: any): Uint8Array {
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
    console.log('proto tx: ', transaction)
    const tx = Proto.block.ProtoTransaction.fromObject(transaction);

    return tx.serialize();
}

export function encode(object: any): string {
    return hexlify(_encode(object));
}

export function _decode(encodedData: Uint8Array): any {
    console.log('encodedData: ', encodedData)
    // const message = messages.ProtoTransaction.deserializeBinary(encodedData);
    // const tx = message.toObject();
    const tx = Proto.block.ProtoTransaction.deserialize(encodedData);
    console.log('decoded proto tx: ', tx)
    return tx;
}


export function decode(data: BytesLike): any {
    const bytes = arrayify(data);
    const decoded = _decode(bytes);
    return decoded;
}

