declare module "@capacitor/core" {
  interface PluginRegistry {
    CameraPreviewCapacitor: CameraPreviewPlugin;
  }
}

export interface CameraPreviewPlugin {
  start({}): Promise<{}>;
  stop(): Promise<{}>;
  capture(): Promise<{ value: string }>;
}
