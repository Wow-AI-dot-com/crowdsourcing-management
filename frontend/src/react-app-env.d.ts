/// <reference types="react-scripts" />

import ReactDOM from "react-dom/client";

declare global {
  interface Window {
    UIRender: (rootElement: HTMLElement) => ReactDOM.Root;
    APP_SETTINGS: {
      title: string;
      debug: boolean;
      mqtt_server: string;
      mqtt_port: number;
      mqtt_port_tls: number;
      toolbar_predict_sam: string;
      toolbar_predict_rectangle: string;
      toolbar_predict_polygon: string;
      hostname: string;
      ip_compute: string;
      editor_keymap: object;
      feature_flags: object;
      feature_flags_default_value: object;
      csrf: string;
      lsfJS: string;
      lsfCSS: string;
      riaJS: string;
      riaCSS: string;
      tdeJS: string;
      tdeCSS: string;
    };
    LabelStudio?: any;
    RIA?: (props: Object, element: HTMLDivElement) => void;
    TDE?: (props: Object, element: HTMLDivElement) => void;
  }

  interface String {
    toUpperCaseFirst(): string;
  }

  declare module "*.pdf" {
    const content: string;
    export default content;
  }
}
