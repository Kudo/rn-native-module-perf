import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-testmodule' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const TestmoduleModule = isTurboModuleEnabled
  ? require('./NativeTestmodule').default
  : NativeModules.Testmodule;

const Testmodule = TestmoduleModule
  ? TestmoduleModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function echo(message: string): Promise<string> {
  return Testmodule.echo(message);
}
