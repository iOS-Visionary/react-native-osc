//
//  OCModelPromises.m
//  ReactOSC
//
//  Created by YiXue on 2018/1/11.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "OCModelPromises.h"

@implementation OCModelPromises
//暴露给React 使用
RCT_EXPORT_MODULE()

//后面resolve reject 暂时理解为：成功回调，失败回调
RCT_REMAP_METHOD(promisesParam,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *requestBackData = @"哈哈，我是OC 通过 Promises方式 传过来的参数";
  //模拟网络请求成功
  if(requestBackData.length == 0){
    resolve(requestBackData);
  }else{
    NSError *error=[NSError errorWithDomain:@"OC请求失败" code:101 userInfo:nil];
    reject(@"param1",error.description,error);
  }
  
}
@end
