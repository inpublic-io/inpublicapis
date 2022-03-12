// package: io.inpublic.twitter.v1
// file: v1/metrics.proto

import * as v1_metrics_pb from "../v1/metrics_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MetricsContributionsPerInterval = {
  readonly methodName: string;
  readonly service: typeof Metrics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_metrics_pb.IntervalAggregateQuery;
  readonly responseType: typeof v1_metrics_pb.ContributionMetrics;
};

type MetricsContributionsStats = {
  readonly methodName: string;
  readonly service: typeof Metrics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_metrics_pb.RangeAggregateQuery;
  readonly responseType: typeof v1_metrics_pb.StatsMetrics;
};

type MetricsContributorsReach = {
  readonly methodName: string;
  readonly service: typeof Metrics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_metrics_pb.RangeAggregateQuery;
  readonly responseType: typeof v1_metrics_pb.ReachMetrics;
};

type MetricsContributorsStats = {
  readonly methodName: string;
  readonly service: typeof Metrics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof v1_metrics_pb.RangeAggregateQuery;
  readonly responseType: typeof v1_metrics_pb.StatsMetrics;
};

export class Metrics {
  static readonly serviceName: string;
  static readonly ContributionsPerInterval: MetricsContributionsPerInterval;
  static readonly ContributionsStats: MetricsContributionsStats;
  static readonly ContributorsReach: MetricsContributorsReach;
  static readonly ContributorsStats: MetricsContributorsStats;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MetricsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  contributionsPerInterval(
    requestMessage: v1_metrics_pb.IntervalAggregateQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.ContributionMetrics|null) => void
  ): UnaryResponse;
  contributionsPerInterval(
    requestMessage: v1_metrics_pb.IntervalAggregateQuery,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.ContributionMetrics|null) => void
  ): UnaryResponse;
  contributionsStats(
    requestMessage: v1_metrics_pb.RangeAggregateQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.StatsMetrics|null) => void
  ): UnaryResponse;
  contributionsStats(
    requestMessage: v1_metrics_pb.RangeAggregateQuery,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.StatsMetrics|null) => void
  ): UnaryResponse;
  contributorsReach(
    requestMessage: v1_metrics_pb.RangeAggregateQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.ReachMetrics|null) => void
  ): UnaryResponse;
  contributorsReach(
    requestMessage: v1_metrics_pb.RangeAggregateQuery,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.ReachMetrics|null) => void
  ): UnaryResponse;
  contributorsStats(
    requestMessage: v1_metrics_pb.RangeAggregateQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.StatsMetrics|null) => void
  ): UnaryResponse;
  contributorsStats(
    requestMessage: v1_metrics_pb.RangeAggregateQuery,
    callback: (error: ServiceError|null, responseMessage: v1_metrics_pb.StatsMetrics|null) => void
  ): UnaryResponse;
}

