// package: io.inpublic.twitter.v1
// file: v1/metrics.proto

var v1_metrics_pb = require("../v1/metrics_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Metrics = (function () {
  function Metrics() {}
  Metrics.serviceName = "io.inpublic.twitter.v1.Metrics";
  return Metrics;
}());

Metrics.ContributionsPerInterval = {
  methodName: "ContributionsPerInterval",
  service: Metrics,
  requestStream: false,
  responseStream: false,
  requestType: v1_metrics_pb.IntervalAggregateQuery,
  responseType: v1_metrics_pb.ContributionMetrics
};

Metrics.ContributionsStats = {
  methodName: "ContributionsStats",
  service: Metrics,
  requestStream: false,
  responseStream: false,
  requestType: v1_metrics_pb.RangeAggregateQuery,
  responseType: v1_metrics_pb.StatsMetrics
};

Metrics.ContributorsReach = {
  methodName: "ContributorsReach",
  service: Metrics,
  requestStream: false,
  responseStream: false,
  requestType: v1_metrics_pb.RangeAggregateQuery,
  responseType: v1_metrics_pb.ReachMetrics
};

Metrics.ContributorsStats = {
  methodName: "ContributorsStats",
  service: Metrics,
  requestStream: false,
  responseStream: false,
  requestType: v1_metrics_pb.RangeAggregateQuery,
  responseType: v1_metrics_pb.StatsMetrics
};

exports.Metrics = Metrics;

function MetricsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MetricsClient.prototype.contributionsPerInterval = function contributionsPerInterval(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Metrics.ContributionsPerInterval, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MetricsClient.prototype.contributionsStats = function contributionsStats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Metrics.ContributionsStats, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MetricsClient.prototype.contributorsReach = function contributorsReach(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Metrics.ContributorsReach, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MetricsClient.prototype.contributorsStats = function contributorsStats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Metrics.ContributorsStats, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MetricsClient = MetricsClient;

