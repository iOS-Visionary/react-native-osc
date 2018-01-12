//
//  OCView.m
//  ReactOSC
//
//  Created by YiXue on 2018/1/11.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "OCView.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation OCView
- (instancetype)init
{
  self = [super init];
  if (self) {
//    UISwitch *swith = [[UISwitch alloc]initWithFrame:CGRectMake(100, 100, 100, 100)];
//    [self addSubview:swith];
  }
  return self;
}
- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    //1.0 原生View
    self.backgroundColor = [UIColor redColor];
    UILabel *label = [[UILabel alloc]initWithFrame:CGRectMake(0, 100, 200, 100)];
    label.text = @"我是原生UILabel";
    label.backgroundColor = [UIColor blueColor];
    [self addSubview:label];
    
    NSURL *jsCodeLocation;
    
    //2.0 ReactView
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"ReactToOCView"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    rootView.backgroundColor = [[UIColor alloc] initWithRed:0.0f green:0.0f blue:0.0f alpha:1];
    [self addSubview:rootView];
    
    
  }
  return self;
}

@end
