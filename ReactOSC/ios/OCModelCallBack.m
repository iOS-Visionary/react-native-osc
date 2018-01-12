//
//  OCModelCallBack.m
//  ReactOSC
//
//  Created by YiXue on 2018/1/11.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "OCModelCallBack.h"

@implementation OCModelCallBack
//暴露给React 使用
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(Callback:(RCTResponseSenderBlock)block)
{
  NSString *backData = @"哈哈，我是OC 通过 callback方式 传过来的参数";
  block(@[backData]);
}
@end
