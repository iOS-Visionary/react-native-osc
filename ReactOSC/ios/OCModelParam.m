//
//  OCModelParam.m
//  ReactOSC
//
//  Created by YiXue on 2018/1/11.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "OCModelParam.h"

@implementation OCModelParam
//暴露给React 使用
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(reactParam:(NSString *)param)
{
  RCTLogInfo(@"%@", param);
}
@end
