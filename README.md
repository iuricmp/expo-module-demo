# Expo Module Demo

This is a demo of how to use the [expo-module](https://docs.expo.dev/modules/get-started) template to create a native module for Expo.

It also shows how to use the module in a React Native app.

There is an attempt to use the [gomobile](packages/hello-module/) module in a React Native Web app, but it doesn't work yet.

I'm struggling to get the `gomobile` module to work in a React Native Web app. I'm getting the following error:

```
❌  (~/dev/berty/expo-module-poc/apps/cool-app/ios/Pods/Headers/Public/HelloModule/Hello.h:1:9)

> 1 | #import "Hello/Hello.h"
    |         ^ 'Hello/Hello.h' file not found
  2 |
```

### Links

- https://danielwiese.com/posts/react-native-gomobile/
