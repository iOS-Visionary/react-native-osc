//
//  OCViewManager.m
//  ReactOSC
//
//  Created by YiXue on 2018/1/11.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "OCViewManager.h"

@implementation OCViewManager

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/
RCT_EXPORT_MODULE()
- (UIView *)view{
  OCView *view = [[OCView alloc]initWithFrame:CGRectMake(100, 100, 100, 100)];
  return view;
}

@end
