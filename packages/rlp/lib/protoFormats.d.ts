export interface ProtoLocation {
    value?: Uint8Array;
}
export declare function encodeProtoLocation(message: ProtoLocation): Uint8Array;
export declare function decodeProtoLocation(binary: Uint8Array): ProtoLocation;
export interface ProtoHash {
    value?: Uint8Array;
}
export declare function encodeProtoHash(message: ProtoHash): Uint8Array;
export declare function decodeProtoHash(binary: Uint8Array): ProtoHash;
export interface ProtoHashes {
    hashes?: ProtoHash[];
}
export declare function encodeProtoHashes(message: ProtoHashes): Uint8Array;
export declare function decodeProtoHashes(binary: Uint8Array): ProtoHashes;
export interface ProtoAddress {
    value?: Uint8Array;
}
export declare function encodeProtoAddress(message: ProtoAddress): Uint8Array;
export declare function decodeProtoAddress(binary: Uint8Array): ProtoAddress;
export interface ProtoBlock {
    header?: ProtoHeader;
    body?: ProtoBody;
}
export declare function encodeProtoBlock(message: ProtoBlock): Uint8Array;
export declare function decodeProtoBlock(binary: Uint8Array): ProtoBlock;
export interface ProtoBody {
    txs?: ProtoTransactions;
    uncles?: ProtoHeaders;
    etxs?: ProtoTransactions;
    manifest?: ProtoManifest;
}
export declare function encodeProtoBody(message: ProtoBody): Uint8Array;
export declare function decodeProtoBody(binary: Uint8Array): ProtoBody;
export interface ProtoHeader {
    parent_hash?: ProtoHash[];
    uncle_hash?: ProtoHash;
    coinbase?: Uint8Array;
    root?: ProtoHash;
    tx_hash?: ProtoHash;
    etx_hash?: ProtoHash;
    etx_rollup_hash?: ProtoHash;
    manifest_hash?: ProtoHash[];
    receipt_hash?: ProtoHash;
    difficulty?: Uint8Array;
    parent_entropy?: Uint8Array[];
    parent_delta_s?: Uint8Array[];
    number?: Uint8Array[];
    gas_limit?: Long;
    gas_used?: Long;
    base_fee?: Uint8Array;
    location?: ProtoLocation;
    time?: Long;
    extra?: Uint8Array;
    mix_hash?: ProtoHash;
    nonce?: Long;
}
export declare function encodeProtoHeader(message: ProtoHeader): Uint8Array;
export declare function decodeProtoHeader(binary: Uint8Array): ProtoHeader;
export interface ProtoTransaction {
    type?: Long;
    to?: Uint8Array;
    nonce?: Long;
    value?: Uint8Array;
    gas?: Long;
    data?: Uint8Array;
    chain_id?: Uint8Array;
    gas_fee_cap?: Uint8Array;
    gas_tip_cap?: Uint8Array;
    access_list?: ProtoAccessList;
    etx_gas_limit?: Long;
    etx_gas_price?: Uint8Array;
    etx_gas_tip?: Uint8Array;
    etx_data?: Uint8Array;
    etx_access_list?: ProtoAccessList;
    v?: Uint8Array;
    r?: Uint8Array;
    s?: Uint8Array;
    originating_tx_hash?: ProtoHash;
    etx_index?: number;
    etx_sender?: Uint8Array;
    tx_ins?: ProtoTxIns;
    tx_outs?: ProtoTxOuts;
    signature?: Uint8Array;
}
export declare function encodeProtoTransaction(message: ProtoTransaction): Uint8Array;
export declare function decodeProtoTransaction(binary: Uint8Array): ProtoTransaction;
export interface ProtoTransactions {
    transactions?: ProtoTransaction[];
}
export declare function encodeProtoTransactions(message: ProtoTransactions): Uint8Array;
export declare function decodeProtoTransactions(binary: Uint8Array): ProtoTransactions;
export interface ProtoHeaders {
    headers?: ProtoHeader[];
}
export declare function encodeProtoHeaders(message: ProtoHeaders): Uint8Array;
export declare function decodeProtoHeaders(binary: Uint8Array): ProtoHeaders;
export interface ProtoManifest {
    manifest?: ProtoHash[];
}
export declare function encodeProtoManifest(message: ProtoManifest): Uint8Array;
export declare function decodeProtoManifest(binary: Uint8Array): ProtoManifest;
export interface ProtoAccessList {
    access_tuples?: ProtoAccessTuple[];
}
export declare function encodeProtoAccessList(message: ProtoAccessList): Uint8Array;
export declare function decodeProtoAccessList(binary: Uint8Array): ProtoAccessList;
export interface ProtoAccessTuple {
    address?: Uint8Array;
    storage_key?: ProtoHash[];
}
export declare function encodeProtoAccessTuple(message: ProtoAccessTuple): Uint8Array;
export declare function decodeProtoAccessTuple(binary: Uint8Array): ProtoAccessTuple;
export interface ProtoReceiptForStorage {
    post_state_or_status?: Uint8Array;
    cumulative_gas_used?: Long;
    tx_hash?: ProtoHash;
    contract_address?: ProtoAddress;
    logs?: ProtoLogsForStorage;
    etxs?: ProtoTransactions;
    gas_used?: Long;
}
export declare function encodeProtoReceiptForStorage(message: ProtoReceiptForStorage): Uint8Array;
export declare function decodeProtoReceiptForStorage(binary: Uint8Array): ProtoReceiptForStorage;
export interface ProtoReceiptsForStorage {
    receipts?: ProtoReceiptForStorage[];
}
export declare function encodeProtoReceiptsForStorage(message: ProtoReceiptsForStorage): Uint8Array;
export declare function decodeProtoReceiptsForStorage(binary: Uint8Array): ProtoReceiptsForStorage;
export interface ProtoLogForStorage {
    address?: ProtoAddress;
    topics?: ProtoHash[];
    data?: Uint8Array;
}
export declare function encodeProtoLogForStorage(message: ProtoLogForStorage): Uint8Array;
export declare function decodeProtoLogForStorage(binary: Uint8Array): ProtoLogForStorage;
export interface ProtoLogsForStorage {
    logs?: ProtoLogForStorage[];
}
export declare function encodeProtoLogsForStorage(message: ProtoLogsForStorage): Uint8Array;
export declare function decodeProtoLogsForStorage(binary: Uint8Array): ProtoLogsForStorage;
export interface ProtoPendingHeader {
    header?: ProtoHeader;
    termini?: ProtoTermini;
}
export declare function encodeProtoPendingHeader(message: ProtoPendingHeader): Uint8Array;
export declare function decodeProtoPendingHeader(binary: Uint8Array): ProtoPendingHeader;
export interface ProtoTermini {
    dom_termini?: ProtoHash[];
    sub_termini?: ProtoHash[];
}
export declare function encodeProtoTermini(message: ProtoTermini): Uint8Array;
export declare function decodeProtoTermini(binary: Uint8Array): ProtoTermini;
export interface ProtoEtxSet {
    etx_set?: ProtoEtxSetEntry[];
}
export declare function encodeProtoEtxSet(message: ProtoEtxSet): Uint8Array;
export declare function decodeProtoEtxSet(binary: Uint8Array): ProtoEtxSet;
export interface ProtoEtxSetEntry {
    height?: Long;
    etx?: ProtoTransaction;
    etx_hash?: ProtoHash;
}
export declare function encodeProtoEtxSetEntry(message: ProtoEtxSetEntry): Uint8Array;
export declare function decodeProtoEtxSetEntry(binary: Uint8Array): ProtoEtxSetEntry;
export interface ProtoPendingEtxs {
    header?: ProtoHeader;
    etxs?: ProtoTransactions;
}
export declare function encodeProtoPendingEtxs(message: ProtoPendingEtxs): Uint8Array;
export declare function decodeProtoPendingEtxs(binary: Uint8Array): ProtoPendingEtxs;
export interface ProtoPendingEtxsRollup {
    header?: ProtoHeader;
    etxs_rollup?: ProtoTransactions;
}
export declare function encodeProtoPendingEtxsRollup(message: ProtoPendingEtxsRollup): Uint8Array;
export declare function decodeProtoPendingEtxsRollup(binary: Uint8Array): ProtoPendingEtxsRollup;
export interface ProtoTxIns {
    tx_ins?: ProtoTxIn[];
}
export declare function encodeProtoTxIns(message: ProtoTxIns): Uint8Array;
export declare function decodeProtoTxIns(binary: Uint8Array): ProtoTxIns;
export interface ProtoTxOuts {
    tx_outs?: ProtoTxOut[];
}
export declare function encodeProtoTxOuts(message: ProtoTxOuts): Uint8Array;
export declare function decodeProtoTxOuts(binary: Uint8Array): ProtoTxOuts;
export interface ProtoTxIn {
    previous_out_point?: ProtoOutPoint;
    pub_key?: Uint8Array;
}
export declare function encodeProtoTxIn(message: ProtoTxIn): Uint8Array;
export declare function decodeProtoTxIn(binary: Uint8Array): ProtoTxIn;
export interface ProtoOutPoint {
    hash?: ProtoHash;
    index?: number;
}
export declare function encodeProtoOutPoint(message: ProtoOutPoint): Uint8Array;
export declare function decodeProtoOutPoint(binary: Uint8Array): ProtoOutPoint;
export interface ProtoTxOut {
    denomination?: number;
    address?: Uint8Array;
}
export declare function encodeProtoTxOut(message: ProtoTxOut): Uint8Array;
export declare function decodeProtoTxOut(binary: Uint8Array): ProtoTxOut;
export interface Long {
    low: number;
    high: number;
    unsigned: boolean;
}
interface ByteBuffer {
    bytes: Uint8Array;
    offset: number;
    limit: number;
}
export declare function stringToLong(value: string): Long;
export declare function longToString(value: Long): string;
export declare function intToLong(value: number): Long;
export declare function readString(bb: ByteBuffer, count: number): string;
export declare function writeString(bb: ByteBuffer, text: string): void;
export declare function readFloat(bb: ByteBuffer): number;
export declare function writeFloat(bb: ByteBuffer, value: number): void;
export declare function readDouble(bb: ByteBuffer): number;
export declare function writeDouble(bb: ByteBuffer, value: number): void;
export declare function readInt64(bb: ByteBuffer, unsigned: boolean): Long;
export declare function writeInt64(bb: ByteBuffer, value: Long): void;
export declare function readVarint32ZigZag(bb: ByteBuffer): number;
export declare function writeVarint32ZigZag(bb: ByteBuffer, value: number): void;
export declare function readVarint64ZigZag(bb: ByteBuffer): Long;
export declare function writeVarint64ZigZag(bb: ByteBuffer, value: Long): void;
export {};
//# sourceMappingURL=protoFormats.d.ts.map