import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "MBG Custom Test",
  slug: "mbg-custom-test",
  version: process.env.APP_VERSION ?? "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.9fourlabs.mbgcustomtest",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.ninefourlabs.mbgcustomtest",
  },
  extra: {
    eas: {
      projectId: process.env.EXPO_PROJECT_ID ?? "",
    },
  },
};

export default config;
