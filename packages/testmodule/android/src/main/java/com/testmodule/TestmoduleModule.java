package com.testmodule;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class TestmoduleModule extends TestmoduleSpec {
  public static final String NAME = "Testmodule";

  TestmoduleModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void echo(String message, Promise promise) {
    promise.resolve(message);
  }
}
