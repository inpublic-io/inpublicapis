// package: io.inpublic.twitter.v1
// file: v1/metrics.proto

import * as jspb from "google-protobuf";

export class IntervalAggregateQuery extends jspb.Message {
  getRange(): string;
  setRange(value: string): void;

  getInterval(): string;
  setInterval(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntervalAggregateQuery.AsObject;
  static toObject(includeInstance: boolean, msg: IntervalAggregateQuery): IntervalAggregateQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntervalAggregateQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntervalAggregateQuery;
  static deserializeBinaryFromReader(message: IntervalAggregateQuery, reader: jspb.BinaryReader): IntervalAggregateQuery;
}

export namespace IntervalAggregateQuery {
  export type AsObject = {
    range: string,
    interval: string,
  }
}

export class ContributionMetrics extends jspb.Message {
  getValuesMap(): jspb.Map<string, number>;
  clearValuesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContributionMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ContributionMetrics): ContributionMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContributionMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContributionMetrics;
  static deserializeBinaryFromReader(message: ContributionMetrics, reader: jspb.BinaryReader): ContributionMetrics;
}

export namespace ContributionMetrics {
  export type AsObject = {
    valuesMap: Array<[string, number]>,
  }
}

export class RangeAggregateQuery extends jspb.Message {
  getRange(): string;
  setRange(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeAggregateQuery.AsObject;
  static toObject(includeInstance: boolean, msg: RangeAggregateQuery): RangeAggregateQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeAggregateQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeAggregateQuery;
  static deserializeBinaryFromReader(message: RangeAggregateQuery, reader: jspb.BinaryReader): RangeAggregateQuery;
}

export namespace RangeAggregateQuery {
  export type AsObject = {
    range: string,
  }
}

export class ReachMetrics extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ReachMetrics): ReachMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReachMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachMetrics;
  static deserializeBinaryFromReader(message: ReachMetrics, reader: jspb.BinaryReader): ReachMetrics;
}

export namespace ReachMetrics {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class StatsMetrics extends jspb.Message {
  getAverage(): number;
  setAverage(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  getSum(): number;
  setSum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: StatsMetrics): StatsMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatsMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsMetrics;
  static deserializeBinaryFromReader(message: StatsMetrics, reader: jspb.BinaryReader): StatsMetrics;
}

export namespace StatsMetrics {
  export type AsObject = {
    average: number,
    total: number,
    sum: number,
  }
}

