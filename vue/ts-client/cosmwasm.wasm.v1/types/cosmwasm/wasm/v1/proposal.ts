/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AccessConfig } from "./types";

export const protobufPackage = "cosmwasm.wasm.v1";

/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission:
    | AccessConfig
    | undefined;
  /** UnpinCode code on upload, optional */
  unpinCode: boolean;
}

/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: number;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}

/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: number;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}

/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}

/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}

/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  codeIds: number[];
}

/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  codeIds: number[];
}

/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
  /** CodeID is the reference to the stored WASM code to be updated */
  codeId: number;
  /** InstantiatePermission to apply to the set of code ids */
  instantiatePermission: AccessConfig | undefined;
}

/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */
  accessConfigUpdates: AccessConfigUpdate[];
}

function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined,
    unpinCode: false,
  };
}

export const StoreCodeProposal = {
  encode(message: StoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(64).bool(message.unpinCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.wasmByteCode = reader.bytes();
          break;
        case 7:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 8:
          message.unpinCode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreCodeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission)
        ? AccessConfig.fromJSON(object.instantiatePermission)
        : undefined,
      unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
    };
  },

  toJSON(message: StoreCodeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined
      && (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array(),
      ));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission
      ? AccessConfig.toJSON(message.instantiatePermission)
      : undefined);
    message.unpinCode !== undefined && (obj.unpinCode = message.unpinCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoreCodeProposal>, I>>(object: I): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission =
      (object.instantiatePermission !== undefined && object.instantiatePermission !== null)
        ? AccessConfig.fromPartial(object.instantiatePermission)
        : undefined;
    message.unpinCode = object.unpinCode ?? false;
    return message;
  },
};

function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return { title: "", description: "", runAs: "", admin: "", codeId: 0, label: "", msg: new Uint8Array(), funds: [] };
}

export const InstantiateContractProposal = {
  encode(message: InstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.codeId !== 0) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Number(object.codeId) : 0,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: InstantiateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = Math.round(message.codeId));
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined
      && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstantiateContractProposal>, I>>(object: I): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId ?? 0;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMigrateContractProposal(): MigrateContractProposal {
  return { title: "", description: "", contract: "", codeId: 0, msg: new Uint8Array() };
}

export const MigrateContractProposal = {
  encode(message: MigrateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.codeId !== 0) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MigrateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? Number(object.codeId) : 0,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
    };
  },

  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = Math.round(message.codeId));
    message.msg !== undefined
      && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MigrateContractProposal>, I>>(object: I): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId ?? 0;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
};

function createBaseSudoContractProposal(): SudoContractProposal {
  return { title: "", description: "", contract: "", msg: new Uint8Array() };
}

export const SudoContractProposal = {
  encode(message: SudoContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SudoContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
    };
  },

  toJSON(message: SudoContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined
      && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SudoContractProposal>, I>>(object: I): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
};

function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return { title: "", description: "", runAs: "", contract: "", msg: new Uint8Array(), funds: [] };
}

export const ExecuteContractProposal = {
  encode(message: ExecuteContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecuteContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExecuteContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined
      && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecuteContractProposal>, I>>(object: I): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return { title: "", description: "", newAdmin: "", contract: "" };
}

export const UpdateAdminProposal = {
  encode(message: UpdateAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: UpdateAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAdminProposal>, I>>(object: I): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseClearAdminProposal(): ClearAdminProposal {
  return { title: "", description: "", contract: "" };
}

export const ClearAdminProposal = {
  encode(message: ClearAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClearAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClearAdminProposal>, I>>(object: I): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBasePinCodesProposal(): PinCodesProposal {
  return { title: "", description: "", codeIds: [] };
}

export const PinCodesProposal = {
  encode(message: PinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.codeIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: PinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => Math.round(e));
    } else {
      obj.codeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinCodesProposal>, I>>(object: I): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return { title: "", description: "", codeIds: [] };
}

export const UnpinCodesProposal = {
  encode(message: UnpinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.codeIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnpinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: UnpinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => Math.round(e));
    } else {
      obj.codeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnpinCodesProposal>, I>>(object: I): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseAccessConfigUpdate(): AccessConfigUpdate {
  return { codeId: 0, instantiatePermission: undefined };
}

export const AccessConfigUpdate = {
  encode(message: AccessConfigUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeId !== 0) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfigUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccessConfigUpdate {
    return {
      codeId: isSet(object.codeId) ? Number(object.codeId) : 0,
      instantiatePermission: isSet(object.instantiatePermission)
        ? AccessConfig.fromJSON(object.instantiatePermission)
        : undefined,
    };
  },

  toJSON(message: AccessConfigUpdate): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = Math.round(message.codeId));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission
      ? AccessConfig.toJSON(message.instantiatePermission)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccessConfigUpdate>, I>>(object: I): AccessConfigUpdate {
    const message = createBaseAccessConfigUpdate();
    message.codeId = object.codeId ?? 0;
    message.instantiatePermission =
      (object.instantiatePermission !== undefined && object.instantiatePermission !== null)
        ? AccessConfig.fromPartial(object.instantiatePermission)
        : undefined;
    return message;
  },
};

function createBaseUpdateInstantiateConfigProposal(): UpdateInstantiateConfigProposal {
  return { title: "", description: "", accessConfigUpdates: [] };
}

export const UpdateInstantiateConfigProposal = {
  encode(message: UpdateInstantiateConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.accessConfigUpdates) {
      AccessConfigUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstantiateConfigProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.accessConfigUpdates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstantiateConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      accessConfigUpdates: Array.isArray(object?.accessConfigUpdates)
        ? object.accessConfigUpdates.map((e: any) => AccessConfigUpdate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateInstantiateConfigProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.accessConfigUpdates) {
      obj.accessConfigUpdates = message.accessConfigUpdates.map((e) => e ? AccessConfigUpdate.toJSON(e) : undefined);
    } else {
      obj.accessConfigUpdates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstantiateConfigProposal>, I>>(
    object: I,
  ): UpdateInstantiateConfigProposal {
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.accessConfigUpdates = object.accessConfigUpdates?.map((e) => AccessConfigUpdate.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
