// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package protocol

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// UsersClient is the client API for Users service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UsersClient interface {
	LookupInpublic(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*User, error)
}

type usersClient struct {
	cc grpc.ClientConnInterface
}

func NewUsersClient(cc grpc.ClientConnInterface) UsersClient {
	return &usersClient{cc}
}

func (c *usersClient) LookupInpublic(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*User, error) {
	out := new(User)
	err := c.cc.Invoke(ctx, "/io.inpublic.twitter.v1.Users/LookupInpublic", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UsersServer is the server API for Users service.
// All implementations must embed UnimplementedUsersServer
// for forward compatibility
type UsersServer interface {
	LookupInpublic(context.Context, *emptypb.Empty) (*User, error)
	mustEmbedUnimplementedUsersServer()
}

// UnimplementedUsersServer must be embedded to have forward compatible implementations.
type UnimplementedUsersServer struct {
}

func (UnimplementedUsersServer) LookupInpublic(context.Context, *emptypb.Empty) (*User, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LookupInpublic not implemented")
}
func (UnimplementedUsersServer) mustEmbedUnimplementedUsersServer() {}

// UnsafeUsersServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UsersServer will
// result in compilation errors.
type UnsafeUsersServer interface {
	mustEmbedUnimplementedUsersServer()
}

func RegisterUsersServer(s grpc.ServiceRegistrar, srv UsersServer) {
	s.RegisterService(&Users_ServiceDesc, srv)
}

func _Users_LookupInpublic_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UsersServer).LookupInpublic(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/io.inpublic.twitter.v1.Users/LookupInpublic",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UsersServer).LookupInpublic(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// Users_ServiceDesc is the grpc.ServiceDesc for Users service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Users_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "io.inpublic.twitter.v1.Users",
	HandlerType: (*UsersServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "LookupInpublic",
			Handler:    _Users_LookupInpublic_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "twitter/v1/users.proto",
}
