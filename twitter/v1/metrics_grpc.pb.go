// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package protocol

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MetricsClient is the client API for Metrics service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MetricsClient interface {
	ContributionsPerInterval(ctx context.Context, in *IntervalAggregateQuery, opts ...grpc.CallOption) (*ContributionMetrics, error)
	ContributionsStats(ctx context.Context, in *RangeAggregateQuery, opts ...grpc.CallOption) (*StatsMetrics, error)
	ContributorsReach(ctx context.Context, in *RangeAggregateQuery, opts ...grpc.CallOption) (*ReachMetrics, error)
	ContributorsStats(ctx context.Context, in *RangeAggregateQuery, opts ...grpc.CallOption) (*StatsMetrics, error)
}

type metricsClient struct {
	cc grpc.ClientConnInterface
}

func NewMetricsClient(cc grpc.ClientConnInterface) MetricsClient {
	return &metricsClient{cc}
}

func (c *metricsClient) ContributionsPerInterval(ctx context.Context, in *IntervalAggregateQuery, opts ...grpc.CallOption) (*ContributionMetrics, error) {
	out := new(ContributionMetrics)
	err := c.cc.Invoke(ctx, "/io.inpublic.twitter.v1.Metrics/ContributionsPerInterval", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metricsClient) ContributionsStats(ctx context.Context, in *RangeAggregateQuery, opts ...grpc.CallOption) (*StatsMetrics, error) {
	out := new(StatsMetrics)
	err := c.cc.Invoke(ctx, "/io.inpublic.twitter.v1.Metrics/ContributionsStats", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metricsClient) ContributorsReach(ctx context.Context, in *RangeAggregateQuery, opts ...grpc.CallOption) (*ReachMetrics, error) {
	out := new(ReachMetrics)
	err := c.cc.Invoke(ctx, "/io.inpublic.twitter.v1.Metrics/ContributorsReach", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metricsClient) ContributorsStats(ctx context.Context, in *RangeAggregateQuery, opts ...grpc.CallOption) (*StatsMetrics, error) {
	out := new(StatsMetrics)
	err := c.cc.Invoke(ctx, "/io.inpublic.twitter.v1.Metrics/ContributorsStats", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MetricsServer is the server API for Metrics service.
// All implementations must embed UnimplementedMetricsServer
// for forward compatibility
type MetricsServer interface {
	ContributionsPerInterval(context.Context, *IntervalAggregateQuery) (*ContributionMetrics, error)
	ContributionsStats(context.Context, *RangeAggregateQuery) (*StatsMetrics, error)
	ContributorsReach(context.Context, *RangeAggregateQuery) (*ReachMetrics, error)
	ContributorsStats(context.Context, *RangeAggregateQuery) (*StatsMetrics, error)
	mustEmbedUnimplementedMetricsServer()
}

// UnimplementedMetricsServer must be embedded to have forward compatible implementations.
type UnimplementedMetricsServer struct {
}

func (UnimplementedMetricsServer) ContributionsPerInterval(context.Context, *IntervalAggregateQuery) (*ContributionMetrics, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ContributionsPerInterval not implemented")
}
func (UnimplementedMetricsServer) ContributionsStats(context.Context, *RangeAggregateQuery) (*StatsMetrics, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ContributionsStats not implemented")
}
func (UnimplementedMetricsServer) ContributorsReach(context.Context, *RangeAggregateQuery) (*ReachMetrics, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ContributorsReach not implemented")
}
func (UnimplementedMetricsServer) ContributorsStats(context.Context, *RangeAggregateQuery) (*StatsMetrics, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ContributorsStats not implemented")
}
func (UnimplementedMetricsServer) mustEmbedUnimplementedMetricsServer() {}

// UnsafeMetricsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MetricsServer will
// result in compilation errors.
type UnsafeMetricsServer interface {
	mustEmbedUnimplementedMetricsServer()
}

func RegisterMetricsServer(s grpc.ServiceRegistrar, srv MetricsServer) {
	s.RegisterService(&Metrics_ServiceDesc, srv)
}

func _Metrics_ContributionsPerInterval_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IntervalAggregateQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetricsServer).ContributionsPerInterval(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/io.inpublic.twitter.v1.Metrics/ContributionsPerInterval",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetricsServer).ContributionsPerInterval(ctx, req.(*IntervalAggregateQuery))
	}
	return interceptor(ctx, in, info, handler)
}

func _Metrics_ContributionsStats_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RangeAggregateQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetricsServer).ContributionsStats(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/io.inpublic.twitter.v1.Metrics/ContributionsStats",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetricsServer).ContributionsStats(ctx, req.(*RangeAggregateQuery))
	}
	return interceptor(ctx, in, info, handler)
}

func _Metrics_ContributorsReach_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RangeAggregateQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetricsServer).ContributorsReach(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/io.inpublic.twitter.v1.Metrics/ContributorsReach",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetricsServer).ContributorsReach(ctx, req.(*RangeAggregateQuery))
	}
	return interceptor(ctx, in, info, handler)
}

func _Metrics_ContributorsStats_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RangeAggregateQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetricsServer).ContributorsStats(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/io.inpublic.twitter.v1.Metrics/ContributorsStats",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetricsServer).ContributorsStats(ctx, req.(*RangeAggregateQuery))
	}
	return interceptor(ctx, in, info, handler)
}

// Metrics_ServiceDesc is the grpc.ServiceDesc for Metrics service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Metrics_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "io.inpublic.twitter.v1.Metrics",
	HandlerType: (*MetricsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ContributionsPerInterval",
			Handler:    _Metrics_ContributionsPerInterval_Handler,
		},
		{
			MethodName: "ContributionsStats",
			Handler:    _Metrics_ContributionsStats_Handler,
		},
		{
			MethodName: "ContributorsReach",
			Handler:    _Metrics_ContributorsReach_Handler,
		},
		{
			MethodName: "ContributorsStats",
			Handler:    _Metrics_ContributorsStats_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "v1/metrics.proto",
}
