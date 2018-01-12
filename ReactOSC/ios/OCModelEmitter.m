//
//  OCModelEmitter.m
//  ReactOSC
//
//  Created by YiXue on 2018/1/11.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "OCModelEmitter.h"

@implementation OCModelEmitter
//暴露给React 使用
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(receiveNoti:(NSString *)param)
{
  //react 调用方法
  RCTLogInfo(@"receiveNoti->:%@",param);
  
  //模拟异步完成后 发送通知 testEmitter 与对外 暴露的一致
  [self sendEventWithName:@"testEmitter" body:@{
                                               @"code": @"200",
                                               @"result": @"我是网络数据",
                                               }];
  
}

//重写 react 方法 ，导出对外支持的方法
- (NSArray<NSString *> *)supportedEvents{
  return @[@"testEmitter"];
}



@end
