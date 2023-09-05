#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTestmoduleSpec.h"

@interface Testmodule : NSObject <NativeTestmoduleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Testmodule : NSObject <RCTBridgeModule>
#endif

@end
