import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from "ton-core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type Balance = {
  $$type: "Balance";
  balance: bigint | null;
  winnings: bigint;
};

export function storeBalance(src: Balance) {
  return (builder: Builder) => {
    let b_0 = builder;
    if (src.balance !== null && src.balance !== undefined) {
      b_0.storeBit(true).storeUint(src.balance, 32);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeUint(src.winnings, 32);
  };
}

export function loadBalance(slice: Slice) {
  let sc_0 = slice;
  let _balance = sc_0.loadBit() ? sc_0.loadUintBig(32) : null;
  let _winnings = sc_0.loadUintBig(32);
  return { $$type: "Balance" as const, balance: _balance, winnings: _winnings };
}

function loadTupleBalance(source: TupleReader) {
  let _balance = source.readBigNumberOpt();
  let _winnings = source.readBigNumber();
  return { $$type: "Balance" as const, balance: _balance, winnings: _winnings };
}

function storeTupleBalance(source: Balance) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.balance);
  builder.writeNumber(source.winnings);
  return builder.build();
}

function dictValueParserBalance(): DictionaryValue<Balance> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeBalance(src)).endCell());
    },
    parse: (src) => {
      return loadBalance(src.loadRef().beginParse());
    },
  };
}

export type ContestDetails = {
  $$type: "ContestDetails";
  totalBalance: bigint;
  contestEstPrize: bigint;
  contestEndTime: bigint;
  winningChance: bigint;
};

export function storeContestDetails(src: ContestDetails) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(src.totalBalance, 32);
    b_0.storeUint(src.contestEstPrize, 32);
    b_0.storeUint(src.contestEndTime, 32);
    b_0.storeUint(src.winningChance, 32);
  };
}

export function loadContestDetails(slice: Slice) {
  let sc_0 = slice;
  let _totalBalance = sc_0.loadUintBig(32);
  let _contestEstPrize = sc_0.loadUintBig(32);
  let _contestEndTime = sc_0.loadUintBig(32);
  let _winningChance = sc_0.loadUintBig(32);
  return {
    $$type: "ContestDetails" as const,
    totalBalance: _totalBalance,
    contestEstPrize: _contestEstPrize,
    contestEndTime: _contestEndTime,
    winningChance: _winningChance,
  };
}

function loadTupleContestDetails(source: TupleReader) {
  let _totalBalance = source.readBigNumber();
  let _contestEstPrize = source.readBigNumber();
  let _contestEndTime = source.readBigNumber();
  let _winningChance = source.readBigNumber();
  return {
    $$type: "ContestDetails" as const,
    totalBalance: _totalBalance,
    contestEstPrize: _contestEstPrize,
    contestEndTime: _contestEndTime,
    winningChance: _winningChance,
  };
}

function storeTupleContestDetails(source: ContestDetails) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.totalBalance);
  builder.writeNumber(source.contestEstPrize);
  builder.writeNumber(source.contestEndTime);
  builder.writeNumber(source.winningChance);
  return builder.build();
}

function dictValueParserContestDetails(): DictionaryValue<ContestDetails> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContestDetails(src)).endCell());
    },
    parse: (src) => {
      return loadContestDetails(src.loadRef().beginParse());
    },
  };
}

export type Withdraw = {
  $$type: "Withdraw";
  amount: bigint;
};

export function storeWithdraw(src: Withdraw) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(195467089, 32);
    b_0.storeCoins(src.amount);
  };
}

export function loadWithdraw(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 195467089) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  return { $$type: "Withdraw" as const, amount: _amount };
}

function loadTupleWithdraw(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "Withdraw" as const, amount: _amount };
}

function storeTupleWithdraw(source: Withdraw) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeWithdraw(src)).endCell());
    },
    parse: (src) => {
      return loadWithdraw(src.loadRef().beginParse());
    },
  };
}

export type Deposit = {
  $$type: "Deposit";
  amount: bigint;
};

export function storeDeposit(src: Deposit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(569292295, 32);
    b_0.storeCoins(src.amount);
  };
}

export function loadDeposit(slice: Slice) {}

function loadTupleDeposit(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "Deposit" as const, amount: _amount };
}

function storeTupleDeposit(source: Deposit) {}

function dictValueParserDeposit(): DictionaryValue<Deposit> {}

type Tonpool_init_args = {
  $$type: "Tonpool_init_args";
};

function initTonpool_init_args(src: Tonpool_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function Tonpool_init() {}

const Tonpool_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  54615: { message: `Insufficient balance` },
};

const Tonpool_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      {
        name: "bounced",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      {
        name: "bounce",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "to",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mode",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "cashback",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "Balance",
    header: null,
    fields: [
      {
        name: "balance",
        type: { kind: "simple", type: "uint", optional: true, format: 32 },
      },
      {
        name: "winnings",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
    ],
  },
  {
    name: "ContestDetails",
    header: null,
    fields: [
      {
        name: "totalBalance",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
      {
        name: "contestEstPrize",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
      {
        name: "contestEndTime",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
      {
        name: "winningChance",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
    ],
  },
  {
    name: "Withdraw",
    header: 195467089,
    fields: [
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
  {
    name: "Deposit",
    header: 569292295,
    fields: [
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
];

const Tonpool_getters: ABIGetter[] = [
  {
    name: "getBalanceDetails",
    arguments: [
      {
        name: "userAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "Balance", optional: false },
  },
  {
    name: "getActiveContest",
    arguments: [],
    returnType: { kind: "simple", type: "ContestDetails", optional: false },
  },
];

const Tonpool_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "typed", type: "Deposit" } },
  { receiver: "internal", message: { kind: "typed", type: "Withdraw" } },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

export class Tonpool implements Contract {
  static async init() {
    return await Tonpool_init();
  }

  static async fromInit() {
    const init = await Tonpool_init();
    const address = contractAddress(0, init);
    return new Tonpool(address, init);
  }

  static fromAddress(address: Address) {
    return new Tonpool(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: Tonpool_types,
    getters: Tonpool_getters,
    receivers: Tonpool_receivers,
    errors: Tonpool_errors,
  };

  constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: Deposit | Withdraw | Deploy
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deposit"
    ) {
      body = beginCell().store(storeDeposit(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Withdraw"
    ) {
      body = beginCell().store(storeWithdraw(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deploy"
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getGetBalanceDetails(provider: ContractProvider, userAddress: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(userAddress);
    let source = (await provider.get("getBalanceDetails", builder.build()))
      .stack;
    const result = loadTupleBalance(source);
    return result;
  }

  async getGetActiveContest(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("getActiveContest", builder.build()))
      .stack;
    const result = loadTupleContestDetails(source);
    return result;
  }
}
