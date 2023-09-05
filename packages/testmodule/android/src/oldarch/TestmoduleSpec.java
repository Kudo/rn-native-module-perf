package com.testmodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class TestmoduleSpec extends ReactContextBaseJavaModule {
  TestmoduleSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void echo(String message, Promise promise);
}
